import re
import os

with open(r'C:\Users\chenc\.gemini\antigravity\brain\f05be4a0-4eb4-4984-8abd-ee12da2e862b\scratch\pdf_contents.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def get_lines(start, end):
    return [l.strip() for l in lines[start-1:end]]

out_dir = r'C:\Users\chenc\.gemini\antigravity\scratch\ne-lesson5-study\src\data'
os.makedirs(out_dir, exist_ok=True)

# 1. Words
q_lines = get_lines(493, 727)
a_lines = get_lines(2087, 2196)

words_kr = {}
for l in q_lines:
    m = re.match(r'^(\d+)\.\s+(.+?)\d+\)\s*_{2,}', l)
    if m:
        words_kr[int(m.group(1))] = m.group(2).strip()
    else:
        m = re.match(r'^(\d+)\.\s+(.+?)\d+\)', l)
        if m:
            words_kr[int(m.group(1))] = m.group(2).strip()

words_en = {}
for l in a_lines:
    m = re.match(r'^(\d+)\)\s*(.+)', l)
    if m:
        words_en[int(m.group(1))] = m.group(2).strip()

words_ts = "export interface WordItem {\n  id: number;\n  korean: string;\n  english: string;\n}\n\nexport const wordList: WordItem[] = [\n"
for i in range(1, 108):
    if i in words_kr and i in words_en:
        words_ts += f'  {{ id: {i}, korean: {repr(words_kr[i])}, english: {repr(words_en[i])} }},\n'
words_ts += "];\n"

with open(os.path.join(out_dir, 'words.ts'), 'w', encoding='utf-8') as f:
    f.write(words_ts)


# 2. Fill Blank
fb_q = get_lines(2380, 2545)
fb_a = get_lines(2507, 2545)

answers_map = {1: {}, 2: {}, 3: {}, 4: {}}
current_passage = 0
for l in fb_a:
    if l.startswith('본문 '):
        current_passage = int(re.search(r'\d+', l).group())
    else:
        m = re.match(r'^(\d+)\)\s*(.+)', l)
        if m and current_passage > 0:
            answers_map[current_passage][int(m.group(1))] = [a.strip() for a in m.group(2).split('/')]
        elif current_passage > 0 and len(answers_map[current_passage]) > 0:
            last_id = max(answers_map[current_passage].keys())
            if not l.startswith('Part') and not l.startswith('정답') and not l.startswith('개정') and not l.startswith('본 콘텐츠'):
                parts = [a.strip() for a in l.split('/')]
                answers_map[current_passage][last_id].extend(parts)

fill_ts = "export interface BlankItem {\n  id: number;\n  korean: string;\n  sentence: string;\n  answers: string[];\n}\n\nexport interface Passage {\n  title: string;\n  items: BlankItem[];\n}\n\nexport const passages: Passage[] = [\n"

passages_data = {1: [], 2: [], 3: [], 4: []}
current_passage = 0
last_q = 0

kr_text = ""
for l in fb_q:
    m_kr = re.match(r'^(\d+)\.\s+(.+?)\d+\)$', l)
    if m_kr:
        q_id = int(m_kr.group(1))
        kr_text = m_kr.group(2).strip()
        if q_id <= last_q or current_passage == 0:
            current_passage += 1
        last_q = q_id
        continue
    
    if current_passage > 0 and '___' in l:
        en_text = re.sub(r'_{2,}', '___BLANK___', l)
        ans = answers_map[current_passage].get(last_q, [])
        ans = [a for a in ans if a]
        passages_data[current_passage].append({
            'id': last_q,
            'korean': kr_text,
            'sentence': en_text,
            'answers': ans
        })

for p, items in passages_data.items():
    if not items: continue
    fill_ts += f'  {{\n    title: "본문 {p}",\n    items: [\n'
    for item in items:
        fill_ts += f'      {{ id: {item["id"]}, korean: {repr(item["korean"])}, sentence: {repr(item["sentence"])}, answers: {repr(item["answers"])} }},\n'
    fill_ts += "    ]\n  },\n"
fill_ts += "];\n"

with open(os.path.join(out_dir, 'fillBlank.ts'), 'w', encoding='utf-8') as f:
    f.write(fill_ts)


# 3. Sentences
s_q = get_lines(2872, 2990)
s_a = get_lines(3004, 3063)

s_answers = {1: {}, 2: {}, 3: {}, 4: {}}
current_passage = 0
for l in s_a:
    if l.startswith('본문 '):
        current_passage = int(re.search(r'\d+', l).group())
    else:
        m = re.match(r'^(\d+)\)\s*(.+)', l)
        if m and current_passage > 0:
            ans_str = m.group(2).replace(' / ', ' ').strip()
            s_answers[current_passage][int(m.group(1))] = ans_str
        elif current_passage > 0 and len(s_answers[current_passage]) > 0:
            if not l.startswith('Part') and not l.startswith('정답'):
                last_id = max(s_answers[current_passage].keys())
                s_answers[current_passage][last_id] += ' ' + l.replace(' / ', ' ').strip()

s_ts = "export interface SentenceItem {\n  id: number;\n  korean: string;\n  words: string[];\n  answer: string;\n  prefix?: string;\n  suffix?: string;\n}\n\nexport interface SentencePassage {\n  title: string;\n  items: SentenceItem[];\n}\n\nexport const sentencePassages: SentencePassage[] = [\n"

s_passages_data = {1: [], 2: [], 3: [], 4: []}
current_passage = 0
last_q = 0

i = 0
while i < len(s_q):
    l = s_q[i]
    m_kr = re.match(r'^(\d+)\.\s+(.+?)\d+\)$', l)
    if m_kr:
        q_id = int(m_kr.group(1))
        if q_id <= last_q or current_passage == 0:
            current_passage += 1
        last_q = q_id
        
        kr_text = m_kr.group(2).strip()
        i += 1
        if i >= len(s_q): break
        en_text = s_q[i]
        
        # handle multiline english
        while i+1 < len(s_q) and not re.match(r'^(\d+)\.\s+(.+?)\d+\)$', s_q[i+1]) and not ('본문 ' in s_q[i+1] and '- Part' in s_q[i+1]):
            nxt = s_q[i+1].strip()
            if nxt and not nxt.startswith('WORKBOOK') and not nxt.startswith('Lesson') and not nxt.startswith('- ') and not nxt.startswith('다음 우리말과'):
                if not nxt.startswith('본문'):
                    if 'Dr. Rosa' in nxt: 
                        en_text += ' ' + nxt
                    elif 'However' in nxt or 'Over time' in nxt or 'For example' in nxt or 'Hopefully' in nxt:
                        en_text += ' ' + nxt
                    elif nxt.startswith('('):
                        en_text += ' ' + nxt
                    elif nxt.endswith(')'):
                        en_text += ' ' + nxt
                    else:
                        # catch all that seems like a sentence part
                        if not re.match(r'^\d+\)', nxt):
                            en_text += ' ' + nxt
            i += 1

        words = []
        for m in re.finditer(r'\(([^)]+)\)', en_text):
            parts = [w.strip() for w in m.group(1).split('/')]
            words.extend(parts)
            
        prefix = ""
        suffix = ""
        # very simple extraction of prefix/suffix outside parens
        parts = re.split(r'\([^)]+\)', en_text)
        if len(parts) > 0 and parts[0].strip():
            prefix = parts[0].strip()
            # clean up comma
            if prefix.endswith(','): prefix = prefix[:-1].strip()
        if len(parts) > 1 and parts[-1].strip():
            suffix = parts[-1].strip()
            if suffix.startswith(','): suffix = suffix[1:].strip()
            if 'Dr. Rosa' in suffix:
                suffix = suffix.split('Dr. Rosa')[0].strip()
            
        ans = s_answers[current_passage].get(q_id, "")
        
        s_passages_data[current_passage].append({
            'id': q_id,
            'korean': kr_text,
            'words': words,
            'answer': ans,
            'prefix': prefix,
            'suffix': suffix
        })
    else:
        i += 1

for p, items in s_passages_data.items():
    if not items: continue
    s_ts += f'  {{\n    title: "본문 {p}",\n    items: [\n'
    for item in items:
        pref = f', prefix: {repr(item["prefix"])}' if item["prefix"] else ''
        suff = f', suffix: {repr(item["suffix"])}' if item["suffix"] else ''
        s_ts += f'      {{ id: {item["id"]}, korean: {repr(item["korean"])}, words: {repr(item["words"])}, answer: {repr(item["answer"])}{pref}{suff} }},\n'
    s_ts += "    ]\n  },\n"
s_ts += "];\n"

with open(os.path.join(out_dir, 'sentences.ts'), 'w', encoding='utf-8') as f:
    f.write(s_ts)

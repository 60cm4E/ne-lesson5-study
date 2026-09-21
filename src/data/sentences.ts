export interface SentenceItem {
  id: number;
  korean: string;
  words: string[];
  answer: string;
  prefix?: string;
  suffix?: string;
}

export interface SentencePassage {
  title: string;
  items: SentenceItem[];
}

export const sentencePassages: SentencePassage[] = [
  {
    title: "\ubcf8\ubb38 1",
    items: [
      {
        id: 1,
        korean: '\uc6b0\ub9ac\uac00 \ud658\uacbd\uc744 \ubcf4\ud638\ud558\ub294 \ubc29\ubc95\uc744 \ucc3e\ub294 \uac83\uc740 \uc911\uc694\ud558\ub2e4.',
        words: ['us', 'important', 'to', 'for', 'is', 'ways', 'find', 'it', 'to', 'protect', 'the environment'],
        answer: 'It is important for us to find ways to protect the environment.'
      },
      {
        id: 2,
        korean: '\uba87\uba87 \uc0ac\ub78c\ub4e4\uc740 \uc9c0\uad6c\ub97c \uad6c\ud558\uae30 \uc704\ud55c \ucc3d\uc758\uc801\uc778 \ubc29\ubc95\ub4e4\uc744 \ucc3e\uc544\ub0c8\ub2e4.',
        words: ['people', 'to', 'creative', 'save', 'have', 'the earth', 'ways', 'found', 'some'],
        answer: 'Some people have found creative ways to save the earth.'
      },
      {
        id: 3,
        korean: '\ud55c \uc608\ub85c \uba55\uc2dc\ucf54 \uce78\ucfe4\uc5d0 \uc788\ub294 \uc218\uc911 \ubc15\ubb3c\uad00\uc774 \uc788\ub2e4.',
        words: ['one', 'is', 'example', 'an', 'underwater', 'museum'],
        answer: 'One example is an underwater museum',
        suffix: 'in Cancun, Mexico.'
      },
      {
        id: 4,
        korean: '\ubbf8\uc220\ud559 \uad50\uc218\uc778 Rosa Allison \ubc15\uc0ac\ub97c \ub9cc\ub098 \uc774 \ud2b9\ubcc4\ud55c \ubc15\ubb3c\uad00\uc5d0 \uad00\ud55c \uc124\uba85\uc744 \ub4e4\uc5b4 \ubcf4\uc790.',
        words: ['meet', 'Dr. Rosa Allison', "let\u2019s"],
        answer: "Let\u2019s meet Dr. Rosa Allison",
        suffix: ', an art professor, and'
      },
      {
        id: 41,
        korean: '(4\ubc88 \uacc4\uc18d) \uc774 \ud2b9\ubcc4\ud55c \ubc15\ubb3c\uad00\uc5d0 \uad00\ud55c \uc124\uba85\uc744 \ub4e4\uc5b4 \ubcf4\uc790.',
        words: ['about', 'special', 'explanation', 'the', 'her', 'listen', 'to', 'museum'],
        answer: 'listen to her explanation about the special museum.'
      },
      {
        id: 5,
        korean: '\uce78\ucfe4\uc740 \ub9e4\ub144 480\ub9cc \uba85\uc758 \uad00\uad11\uac1d\uc774 \uc5ec\ud589\ud558\ub294 \ub3c4\uc2dc\uc785\ub2c8\ub2e4.',
        words: ['a city', 'tourists', 'Cancun', 'is', '4.8 million', 'where', 'travel'],
        answer: 'Cancun is a city where 4.8 million tourists travel',
        suffix: 'every year.'
      },
      {
        id: 6,
        korean: '\uadf8\uacf3\uc5d0\uc11c \ud558\ub294 \uac00\uc7a5 \uc778\uae30 \uc788\ub294 \ud65c\ub3d9 \uc911 \ud558\ub098\ub294 \ubb3c\uc18d\uc5d0\uc11c \uadf8 \uc9c0\uc5ed\uc758 \uc544\ub984\ub2e4\uc6b4 \ud574\uc591 \uc0dd\ubb3c\uc744 \ubcf4\ub294 \uac83\uc785\ub2c8\ub2e4.',
        words: ['of', 'the', 'there', 'is', 'activities', 'most', 'do', 'popular', 'to', 'one'],
        answer: 'One of the most popular activities to do there is',
        suffix: "looking at the area\u2019s beautiful sea life underwater."
      },
      {
        id: 7,
        korean: '\ud558\uc9c0\ub9cc \uad00\uad11 \ud65c\ub3d9\ub4e4\uc740 \uce78\ucfe4 \uc778\uadfc\uc758 \ubc14\ub2e4 \uc77c\ubd80\ub97c \uc2ec\uac01\ud558\uac8c \ud6fc\uc190\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.',
        words: ['of', 'activities', 'tourist', 'Cancun', 'parts', 'the sea', 'near', 'are seriously', 'damaging'],
        answer: 'tourist activities are seriously damaging parts of the sea near Cancun.',
        prefix: 'However,'
      },
    ]
  },
  {
    title: "\ubcf8\ubb38 2",
    items: [
      {
        id: 1,
        korean: '\uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574, \uc608\uc220\uac00\ub4e4\uc774 \ubb34\uc5b8\uac00 \uc7ac\ubbf8\ub09c \uc77c\uc744 \ud588\uc2b5\ub2c8\ub2e4.',
        words: ['prevent', 'to', 'this'],
        answer: 'To prevent this,',
        suffix: ''
      },
      {
        id: 11,
        korean: '(\uacc4\uc18d) \uc608\uc220\uac00\ub4e4\uc774 \ubb34\uc5b8\uac00 \uc7ac\ubbf8\ub09c \uc77c\uc744 \ud588\uc2b5\ub2c8\ub2e4.',
        words: ['interesting', 'something', 'artists', 'did'],
        answer: 'artists did something interesting'
      },
      {
        id: 2,
        korean: '\uadf8\ub4e4\uc740 \ub9cc\uc57d \uad00\uad11\uac1d\ub4e4\uc744 \ubc14\ub2e4\uc758 \ub2e4\ub978 \ucabd\uc73c\ub85c \uc720\uc778\ud55c\ub2e4\uba74, \uadf8 \uc8fd\uc5b4\uac00\ub294 \uc9c0\uc5ed\uc774 \ud638\uc804\ub420 \uc2dc\uac04\uc744 \uac00\uc9c8 \uc218 \uc788\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4.',
        words: ['they', 'of', 'the sea', 'part', 'thought', 'if', 'they', 'attracted', 'to', 'different', 'tourists', 'a'],
        answer: 'They thought if they attracted tourists to a different part of the sea,',
        suffix: ''
      },
      {
        id: 21,
        korean: '(\uacc4\uc18d) \uadf8 \uc8fd\uc5b4\uac00\ub294 \uc9c0\uc5ed\uc774 \ud638\uc804\ub420 \uc2dc\uac04\uc744 \uac00\uc9c8 \uc218 \uc788\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4.',
        words: ['to', 'the', 'have', 'time', 'get', 'dying', 'could', 'areas', 'better'],
        answer: 'the dying areas could have time to get better.'
      },
      {
        id: 3,
        korean: '\uadf8\ub4e4\uc740 \ud574\uc591 \uc0dd\ubb3c\uc774 \uc8fd\uc5b4\uac00\ub294 \uc9c0\uc5ed\uc73c\ub85c\ubd80\ud130 \ub5a8\uc5b4\uc9c4 \uacf3\uc5d0 \uc218\uc911 \ubc15\ubb3c\uad00\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.',
        words: ['underwater', 'from', 'away', 'made', 'an', 'they', 'the places', 'museum'],
        answer: 'They made an underwater museum away from the places',
        suffix: ''
      },
      {
        id: 31,
        korean: '(\uacc4\uc18d) \ud574\uc591 \uc0dd\ubb3c\uc774 \uc8fd\uc5b4\uac00\ub294 \uacf3',
        words: ['where', 'was', 'dying', 'life', 'sea'],
        answer: 'where sea life was dying.'
      },
      {
        id: 4,
        korean: '\uadf8\uacf3\uc740 \ud574\uc218\uba74\uc5d0\uc11c \uc57d 14\ubbf8\ud130 \uc544\ub798\uc5d0 \uc788\uc73c\uba70 500\uac1c\uc758 \uc870\uac01\uc0c1\uc774 \uc788\uc2b5\ub2c8\ub2e4.',
        words: ['the surface', "it\u2019s", 'below', '14 meters', 'about'],
        answer: "It\u2019s about 14 meters below the surface",
        suffix: 'and'
      },
      {
        id: 42,
        korean: '(\uacc4\uc18d) 500\uac1c\uc758 \uc870\uac01\uc0c1\uc774 \uc788\uc2b5\ub2c8\ub2e4.',
        words: ['500', 'statues', 'contains'],
        answer: 'contains 500 statues.'
      },
      {
        id: 5,
        korean: '\uadf8 \uc870\uac01\uc0c1\ub4e4\uc740 \ud574\uc591 \uc0dd\ubb3c\uc774 \uc0b4\uc544\uac08 \uc218 \uc788\uac8c \ud558\ub294 \uc7ac\ub8cc\ub4e4\ub85c \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.',
        words: ['support', 'made', 'from', 'that', 'the statues', 'life', 'sea', 'are', 'materials'],
        answer: 'The statues are made from materials that support sea life.'
      },
      {
        id: 6,
        korean: '\uadf8\uac83\ub4e4\uc740 \ub3d9\uc2dd\ubb3c\uc774 \uc0b4 \uc218 \uc788\ub294 \uc7a5\uc18c\ub97c \ucd94\uac00\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4.',
        words: ['animals', 'plants', 'places', 'provide', 'on', 'for', 'and', 'they', 'live', 'additional', 'to'],
        answer: 'They provide additional places for plants and animals to live on.'
      },
      {
        id: 7,
        korean: '\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \ub9ce\uc740 \uc885\ub958\uc758 \ud574\uc591 \uc0dd\ubb3c\uc774 \uc870\uac01\uc0c1 \uc704\uc5d0\uc11c \uc790\ub784 \uac83\uc778\ub370, \uc774\ub294 \uadf8 \uc608\uc220 \uc791\ud488\uc744 \ub3c5\ud2b9\ud558\uac8c \ub9cc\ub4e4 \uac83\uc785\ub2c8\ub2e4.',
        words: ['sea', 'life', 'on', 'the statues', 'grow', 'types', 'many', 'will', 'of'],
        answer: 'many types of sea life will grow on the statues,',
        prefix: 'Over time,',
        suffix: ''
      },
      {
        id: 71,
        korean: '(\uacc4\uc18d) \uc774\ub294 \uadf8 \uc608\uc220 \uc791\ud488\uc744 \ub3c5\ud2b9\ud558\uac8c \ub9cc\ub4e4 \uac83\uc785\ub2c8\ub2e4.',
        words: ['will', 'make', 'the artwork', 'which', 'unique'],
        answer: 'which will make the artwork unique.'
      },
      {
        id: 8,
        korean: '\uc608\uc220\uac00\ub4e4\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc870\uac01\uc0c1\uc5d0\uc11c \ub2e4\uc591\ud55c \ud574\uc591 \uc0dd\ubb3c\uc744 \ubcf4\uae38 \uc6d0\ud569\ub2c8\ub2e4.',
        words: ['sea', 'people', 'a', 'life', 'the statues', 'to', 'want', 'of', 'the artists', 'see', 'on', 'variety'],
        answer: 'The artists want people to see a variety of sea life on the statues.'
      },
      {
        id: 9,
        korean: '\ub9cc\uc57d \uc0ac\ub78c\ub4e4\uc774 \ud574\uc591 \uc0dd\ubb3c\uc774 \uc5bc\ub9c8\ub098 \ud48d\ubd80\ud55c\uc9c0 \uae68\ub2eb\ub294\ub2e4\uba74, \uadf8\ub4e4\uc740 \ubc14\ub2e4\ub97c \uc9c0\ud0a4\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \uc774\ud574\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.',
        words: ['realize', 'if', 'life', 'rich', 'how', 'sea', 'is', 'people'],
        answer: 'If people realize how rich sea life is,',
        suffix: ''
      },
      {
        id: 91,
        korean: '(\uacc4\uc18d) \ubc14\ub2e4\ub97c \uc9c0\ud0a4\ub294 \uac83\uc774 \uc5bc\ub9c8\ub098 \uc911\uc694\ud55c\uc9c0 \uc774\ud574\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.',
        words: ['is', 'will', 'understand', 'important', 'they', 'it', 'how'],
        answer: 'they will understand how important it is',
        suffix: ''
      },
      {
        id: 92,
        korean: '(\uacc4\uc18d) \ubc14\ub2e4\ub97c \uc9c0\ud0a4\ub294 \uac83',
        words: ['save', 'the sea', 'to'],
        answer: 'to save the sea.'
      },
    ]
  },
  {
    title: "\ubcf8\ubb38 3",
    items: [
      {
        id: 1,
        korean: '\uc2f1\uac00\ud3ec\ub974\uc5d0\uc11c\ub294 \uc0ac\ub78c\ub4e4\uc774 \ub545 \uc704\uc5d0\uc11c \ud658\uacbd\uc744 \ubcf4\ud638\ud558\uae30 \uc704\ud574 \uac74\ucd95\uc744 \uc774\uc6a9\ud558\uace0 \uc788\ub2e4.',
        words: ['people', 'architecture', 'are', 'using'],
        answer: 'people are using architecture',
        prefix: 'In Singapore,',
        suffix: ''
      },
      {
        id: 11,
        korean: '(\uacc4\uc18d) \ub545 \uc704\uc5d0\uc11c \ud658\uacbd\uc744 \ubcf4\ud638\ud558\uae30 \uc704\ud574',
        words: ['the environment', 'on', 'protect', 'to', 'land'],
        answer: 'to protect the environment on land.'
      },
      {
        id: 2,
        korean: '\uac74\ucd95\uac00\uc778 Rajesh Khan\uc774 \uce5c\ud658\uacbd \uac74\ubb3c\uc5d0 \ub300\ud574 \ub9d0\ud558\ub294 \uac83\uc744 \ub4e4\uc5b4 \ubcf4\uc790.',
        words: ["let\u2019s", 'Rajesh Khan', 'what', 'hear'],
        answer: "Let\u2019s hear what Rajesh Khan",
        suffix: ', an architect,'
      },
      {
        id: 22,
        korean: '(\uacc4\uc18d) \uce5c\ud658\uacbd \uac74\ubb3c\uc5d0 \ub300\ud574 \ub9d0\ud558\ub294 \uac83',
        words: ['about', 'says', 'eco\u2011friendly', 'buildings'],
        answer: 'says about eco\u2011friendly buildings.'
      },
      {
        id: 3,
        korean: '\uc2f1\uac00\ud3ec\ub974\ub294 \uc77c \ub144 \ub0b4\ub0b4 \ub371\uc2b5\ub2c8\ub2e4.',
        words: ['is', 'hot', 'the year', 'Singapore', 'throughout'],
        answer: 'Singapore is hot throughout the year.'
      },
      {
        id: 32,
        korean: '\ub300\ubd80\ubd84\uc758 \uac74\ubb3c\ub4e4\uc774 \uc5d0\uc5b4\ucee8 \uac00\ub3d9\uc744 \ud544\uc694\ub85c \ud558\ub294\ub370,',
        words: ['buildings', 'air', 'conditioning', 'most', 'need'],
        answer: 'Most buildings need air conditioning,'
      },
      {
        id: 33,
        korean: '\uadf8\uac83\uc740 \ub9ce\uc740 \uc5d0\ub108\uc9c0\ub97c \uc0ac\uc6a9\ud558\uba70 \uae30\ud6c4 \ubcc0\ud654\uc758 \uc6d0\uc778\uc774 \ub429\ub2c8\ub2e4.',
        words: ['and', 'energy', 'which', 'uses', 'a lot of', 'contributes', 'change', 'climate', 'to'],
        answer: 'which uses a lot of energy and contributes to climate change.'
      },
      {
        id: 4,
        korean: '\uadf8\uac83\uc774 \uc2f1\uac00\ud3ec\ub974\uc758 \uac74\ucd95\uac00\ub4e4\uc774 \uce5c\ud658\uacbd \uac74\ubb3c\uc744 \uc124\uacc4\ud558\uae30 \uc2dc\uc791\ud55c \uc774\uc720\uc785\ub2c8\ub2e4.',
        words: ["that\u2019s", 'architects in Singapore', 'design', 'eco\u2011friendly', 'buildings', 'have', 'begun', 'why', 'to'],
        answer: "That\u2019s why architects in Singapore have begun to design eco\u2011friendly buildings",
        suffix: ''
      },
      {
        id: 43,
        korean: '(\uacc4\uc18d) \uc5d0\uc5b4\ucee8\uc744 \ub35c \uc0ac\uc6a9\ud558\uba74\uc11c\ub3c4 \uc2e4\ub0b4\ub294 \uc5ec\uc804\ud788 \uc2dc\uc6d0\ud55c',
        words: ['less', 'but', 'that', 'air', 'use', 'cool', 'inside', 'are still', 'conditioning'],
        answer: 'that use less air conditioning but are still cool inside.'
      },
      {
        id: 5,
        korean: '\uc608\ub97c \ub4e4\uc5b4, \uc2f1\uac00\ud3ec\ub974\uc758 \ub9ce\uc740 \uac74\ubb3c\uc740 \uac1c\ubc29\ud615 \uad6c\uc870\ub97c \uac16\ub3c4\ub85d \uc124\uacc4\ub429\ub2c8\ub2e4.',
        words: ['have', 'open', 'an', 'buildings in', 'structure', 'many', 'to', 'designed', 'are', 'Singapore'],
        answer: 'many buildings in Singapore are designed to have an open structure.',
        prefix: 'For example,'
      },
      {
        id: 6,
        korean: '\uc774\ub7ec\ud55c \uad6c\uc870\ub294 \ubc14\uae65 \uacf5\uae30\uac00 \uac74\ubb3c \uad6c\uc11d\uad6c\uc11d\uae4c\uc9c0 \uc774\ub3d9\ud560 \uc218 \uc788\uac8c \ud574 \uc90d\ub2c8\ub2e4.',
        words: ['this', 'it', 'a building', 'air', 'to', 'for', 'structure', 'outside', 'throughout', 'makes', 'move', 'possible'],
        answer: 'This structure makes it possible for outside air to move throughout a building.'
      },
      {
        id: 7,
        korean: '\uc774\ub7ec\ud55c \uc790\uc5f0\uc801\uc778 \uacf5\uae30\uc758 \ud750\ub984\uc740 \uc774 \uac74\ubb3c\ub4e4\uc774 \uc2dc\uc6d0\ud558\uac8c \uc720\uc9c0\ub418\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.',
        words: ['how', 'air', 'this', 'is', 'cool', 'stay', 'these', 'flow', 'buildings', 'natural'],
        answer: 'This natural air flow is how these buildings stay cool.'
      },
    ]
  },
  {
    title: "\ubcf8\ubb38 4",
    items: [
      {
        id: 1,
        korean: '\uac74\ucd95\uac00\ub4e4\uc740 \uac1c\ubc29\ud615 \uad6c\uc870\ub97c \ub9cc\ub4dc\ub294 \uac83 \uc678\uc5d0\ub3c4 \ucee4\ub2e4\ub780 \uc815\uc6d0\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.',
        words: ['addition', 'structures', 'making', 'open', 'to', 'in'],
        answer: 'In addition to making open structures,',
        suffix: ''
      },
      {
        id: 12,
        korean: '(\uacc4\uc18d) \ucee4\ub2e4\ub780 \uc815\uc6d0\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.',
        words: ['large', 'add', 'architects', 'gardens'],
        answer: 'architects add large gardens.'
      },
      {
        id: 2,
        korean: '\uc774\ub7ec\ud55c \ub179\uc9c0 \uacf5\uac04\uc740 \uadf8\ub298\uc744 \uc81c\uacf5\ud558\uace0 \uc9c1\uc0ac\uad11\uc120\uc73c\ub85c\ubd80\ud130 \uac74\ubb3c \uc77c\ubd80\ub97c \ubcf4\ud638\ud558\uc5ec, \uac74\ubb3c\uc744 \ub354 \uc2dc\uc6d0\ud558\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4.',
        words: ['the building', 'protects', 'greenery', 'direct', 'from', 'of', 'provides', 'shade', 'and', 'parts', 'sunlight', 'this'],
        answer: 'This greenery provides shade and protects parts of the building from direct sunlight,',
        suffix: ''
      },
      {
        id: 23,
        korean: '(\uacc4\uc18d) \uac74\ubb3c\uc744 \ub354 \uc2dc\uc6d0\ud558\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4.',
        words: ['keeps', 'the building', 'cooler', 'which'],
        answer: 'which keeps the building cooler.'
      },
      {
        id: 3,
        korean: '\uce5c\ud658\uacbd \uac74\ubb3c\ub4e4\uc740 \ud658\uacbd\uc744 \ubcf4\ud638\ud558\ub294 \ub370 \ub3c4\uc6c0\uc744 \uc904 \ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc591\uc9c8\uc758 \uc0b6\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.',
        words: ['not', 'eco\u2011friendly', 'only', 'protect', 'buildings', 'environment', 'the', 'help', 'these', 'like'],
        answer: 'Eco\u2011friendly buildings like these not only help protect the environment,',
        suffix: ''
      },
      {
        id: 34,
        korean: '(\uacc4\uc18d) \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc591\uc9c8\uc758 \uc0b6\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.',
        words: ['a', 'of', 'also', 'but', 'provide', 'quality', 'life', 'good', 'with', 'people'],
        answer: 'but also provide people with a good quality of life.'
      },
      {
        id: 4,
        korean: '\uadf8\uac83\ub4e4\uc774 \uc774 \uc0c8\ub85c\uc6b4 \uac74\ucd95 \uc591\uc2dd\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4.',
        words: ['this', 'the goals', 'are', 'of', 'new', 'of', 'those', 'architecture', 'style'],
        answer: 'Those are the goals of this new style of architecture.'
      },
      {
        id: 5,
        korean: '\ubc14\ub77c\uac74\ub300, \uac74\ucd95\uac00\ub4e4\uc740 \uacc4\uc18d\ud574\uc11c \uc0c8\ub85c\uc6b4 \uce5c\ud658\uacbd \uc544\uc774\ub514\uc5b4\ub97c \uc0dd\uac01\ud574\ub0bc \uac83\uc785\ub2c8\ub2e4.',
        words: ['new', 'coming', 'keep', 'eco\u2011friendly', 'up', 'architects', 'will', 'ideas', 'with'],
        answer: 'architects will keep coming up with new eco\u2011friendly ideas.',
        prefix: 'Hopefully,'
      },
      {
        id: 6,
        korean: '\ubaa8\ub4e0 \ubd84\uc57c\uc5d0\ub294 \ud658\uacbd\uc744 \ubcf4\ud638\ud558\ub294 \uac01\uae30 \ub2e4\ub978 \ubc29\ubc95\uc774 \uc788\ub2e4.',
        words: ['ways', 'has', 'the environment', 'field', 'protecting', 'different', 'of', 'every'],
        answer: 'Every field has different ways of protecting the environment.'
      },
      {
        id: 7,
        korean: '\ub354 \ub9ce\uc740 \ud601\uc2e0\uc73c\ub85c, \uba3c \ubbf8\ub798\uc5d0 \uc778\uac04\uacfc \uc790\uc5f0\uc740 \ud568\uaed8 \uc870\ud654\ub97c \uc774\ub8e8\uba70 \uc0b4\uc544\uac08 \uc218 \uc788\uc744 \uac83\uc774\ub2e4.',
        words: ['innovation', 'with', 'more'],
        answer: 'With more innovation,',
        suffix: ''
      },
      {
        id: 72,
        korean: '(\uacc4\uc18d) \uc778\uac04\uacfc \uc790\uc5f0\uc740 \ud568\uaed8 \uc870\ud654\ub97c \uc774\ub8e8\uba70 \uc0b4\uc544\uac08 \uc218 \uc788\uc744 \uac83\uc774\ub2e4.',
        words: ['in', 'nature', 'and', 'live', 'together', 'be', 'harmony', 'able', 'to', 'will', 'humans'],
        answer: 'humans and nature will be able to live together in harmony',
        suffix: ''
      },
      {
        id: 73,
        korean: '(\uacc4\uc18d) \uba3c \ubbf8\ub798\uc5d0',
        words: ['the future', 'far', 'into'],
        answer: 'far into the future.'
      },
    ]
  },
];

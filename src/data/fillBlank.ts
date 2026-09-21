export interface BlankItem {
  id: number;
  korean: string;
  sentence: string;
  answers: string[];
}

export interface Passage {
  title: string;
  items: BlankItem[];
}

export const passages: Passage[] = [
  {
    title: "본문 1",
    items: [
      { id: 1, korean: '우리가 환경을 보호하는 방법을 찾는 것은 중요하다.', sentence: 'It is important for us to find ways to ___BLANK___ the ___BLANK___.', answers: ['protect', 'environment'] },
      { id: 2, korean: '몇몇 사람들은 지구를 구하기 위한 창의적인 방법들을 찾아냈다.', sentence: 'Some people have found ___BLANK___ ways to ___BLANK___ the ___BLANK___.', answers: ['creative', 'save', 'earth'] },
      { id: 3, korean: '한 예로 멕시코 칸쿤에 있는 수중 박물관이 있다.', sentence: 'One ___BLANK___ is an ___BLANK___ ___BLANK___ in Cancun, Mexico.', answers: ['example', 'underwater', 'museum'] },
      { id: 4, korean: '미술학 교수인 Rosa Allison 박사를 만나 이 특별한 박물관에 관한 설명을 들어 보자.', sentence: "Let\u2019s meet Dr. Rosa Allison, an art ___BLANK___, and listen to her ___BLANK___ about the special museum.", answers: ['professor', 'explanation'] },
      { id: 5, korean: '칸쿤은 매년 480만 명의 관광객이 여행하는 도시입니다.', sentence: 'Cancun is a city where 4.8 million ___BLANK___ ___BLANK___ every year.', answers: ['tourists', 'travel'] },
      { id: 6, korean: '그곳에서 하는 가장 인기 있는 활동 중 하나는 물속에서 그 지역의 아름다운 해양 생물을 보는 것입니다.', sentence: "One of the most ___BLANK___ ___BLANK___ to do there is looking at the area\u2019s beautiful ___BLANK___ ___BLANK___ ___BLANK___.", answers: ['popular', 'activities', 'sea', 'life', 'underwater'] },
      { id: 7, korean: '하지만 관광 활동들은 칸쿤 인근의 바다 일부를 심각하게 훼손하고 있습니다.', sentence: 'However, tourist activities are ___BLANK___ ___BLANK___ ___BLANK___ of the sea ___BLANK___ Cancun.', answers: ['seriously', 'damaging', 'parts', 'near'] },
    ]
  },
  {
    title: "본문 2",
    items: [
      { id: 1, korean: '이를 방지하기 위해, 예술가들이 무언가 재미난 일을 했습니다.', sentence: 'To ___BLANK___ this, artists did something ___BLANK___.', answers: ['prevent', 'interesting'] },
      { id: 2, korean: '그들은 만약 관광객들을 바다의 다른 쪽으로 유인한다면, 그 죽어가는 지역이 호전될 시간을 가질 수 있을 것이라 생각했습니다.', sentence: 'They thought if they ___BLANK___ tourists to a different part of the sea, the ___BLANK___ areas could have time to ___BLANK___ ___BLANK___.', answers: ['attracted', 'dying', 'get', 'better'] },
      { id: 3, korean: '그들은 해양 생물이 죽어가는 지역으로부터 떨어진 곳에 수중 박물관을 만들었습니다.', sentence: 'They made an underwater museum ___BLANK___ ___BLANK___ the places where sea life was dying.', answers: ['away', 'from'] },
      { id: 4, korean: '그곳은 해수면에서 약 14미터 아래에 있으며 500개의 조각상이 있습니다.', sentence: "It\u2019s ___BLANK___ 14 meters ___BLANK___ the ___BLANK___ and ___BLANK___ 500 ___BLANK___.", answers: ['about', 'below', 'surface', 'contains', 'statues'] },
      { id: 5, korean: '그 조각상들은 해양 생물이 살아갈 수 있게 하는 재료들로 만들어졌습니다.', sentence: 'The statues are made from ___BLANK___ that ___BLANK___ sea life.', answers: ['materials', 'support'] },
      { id: 6, korean: '그것들은 동식물이 살 수 있는 장소를 추가로 제공합니다.', sentence: 'They ___BLANK___ ___BLANK___ places for plants and animals to live on.', answers: ['provide', 'additional'] },
      { id: 7, korean: '시간이 지나면서 많은 종류의 해양 생물이 조각상 위에서 자랄 것인데, 이는 그 예술 작품을 독특하게 만들 것입니다.', sentence: 'Over time, many ___BLANK___ of sea life will ___BLANK___ on the statues, which will make the ___BLANK___ ___BLANK___.', answers: ['types', 'grow', 'artwork', 'unique'] },
      { id: 8, korean: '예술가들은 사람들이 조각상에서 다양한 해양 생물을 보길 원합니다.', sentence: 'The artists want people to see ___BLANK___ ___BLANK___ ___BLANK___ sea life on the statues.', answers: ['a', 'variety', 'of'] },
      { id: 9, korean: '만약 사람들이 해양 생물이 얼마나 풍부한지 깨닫는다면, 그들은 바다를 지키는 것이 얼마나 중요한지 이해하게 될 것입니다.', sentence: 'If people ___BLANK___ how ___BLANK___ sea life is, they will understand how important it is to save the sea.', answers: ['realize', 'rich'] },
    ]
  },
  {
    title: "본문 3",
    items: [
      { id: 1, korean: '싱가포르에서는 사람들이 땅 위에서 환경을 보호하기 위해 건축을 이용하고 있다.', sentence: 'In Singapore, people are using ___BLANK___ to protect the environment ___BLANK___ ___BLANK___.', answers: ['architecture', 'on', 'land'] },
      { id: 2, korean: '건축가인 Rajesh Khan이 친환경 건물에 대해 말하는 것을 들어 보자.', sentence: "Let\u2019s hear what Rajesh Khan, an ___BLANK___, says about ___BLANK___ ___BLANK___.", answers: ['architect', 'eco\u2011friendly', 'buildings'] },
      { id: 3, korean: '싱가포르는 일 년 내내 덥습니다. 대부분의 건물들이 에어컨 가동을 필요로 하는데, 그것은 많은 에너지를 사용하며 기후 변화의 원인이 됩니다.', sentence: 'Singapore is hot ___BLANK___ the year. Most buildings need ___BLANK___ ___BLANK___, which uses a lot of ___BLANK___ and ___BLANK___ ___BLANK___ ___BLANK___ ___BLANK___.', answers: ['throughout', 'air', 'conditioning', 'energy', 'contributes', 'to', 'climate', 'change'] },
      { id: 4, korean: '그것이 싱가포르의 건축가들이 에어컨을 덜 사용하면서도 실내는 여전히 시원한 친환경 건물을 설계하기 시작한 이유입니다.', sentence: "That\u2019s why architects in Singapore have begun to ___BLANK___ eco\u2011friendly buildings that use less air conditioning but are ___BLANK___ ___BLANK___ inside.", answers: ['design', 'still', 'cool'] },
      { id: 5, korean: '예를 들어, 싱가포르의 많은 건물은 개방형 구조를 갖도록 설계됩니다.', sentence: '___BLANK___ ___BLANK___, many buildings in Singapore are designed to have an ___BLANK___ ___BLANK___.', answers: ['For', 'example', 'open', 'structure'] },
      { id: 6, korean: '이러한 구조는 바깥 공기가 건물 구석구석까지 이동할 수 있게 해 줍니다.', sentence: 'This structure makes it possible for ___BLANK___ air to ___BLANK___ ___BLANK___ a building.', answers: ['outside', 'move', 'throughout'] },
      { id: 7, korean: '이러한 자연적인 공기의 흐름은 이 건물들이 시원하게 유지되는 방법입니다.', sentence: 'This ___BLANK___ air ___BLANK___ is how these buildings ___BLANK___ cool.', answers: ['natural', 'flow', 'stay'] },
    ]
  },
  {
    title: "본문 4",
    items: [
      { id: 1, korean: '건축가들은 개방형 구조를 만드는 것 외에도 커다란 정원을 추가합니다.', sentence: '___BLANK___ ___BLANK___ ___BLANK___ making open structures, architects ___BLANK___ large ___BLANK___.', answers: ['In', 'addition', 'to', 'add', 'gardens'] },
      { id: 2, korean: '이러한 녹지 공간은 그늘을 제공하고 직사광선으로부터 건물 일부를 보호하여, 건물을 더 시원하게 유지합니다.', sentence: 'This ___BLANK___ provides ___BLANK___ and protects ___BLANK___ of the building from ___BLANK___ ___BLANK___, which keeps the building cooler.', answers: ['greenery', 'shade', 'parts', 'direct', 'sunlight'] },
      { id: 3, korean: '이와 같은 친환경 건물들은 환경을 보호하는 데 도움을 줄 뿐만 아니라, 사람들에게 양질의 삶을 제공합니다.', sentence: 'Eco\u2011friendly buildings like these not only help ___BLANK___ the environment, but also provide people with a good ___BLANK___ of life.', answers: ['protect', 'quality'] },
      { id: 4, korean: '그것들이 이 새로운 건축 양식의 목표입니다.', sentence: 'Those are the ___BLANK___ of this new ___BLANK___ of architecture.', answers: ['goals', 'style'] },
      { id: 5, korean: '바라건대, 건축가들은 계속해서 새로운 친환경 아이디어를 생각해낼 것입니다.', sentence: '___BLANK___, architects will keep ___BLANK___ ___BLANK___ ___BLANK___ new eco\u2011friendly ideas.', answers: ['Hopefully', 'coming', 'up', 'with'] },
      { id: 6, korean: '모든 분야에는 환경을 보호하는 각기 다른 방법이 있다.', sentence: 'Every ___BLANK___ has different ___BLANK___ of protecting the environment.', answers: ['field', 'ways'] },
      { id: 7, korean: '더 많은 혁신으로, 먼 미래에 인간과 자연은 함께 조화를 이루며 살아갈 수 있을 것이다.', sentence: 'With more ___BLANK___, humans and ___BLANK___ will be able to live together ___BLANK___ ___BLANK___ ___BLANK___ ___BLANK___ ___BLANK___ ___BLANK___.', answers: ['innovation', 'nature', 'in', 'harmony', 'far', 'into', 'the', 'future'] },
    ]
  },
];

//Магические числа
const MIN_ID_NUMBER = 1;
const MAX_ID_NUMBER = 25;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKE_NUMBER = 15;
const MAX_LIKE_NUMBER = 200;
const MAX_COMMENT_NUMBER = 1000;
const MAX_ARRAY_LENGHT = 25;

// строка — описание фотографии.
const DESCRIPTIONS = [
  'Классно повеселились, надо повторить!',
  'Мой лучший день был сегодня, только посмотрите на это...',
  'Какая красота! :)',
  'Крутооо!!!',
  'Ждал этого всю свою жизнь.',
  'Как-то не очень получилось, ну да и ладно =D',
  'На еду похоже, даже кушать захотелось...',
  'Оно моё, моё, МОЯ ПРЕЛЕСТЬ!',
  'Обожаю эту штуку, как называется не подскажите? m(^_^)m',
  'Разворачивайтесь, уходим, без комментариев.',
];

// текст комментария, оставленного пользователями.
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// имя комментирующего лица.
const NAMES = [
  'Злой прыщ',
  'Коська',
  'Валера',
  'Анютка',
  'ПрЫнцесса',
  'Гора мышц',
  'Ботаник',
  'Сергей',
  'Саша',
  'Марина Евгеньевна',
  'На РаСсЛаБоНе',
];

// ищем случайное число.
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// получаем случайное неповторяющееся число.
const getId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generatePhotoId = getId(MIN_ID_NUMBER, MAX_ID_NUMBER);
const generateId = getId(MIN_ID_NUMBER, MAX_ID_NUMBER);

// «разделяй и властвуй» =)
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// массив объектов с комментариями.
const getUserComments = () => ({
  id: getRandomInteger(MIN_ID_NUMBER, MAX_COMMENT_NUMBER),
  avatar: `img/avatar-${ getRandomInteger(MIN_ID_NUMBER, MAX_AVATAR_NUMBER) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

// массив объектов с фотографиями пользователей.
const getUserPhotos = () => ({
  id: generateId(),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE_NUMBER, MAX_LIKE_NUMBER),
  comments: getUserComments()
});

//создаем массив из 25 объектов-фотографий.
Array.from({length: MAX_ARRAY_LENGHT}, getUserPhotos);

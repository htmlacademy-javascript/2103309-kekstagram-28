//Магические числа
const minIdNumber = 1;
const maxIdNumber = 25;
const maxAvatarNumber = 6;
const minLikeNumber = 15;
const maxLikeNumber = 200;
const maxCommentNumber = 1000;
const maxArrayLenght = 25;

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
const MASSAGES = [
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

const generatePhotoId = getId(minIdNumber, maxIdNumber);
const generateId = getId(minIdNumber, maxIdNumber);

// «разделяй и властвуй» =)
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// массив объектов с комментариями.
const userComments = () => ({
  id: getRandomInteger(minIdNumber, maxCommentNumber),
  avatar: `img/avatar-${ getRandomInteger(minIdNumber, maxAvatarNumber) }.svg`,
  message: getRandomArrayElement(MASSAGES),
  name: getRandomArrayElement(NAMES)
});

// массив объектов с фотографиями пользоваиелей.
const userPhotos = () => ({
  id: generateId(),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(minLikeNumber, maxLikeNumber),
  comments: userComments()
});

//создаем массив из 25 объектов-фотографий.
Array.from({length: maxArrayLenght}, userPhotos);

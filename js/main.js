// строка — адрес картинки вида photos/{{i}}.jpg.
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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

// функция получения случайного числа из диапазона.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// аватак комментирующего лица.
const AVATAR_NUMBER = [1, 2, 3, 4, 5, 6];

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

// ищем случайный индекс элемента из массивов
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// получаем случайное неповторяющееся число из массива.
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
}
const generatePhotoId = getId(1, 25);
const generateId = getId(1, 25);

// «разделяй и властвуй» =)
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// функция для записи адреса картинки аватара пользователя.
const userAvatarPhoto = () => {
  const photoOfAvatar = getRandomInteger(1, AVATAR_NUMBER.length - 2);
  return 'img/avatar-'+photoOfAvatar+'.svg;';
};

// массив объектов с комментариями.
const userComments = () => ({
    id: randomNumber(1,1000),
    avatar: userAvatarPhoto(),
    message: getRandomArrayElement(MASSAGES),
    name: getRandomArrayElement(NAMES)
});

// массив объектов с фотографиями пользоваиелей.
const userPhotos = () => ({
    id: generateId(ID),
    url: 'photos/'+generatePhotoId(ID)+'.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: randomNumber(15,200),
    comments: userComments()
});

//создаем массив из 25 объектов-фотографий.
const similarPhotos = Array.from({length: 25}, userPhotos);

console.log (similarPhotos);

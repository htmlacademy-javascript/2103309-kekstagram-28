// Проходит ли строка по длинне?
function findLenght(str, letters) {
  return str.length >= letters;
}
findLenght('Теплый пушистый котенок спит, свернулся в клубочек и мурчит.', 5);

// Полидром ли этот текст (и текст с пробелами)?
function isItPalidrom(str) {
  str = str.toLowerCase().replaceAll(/[^а-яa-z1-9]/g, '');

  const index = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[index - i]) {
      return false;
    }
  }
  return true;
}
isItPalidrom('level');

// Есть ли в этой строке цифры?
function isItNumber(str) {
  const string = parseInt(str.replaceAll(/[^\d]/g, ''), 10);

  if (typeof string !== 'string') {
    return string;
  }
}
isItNumber('1 мяу');

// Плюс префикс
function originalStr(strOrig, strLenght, strAdd) {
  const prefixLength = strLenght - strOrig.length;
  if (prefixLength <= 0) {
    return strOrig;
  }

  let prefix = '';
  for (let i = 0; i < prefixLength; i++) {
    prefix += strAdd[i % strAdd.length];
  }
  return prefix + strOrig;
}
originalStr('q', 4, 'werty');

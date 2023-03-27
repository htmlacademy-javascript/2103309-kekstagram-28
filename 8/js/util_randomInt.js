
import {getRandomInteger} from './util.js';
// «разделяй и властвуй» =)
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement};

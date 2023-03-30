const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DECIMAL_SYSTEM = 10;
const PERSENT = 100;

const FILTER_EFFECTS = [
  {name: 'none', filter: 'none', min: 0, max: 100, step: 1},
  {name: 'chrome', filter: 'grayscale', min: 0, max: 1, step: 0.1, unit: ''},
  {name: 'sepia', filter: 'sepia', min: 0, max: 1, step: 0.1, unit: ''},
  {name: 'marvin', filter: 'invert', min: 0, max: 100, step: 1, unit: '%'},
  {name: 'phobos', filter: 'blur', min: 0, max: 3, step: 0.1, unit: 'px'},
  {name: 'heat', filter: 'brightness', min: 1, max: 3, step: 0.1, unit: ''}
];

const noneEffect = FILTER_EFFECTS[0];
let currentEffect = noneEffect;
const previewContainer = document.querySelector('.img-upload__preview-container');
const deepEffectContainer = previewContainer.querySelector('.img-upload__effect-level');
const deepEffectSlider = previewContainer.querySelector('.effect-level__slider');
const deepEffectValue = previewContainer.querySelector('.effect-level__value');
const editableImage = previewContainer.querySelector('.img-upload__preview').querySelector('img');
const scaleValue = previewContainer.querySelector('.scale__control--value');

// изменение размера картинки при нажатии на "-" и "+"
const zoomingImg = (zooming) => {
  switch (zooming) {
    case 'increase':
      if (parseInt(scaleValue.value, DECIMAL_SYSTEM) < MAX_SCALE_VALUE) {
        scaleValue.value = `${parseInt(scaleValue.value, DECIMAL_SYSTEM) + SCALE_STEP}%`;
      }
      break;
    case 'decrease':
      if (parseInt(scaleValue.value, DECIMAL_SYSTEM) > MIN_SCALE_VALUE) {
        scaleValue.value = `${parseInt(scaleValue.value, DECIMAL_SYSTEM) - SCALE_STEP}%`;
      }
  }
  editableImage.style.transform = `scale(${parseInt(scaleValue.value, DECIMAL_SYSTEM) / PERSENT})`;
};

const decreaseCurrentScale = () => zoomingImg('decrease');
const increaseCurrentScale = () => zoomingImg('increase');

noUiSlider.create(deepEffectSlider, {
  range: {
    min: noneEffect.min,
    max: noneEffect.max,
  },
  start: noneEffect.max,
  step: noneEffect.step,
  connect: 'lower',
});

//убираем слайдер у картинки по умолчанию
const checkIsDefault = () => {
  if (currentEffect.name === noneEffect.name) {
    deepEffectContainer.classList.add('hidden');
    editableImage.style.filter = 'none';
  } else {
    deepEffectContainer.classList.remove('hidden');
  }
};

const updateSlider = () => {
  checkIsDefault();
  deepEffectSlider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });
};

const resetEffects = () => {
  currentEffect = noneEffect;
  updateSlider();
};

// переключение эффектов
function сhangeFilterType (evt) {
  if (evt.target.classList.contains('effects__radio')) {
    const effectsID = evt.target.value;
    editableImage.className = `effects__preview--${effectsID}`;
    currentEffect = FILTER_EFFECTS.find((effect) => effect.name === effectsID);
    updateSlider();
  }

  deepEffectSlider.noUiSlider.on('update', () => {
    deepEffectValue.value = deepEffectSlider.noUiSlider.get();
    editableImage.style.filter = `${currentEffect.filter}(${deepEffectValue.value}${currentEffect.unit})`;
  });
}

export {previewContainer,
  noneEffect,
  currentEffect,
  editableImage,
  decreaseCurrentScale,
  increaseCurrentScale,
  resetEffects,
  сhangeFilterType};

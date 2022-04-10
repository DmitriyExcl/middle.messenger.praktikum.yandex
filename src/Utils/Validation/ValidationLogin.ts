// eslint-disable-next-line import/prefer-default-export
export const ValidationLogin = {
  REQUIRED_TEXT: 'Поле обязательно для заполнения',
  MIN_LENGTH: 'Минимальная длина 4 символа',
  CHECK_ONE_SYMBOL: 'Первая буква должна быть заглавной, без пробелов и без цифр',
  CHECK_PASSWORD: 'Укажите пароль!',
};

export const FindOneSymbol = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;

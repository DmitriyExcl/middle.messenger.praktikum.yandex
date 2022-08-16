// eslint-disable-next-line no-useless-escape
export const REG_EXP_VALIDATE_LOGIN = /^\b[A-Za-z]+[\w\-]{2,19}\b$/;
export const REG_EXP_VALIDATE_PASSWORD = /^(?=.*[A-ZА-Я])(?=.*\d).{8,40}$/;
export const REG_EXP_VALIDATE_NAME = /^[A-ZА-Я][a-zа-я-]*$/;
// eslint-disable-next-line no-useless-escape
export const REG_EXP_VALIDATE_EMAIL = /^[\w\.-]+@[A-Za-z]+\.[A-Za-z]+$/;
export const REG_EXP_VALIDATE_PHONE = /^\+?[0-9]{10,15}$/;

export const REQUIRED_TEXT = 'Поле обязательно для заполнения';

export const ValidationLogin = {
  CHECK_VALUE_LOGIN: 'Не корректный логин',
  CHECK_VALUE_PASSWORD: 'Не корректный пароль',
};
export const ValidationAuth = {
  CHECK_VALUE_EMAIL: 'Не корректный email',
  CHECK_VALUE_LOGIN: 'Может содержать только латинские буквы и цифры. от 3 до 20 символов',
  CHECK_VALUE_NAME: 'Должен содержать только буквы и начинаться с заглавной буквы',
  CHECK_VALUE_PHONE: 'Не корректный телефон',
  CHECK_VALUE_PASSWORD: 'Должен содержать 1 цифру и 1 заглавную букву. от 8 до 40 символов.',
  CHECK_VALUE_PASSWORD_REPEAD: 'Пароли не совпадают',

}

export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

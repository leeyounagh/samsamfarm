const emailRegExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const phoneNumberRegExp = /^\d{3}\d{3,4}\d{4}$/;
const birthRegExp = /^\d{4}\d{2}\d{2}$/;

export const emailValidation = (value) => {
  return emailRegExp.test(value);
};

export const phoneNumberValidation = (value) => {
  return phoneNumberRegExp.test(value);
};

export const birthValidation = (value) => {
  return birthRegExp.test(value);
};

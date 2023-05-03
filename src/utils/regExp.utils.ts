const emailRegExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const phoneNumberRegExp = /^\d{3}\d{3,4}\d{4}$/;
const birthRegExp = /^\d{4}\d{2}\d{2}$/;
const emailValidation = (value: string): boolean => {
  return emailRegExp.test(value);
};

const phoneNumberValidation = (value: string): boolean => {
  return phoneNumberRegExp.test(value);
};

const birthValidation = (value: string): boolean => {
  return birthRegExp.test(value);
};

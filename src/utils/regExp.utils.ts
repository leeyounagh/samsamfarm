const emailRegExp: RegExp =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

export const emailValidation = (value: string): boolean => {
  return emailRegExp.test(value);
};

const phoneNumberRegExp: RegExp = /^\d{3}\d{3,4}\d{4}$/;
export const phoneNumberValidation = (value: string): boolean => {
  return phoneNumberRegExp.test(value);
};

const mbtiRegExp: RegExp = /^[EI][SN][TF][JP]$/;

export const mbtiValidation = (value: string): boolean => {
  return mbtiRegExp.test(value);
};

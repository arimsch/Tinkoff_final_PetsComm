export enum ValidatorsLength {
  MAX_LENGTH_MAIL = 100,
  MIN_LENGTH_PASSW = 6,
  MAX_LENGTH_DISPLAY_NAME = 25,
  MIN_LENGTH_DISPLAY_NAME = 3,
}

export const HAVE_NUMBER_PATTERN = /\d/;

export const HAVE_BIGLETTER_PATTERN = /[A-Z]/;

export const HAVE_SLETTER_PATTERN = /[a-z]/;

export const HAVE_SPECIAL_SYM = /[_!#\+\-\$]/;

export const TYPE_MAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

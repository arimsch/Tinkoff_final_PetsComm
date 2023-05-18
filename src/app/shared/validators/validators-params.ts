import { TextErrors } from './text-errors';

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

export const patternValidators = {
  [`${HAVE_NUMBER_PATTERN}`]: TextErrors.HAVE_NUMBER_PATTERN,
  [`${HAVE_SLETTER_PATTERN}`]: TextErrors.HAVE_SLETTER_PATTERN,
  [`${HAVE_BIGLETTER_PATTERN}`]: TextErrors.HAVE_BIGLETTER_PATTERN,
  [`${HAVE_SPECIAL_SYM}`]: TextErrors.HAVE_SPECIAL_SYM,
  [`${TYPE_MAIL}`]: TextErrors.TYPE_MAIL,
};

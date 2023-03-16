import { ValidationErrors } from 'final-form'
import get from 'lodash/get'
import set from 'lodash/set'

const errorRequired = 'Required'

export function setRequiredFields<T extends Record<string, any>>(
  values: T,
  errors: ValidationErrors,
  keys: string[]
) {
  if (values && errors) {
    keys.forEach(key => {
      const value = get(values, key)

      if (!value || (Array.isArray(value) && value.length === 0)) {
        set(errors, key, errorRequired)
      }
    })
  }
}

export const validationPatterns = {
  username: /^[A-Z-А-Я]+[а-яА-ЯёЁa-zA-Z-]*$/,
  login: /^[a-zA-Z][a-zA-Z0-9-_.]{2,20}$/,
  email:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,40}$/,
  phone: /^[+]?[0-9]{11,15}$/im,
  message: /^(?!s*$).+/,
}

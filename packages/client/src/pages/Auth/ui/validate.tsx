import { setRequiredFields, validationPatterns } from '@/shared/lib/validation'
import { UserSignIn } from '@/shared/types/User'

export enum AUTH_FIELDS {
  LOGIN = 'login',
  PASSWORD = 'password',
}

const errorLogin = 'Invalid login'
const errorPassword =
  'From 8 to 40 characters, at least one capital letter and a number are required.'

export default function validate(values: UserSignIn) {
  const errors: Partial<Record<keyof UserSignIn, string>> = {}

  // setRequiredFields(values, errors, [AUTH_FIELDS.LOGIN, AUTH_FIELDS.PASSWORD])

  // if (!validationPatterns.login.test(values.login)) {
  //   errors.login = errorLogin
  // }

  // if (!validationPatterns.password.test(values.password)) {
  //   errors.password = errorPassword
  // }

  return errors
}

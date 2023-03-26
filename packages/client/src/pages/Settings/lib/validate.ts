import { setRequiredFields } from '@/shared/lib/validation'
import { UserEntity } from '@/shared/types/User'
import { Labels } from './config'

export default function validate(values: UserEntity) {
  const errors: Partial<Record<keyof UserEntity, string>> = {}

  setRequiredFields(values, errors, Object.keys(Labels))

  return errors
}
import { convertToCamelCase, convertToSnakeCase } from '@/shared/lib/objectUtils'
import { UserEntity, UserServerEntity } from '@/shared/types/User'

export class UserMapper {
  static toView(user: UserServerEntity): UserEntity {
    return convertToCamelCase(user)
  }

  static toApi(user: UserEntity): UserServerEntity {
    return convertToSnakeCase(user)
  }
}

export const getUserInfoList = (user?: UserEntity | null) => {
  if (!user) {
    return []
  }
  return [
    { label: 'Mail', value: user.email },
    { label: 'Login', value: user.login },
    { label: 'First name', value: user.firstName },
    { label: 'Second name', value: user.secondName },
    { label: 'Phone', value: user.phone },
  ]
}

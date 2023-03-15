import { convertToCamelCase } from '@/shared/lib/object-utils'
import { UserEntity, UserServerEntity } from '@/shared/types/User'

export class UserMapper {
  static toView(user: UserServerEntity): UserEntity {
    return convertToCamelCase(user)
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

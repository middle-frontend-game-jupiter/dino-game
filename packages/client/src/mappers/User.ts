import { convertToCamelCase } from "@/shared/lib/object-utils";
import { UserEntity, UserServerEntity } from "@/shared/types/User";

export class UserMapper {
  static toView(user: UserServerEntity): UserEntity {
    return convertToCamelCase(user)
  }
}
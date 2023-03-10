export interface UserSignInDto {
  firstName: string;
  password: string;
}
  
export interface UserEntity {
  fist_name: string;
  // необходимо вытащить из сваггера сущность юзера
}

export interface AuthResponse {
  id: number;
}
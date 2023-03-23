export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}
export interface CreateUserDTO extends Omit<User, 'role'> {}

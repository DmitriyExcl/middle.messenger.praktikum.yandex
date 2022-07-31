import { UserDTO } from '../Core/Api/types';

export const transformUser = (data: UserDTO): User => {
  return {
    login: data.login,
    firstName: data.first_name,
    id: data.id,
  };
};
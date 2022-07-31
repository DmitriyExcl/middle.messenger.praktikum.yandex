import { request } from '../Request';
import { APIError, LoginRequestData, RegistrationRequestData, UserDTO } from './types';

type LoginResponseData = {} | APIError;

export const authAPI = {
  login: (data: LoginRequestData) => request.post<LoginResponseData>('auth/login', data),

  registration: (data: RegistrationRequestData) => request.post<LoginResponseData>('auth/signup', data),

  me: () => request.get<UserDTO | APIError>('auth/user'),

  logout: () => request.post('auth/logout'),
};

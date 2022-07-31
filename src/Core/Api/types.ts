export type APIError = {
    reason: string;
  };

export type UserDTO = {
    id: number;
    login: string;
    first_name: string;
  };

export type LoginRequestData = {
    login: string;
    password: string;
};

export type RegistrationRequestData = {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
};
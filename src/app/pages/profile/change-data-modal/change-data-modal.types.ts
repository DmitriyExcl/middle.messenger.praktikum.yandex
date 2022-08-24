import { Input } from '../../../components/input';
import { IUserData } from '../../../services/auth/auth.types';
import { Button } from '../../../components/button';

export interface IPropsChangeDataModal {
    userData?: IUserData;
}

export interface IChildrenChangeDataModal {
    [EChangeDataModalChildren.EmailInput]: Input;
    [EChangeDataModalChildren.LoginInput]: Input;
    [EChangeDataModalChildren.FirstNameInput]: Input;
    [EChangeDataModalChildren.SecondNameInput]: Input;
    [EChangeDataModalChildren.DisplayNameInput]: Input;
    [EChangeDataModalChildren.PhoneInput]: Input;
    [EChangeDataModalChildren.SubmitBtn]: Button;
    [EChangeDataModalChildren.LinkBtn]: Button;
}

export enum EChangeDataModalChildren {
    EmailInput = 'emailInput',
    LoginInput = 'loginInput',
    FirstNameInput = 'firstNameInput',
    SecondNameInput = 'secondNameInput',
    DisplayNameInput = 'displayNameInput',
    PhoneInput = 'phoneInput',
    SubmitBtn = 'submitBtn',
    LinkBtn = 'linkBtn',
}

export enum EChangeDataFormFields {
    Email = 'email',
    Login = 'login',
    FirstName = 'first_name',
    SecondName = 'second_name',
    DisplayName = 'display_name',
    Phone = 'phone',
}

export interface IChangeDataFormValue {
    [EChangeDataFormFields.Email]: string;
    [EChangeDataFormFields.Login]: string;
    [EChangeDataFormFields.FirstName]: string;
    [EChangeDataFormFields.SecondName]: string;
    [EChangeDataFormFields.DisplayName]: string;
    [EChangeDataFormFields.Phone]: string;
}

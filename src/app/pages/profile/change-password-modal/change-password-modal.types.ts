import { Input } from '../../../components/input';
import { IUserData } from '../../../services/auth/auth.types';
import { Button } from '../../../components/button';

export interface IPropsChangePasswordModal {
    userData?: IUserData;
}

export interface IChildrenChangePasswordModal {
    [EChangePasswordChildren.OldPasswordInput]: Input;
    [EChangePasswordChildren.PasswordInput]: Input;
    [EChangePasswordChildren.PasswordRepeatInput]: Input;
    [EChangePasswordChildren.SubmitBtn]: Button;
    [EChangePasswordChildren.LinkBtn]: Button;
}

export enum EChangePasswordChildren {
    OldPasswordInput = 'oldPasswordInput',
    PasswordInput = 'passwordInput',
    PasswordRepeatInput = 'passwordRepeatInput',
    SubmitBtn = 'submitBtn',
    LinkBtn = 'linkBtn',
}

export enum EChangePasswordFormFields {
    OldPassword = 'oldPassword',
    Password = 'newPassword',
    PasswordRepeat = 'passwordRepeat',
}

export interface IChangePasswordFormValue {
    [EChangePasswordFormFields.OldPassword]: string;
    [EChangePasswordFormFields.Password]: string;
    [EChangePasswordFormFields.PasswordRepeat]?: string;
}

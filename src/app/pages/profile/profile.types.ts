import { IUserData } from '../../services/auth/auth.types';
import { AvatarModal } from '../../components/avatar-modal';
import { ChangeDataModal } from './change-data-modal';
import { ChangePasswordModal } from './change-password-modal';

export interface IPropsProfile {
    userData?: IUserData;
}

export interface IChildrenProfile {
    changeAvatarModal: AvatarModal;
    changeDataModal: ChangeDataModal;
    changePasswordModal: ChangePasswordModal;
}

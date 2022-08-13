// @ts-ignore
import { ChatList } from './chat-list';
// @ts-ignore
import { Chat } from './chat';
import { PlugDialog } from './plug-dialog';
import { IChatCard } from '../../services/chats/chats.types';
import { IMessage } from './chat/dialogues';
import { NewChatModal } from './modals/new-chat-modal';
// @ts-ignore
import { EditUsersModal } from './modals/edit-users-modal';
import { AvatarModal } from '../../components/avatar-modal';
import { Modal } from '../../components/modal';
import { UserInfoModal } from './modals/user-info-modal';

export interface IChatPageProps {
    chats?: IChatCard[];
    currentMessages?: IMessage[];
}

export interface IChatPageChildren {
    // @ts-ignore
    chatList: ChatList;
    // @ts-ignore
    chat: Chat;
    plug: PlugDialog;
    newChatModal: NewChatModal;
    // @ts-ignore
    editUserModal: EditUsersModal;
    userInfoModal: UserInfoModal;
    changeAvatarModal: AvatarModal;
    modal: Modal;
}

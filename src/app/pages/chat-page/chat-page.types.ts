import { ChatList } from './chat-list';
import { Chat } from './chat';
import { PlugDialog } from './plug-dialog';
import { IChatCard } from '../../services/chats/chats.types';
import { IMessage } from './chat/dialogues';
import { NewChatModal } from './modals/new-chat-modal';
import { EditUsersModal } from './modals/edit-users-modal';
import { AvatarModal } from '../../components/avatar-modal';
import { Modal } from '../../components/modal';
import { UserInfoModal } from './modals/user-info-modal';

export interface IChatPageProps {
    chats?: IChatCard[];
    currentMessages?: IMessage[];
}

export interface IChatPageChildren {
    chatList: ChatList;
    chat: Chat;
    plug: PlugDialog;
    newChatModal: NewChatModal;
    editUserModal: EditUsersModal;
    userInfoModal: UserInfoModal;
    changeAvatarModal: AvatarModal;
    modal: Modal;
}

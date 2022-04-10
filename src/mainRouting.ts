import renderDOM from './Core/RenderPage';
import registerComponent from './Core/RegisteredComponent';

import { LoginPage } from './pages/Login/Login';
import { ChatPage } from './pages/chat/Chat';
import { RegistrationPage } from './pages/registrations/Registratinon';
import { EditPasswordPage } from './pages/editPassword/EditPassword';
import { UserProfilePage } from './pages/userProfile/UserProfile';
import { EditData } from './pages/editData/EditData';

import { ROUTE_PAGES } from './configRouting';

import { Button } from './Components/Buttons/ButtonLink';
import { Input } from './Components/Input/Input';
import { Link } from './Components/Link/Link';

registerComponent(Button);
registerComponent(Input);
registerComponent(Link);

document.addEventListener('DOMContentLoaded', () => {
  switch (document.location.pathname) {
    case ROUTE_PAGES.LOGIN:
      renderDOM(LoginPage);
      break;
    case ROUTE_PAGES.REGISTRATION:
      renderDOM(RegistrationPage);
      break;
    case ROUTE_PAGES.CHAT:
      renderDOM(ChatPage);
      break;
    case ROUTE_PAGES.EDIT_DATA:
      renderDOM(EditData);
      break;
    case ROUTE_PAGES.PROFILE:
      renderDOM(UserProfilePage);
      break;
    case ROUTE_PAGES.EDIT_PASSWORD:
      renderDOM(EditPasswordPage);
      break;
    default:
      '';
  }
});

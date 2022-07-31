import { BlockClass } from '../Core/Block/Block';
import EditData from '../pages/editData/EditData';
import Login from '../pages/Login/Login';
import Registratinon from '../pages/registrations/Registratinon';
import userProfile from '../pages/userProfile';

export enum Screens {
  Login = 'login',
  Profile = 'profile',
  Registration ='registration',
  EditData = 'editData'
}

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Login]: Login,
  [Screens.Registration]: Registratinon,
  [Screens.Profile]: userProfile,
  [Screens.EditData]: EditData,

};

export const getScreenComponent = (screen: Screens): BlockClass<any> => {  
  return map[screen];
};
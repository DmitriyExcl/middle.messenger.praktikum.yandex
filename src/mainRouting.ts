// import { renderDOM, registerComponent, Store, BrowserRouter } from 'core';
import { initApp } from './services/initApp';
import { diffObjectsDeep, getScreenComponent } from './utils';
import { defaultState } from './store';
import registerComponent from './Core/RegisteredComponent';
import { Store } from './Core/Store';
import { BrowserRouter } from './Core/BrowserRouter';
import renderDOM from './Core/RenderDOM';
import { RegistrationPage } from './pages/registrations/Registratinon';
import Login from './pages/Login/Login';
import { ROUTE_PAGES } from './configRouting';
import userProfile from './pages/userProfile';
import * as components from './components';
import Chat from './pages/chat/Chat';
import EditData from './pages/editData/EditData';
import editPassword from './pages/editPassword';

Object.values(components).forEach((Component: any) => {
  registerComponent(Component);
});

declare global {
  interface Window {
    store: Store<AppState>;
    router: BrowserRouter;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store<AppState>(defaultState);
  const router = new BrowserRouter();

  /**
   * Помещаем роутер и стор в глобальную область для доступа в хоках with*
   * @warning Не использовать такой способ на реальный проектах
   */
  window.router = router;
  window.store = store;

  /**
   * Глобальный слушатель изменений в сторе
   * для переключения активного экрана
   */
  store.on('changed', (prevState, nextState) => {
    console.log(prevState);
    if (process.env.DEBUG) {
      console.log(
        '%cstore updated',
        'background: #222; color: #bada55',
        nextState,
      );
      console.log(JSON.stringify(diffObjectsDeep.map(prevState, nextState)));
    }
    router.go(window.location.pathname);
    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM(new Page({}));
    }
  });

  /**
   * Инициализируем роутинг
   */
  router
    .use(ROUTE_PAGES.LOGIN, Login, {})
    .use(ROUTE_PAGES.REGISTRATION, RegistrationPage, {})
    .use(ROUTE_PAGES.PROFILE, userProfile, {})
    .use(ROUTE_PAGES.CHAT, Chat, {})
    .use(ROUTE_PAGES.EDIT_DATA, EditData, {})
    .use(ROUTE_PAGES.EDIT_PASSWORD, editPassword, {})
    .start();

  /**
   * Загружаем данные для приложения
   */
  setTimeout(() => {
    store.dispatch(initApp);
  }, 100);
});

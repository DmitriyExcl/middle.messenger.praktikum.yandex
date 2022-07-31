import { authAPI } from '../Core/Api/auth';
import { UserDTO } from '../Core/Api/types';
import { Dispatch } from '../Core/Store';
import { apiHasError, transformUser } from '../Utils';

export async function initApp(dispatch: Dispatch<AppState>) {
  dispatch({ isLoading: true });

  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      return;
    }

    dispatch({ user: transformUser(response as UserDTO) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ isLoading: false });
  }
}

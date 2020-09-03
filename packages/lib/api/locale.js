import { store } from '../store';
import ActionType from '../store/action-type';

export const setLocale = (payload) =>
  store.dispatch({ type: ActionType.Locale.Set, payload });

export const getLocale = () => store.getState().locale.picked;

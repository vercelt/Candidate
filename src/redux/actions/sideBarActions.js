import "../redux-constants";
import { ReduxConstants } from "../redux-constants";

export const toggleSidebarVisibility = () => ({
  type: ReduxConstants.TOGGLE_SUBMENU_VISIBILITY,
});

export const setActiveItemIndex = (index) => ({
  type: ReduxConstants.SET_ACTIVE_ITEM_INDEX,
  payload: index,
});

export const toggleSubmenuVisibility = (index) => ({
  type: ReduxConstants.TOGGLE_SUBMENU_VISIBILITY,
  payload: index,
});

import { ReduxConstants } from "../redux-constants";
const initialState = {
  navItems: [
    {
      icon: "/images/home.svg",
      text: "Home",
      link: "/dashboard/overview",
      hasDivider: true,
    },
    {
      icon: "/images/prospect.svg",
      text: "All Candidates",
      link: "/dashboard/allcandidates",
      hasDivider: false,
    },
    {
      icon: "/images/applicant.svg",
      text: "Applicantions",
      link: "/dashboard/applicant",
      hasDivider: true,
      badge: 10,
    },
    {
      icon: "/images/recruiting.svg",
      text: "Recruiting Tools",
      link: "",
      expand: true,
    },
    {
      text: "Recruiting QR Code",
      link: "/dashboard/recruiting-qr-code",
      invisible: true,
    },
    {
      icon: "/images/settings.svg",
      text: "Account",
      link: "/dashboard/account",
    },
  ],
  activeItemIndex: 0,
  isSidebarVisible: true,
};

const sideBarReducer = (state = initialState, action) => {
  console.log("buttonReducer state:" + JSON.stringify(state));
  console.log("buttonReducer action:" + JSON.stringify(action));
  switch (action.type) {
    case ReduxConstants.TOGGLE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible,
      };
    case ReduxConstants.TOGGLE_SUBMENU_VISIBILITY:
      const updatedNavItems = state.navItems.map((item, idx) => {
        if (idx === action.payload + 1) {
          return { ...item, invisible: !item.invisible };
        }
        return item;
      });
      return {
        ...state,
        navItems: updatedNavItems,
      };
    case ReduxConstants.SET_ACTIVE_ITEM_INDEX:
      return {
        ...state,
        activeItemIndex: action.payload,
      };
    default:
      return state;
  }
};

export default sideBarReducer;

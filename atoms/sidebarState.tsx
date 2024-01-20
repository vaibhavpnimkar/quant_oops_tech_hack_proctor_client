import { atom } from "recoil";

export const sidebarState = atom({
  key: "Sidebar",
  default: {
    isHidden: false,
  },
});

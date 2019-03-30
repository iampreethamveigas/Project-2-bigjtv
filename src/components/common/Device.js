import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

  export const b = isBrowser || false;
  export const m = isMobile || false;
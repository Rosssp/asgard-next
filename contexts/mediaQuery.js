import { createContext, useContext } from "react";

const MediaQueryContext = createContext({
    mob: false,
    padding: false,
});

export const useMediaQueryContext = () => useContext(MediaQueryContext);

export default MediaQueryContext;

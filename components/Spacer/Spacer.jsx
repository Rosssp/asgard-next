import styles from "./spacer.module.scss";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function Spacer({ size }) {
    const { mob, padding } = useMediaQueryContext();
    const mobileSize = size / 2;
    return (
        <div
            style={{ height: `${!mob ? size + "px" : mobileSize + "px"}` }}
        ></div>
    );
}

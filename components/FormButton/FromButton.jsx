import cn from "classnames";
import styles from "./fromButton.module.scss";

export default function FromButton({ children, color, onClick }) {
    return (
        <button className={cn(styles.wrapper, styles[color])} onClick={onClick}>
            <p>{children}</p>
        </button>
    );
}

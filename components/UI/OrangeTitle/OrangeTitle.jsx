import cn from "classnames";
import styles from "./orangeTitle.module.scss";

export default function OrangeTitle({ children, after }) {
    return (
        <div className={cn(styles.wrapper, styles[after && "after"])}>
            <p>{children}</p>
        </div>
    );
}

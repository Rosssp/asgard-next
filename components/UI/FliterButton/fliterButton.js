import React from "react";
import cn from "classnames";
import styles from "./fliterButton.module.scss";

export default function FliterButton({ children, type, onClick }) {
    return (
        <div className={cn(styles.wrapper, styles[type])} onClick={onClick}>
            {children}
        </div>
    );
}

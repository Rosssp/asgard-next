import React from "react";
import styles from "./characteristicBlock.module.scss";

export default function CharacteristicBlock({ title, subTitle }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subTitle}>{subTitle}</p>
        </div>
    );
}

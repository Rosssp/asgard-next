import React from "react";
import styles from "./aboutProject.module.scss";

export default function AboutProject({ text }) {
    return (
        <div className={styles.wrapper}>
            <h1>О проекте</h1>
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
    );
}

import React from "react";
import styles from "./inputCosts.module.scss";

export default function InputCosts() {
    return (
        <div className={styles.input}>
            <input value={53500} />
            <div className={styles.currency}>
                <p>USD</p>
            </div>
        </div>
    );
}

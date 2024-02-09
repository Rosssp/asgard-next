import React from "react";
import styles from "./termsOfPurchase.module.scss";
import Calculator from "@/components/Calculator/calculator";
import Reserve from "@/components/Reserve/reserve";

export default function TermsOfPurchase() {
    return (
        <div className={styles.wrapper}>
            <h1>условия приобретения</h1>
            <div>
                <Calculator />
                <Reserve />
            </div>
        </div>
    );
}

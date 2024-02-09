import React from "react";
import styles from "./buildPriceCard.module.scss";
import Angle from "@/assets/image/angleDown.svg";
import cn from "classnames";

export default function BuildPriceCard({
    num,
    price,
    mettres,
    additional,
    sold,
}) {
    return (
        <div className={cn(styles.wrapper, styles[sold && "sold"])}>
            {/* м2 */}
            <div>
                <div className={styles.rooms}>
                    <h2>{num}</h2>
                    <h4>
                        комнтаные
                        <span>{mettres} м²</span>
                    </h4>
                </div>
                <p className={styles.price}>
                    от <span>{price}</span> млн
                </p>
                <p className={styles.additional}>{additional} try/м²</p>
            </div>
            <div className={styles.angle}>
                <Angle />
            </div>
        </div>
    );
}

import React from "react";
import cn from "classnames";
import styles from "./catalogCard.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

export default function RecomendationCard({
    img,
    contribution,
    title,
    subTitle,
    from,
    to,
    descr,
}) {
    const router = useRouter();
    const handleClickObject = (e) => {
        e.preventDefault();
        router.push("/object");
    };
    return (
        <div className={cn(styles.wrapper)} onClick={handleClickObject}>
            <div className={cn(styles.main)}>
                <Image fill src={img} alt={img} />
                <div className={cn(styles.buildInformation)}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <p className={styles.repair}>{contribution}</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.subtitle}>{subTitle}</p>
                    </div>
                </div>
            </div>
            <div className={cn(styles.footer, styles.recomendation)}>
                <div className={styles.left}>
                    <div className={styles.stock}>
                        <p>
                            с <span>{from}</span>
                        </p>
                        <p>
                            по <span>{to}</span>
                        </p>
                    </div>
                    <p className={styles.descr}>{descr}</p>
                </div>
            </div>
        </div>
    );
}

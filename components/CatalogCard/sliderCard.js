import React from "react";
import styles from "./catalogCard.module.scss";
import Image from "next/image";
import Access from "@/assets/image/access.svg";
import Calendar from "@/assets/image/calendar.svg";
import cn from "classnames";

export default function SliderCard({
    img,
    title,
    geolocation,
    subtitle,
    handleClickObject,
    // planning,
    already,
}) {
    return (
        <div className={styles.wrapper} onClick={handleClickObject}>
            <div className={cn(styles.main, styles.status)}>
                <Image fill src={img} alt={img} />
                <div className={styles.buildInformation}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <p className={styles.event}>{geolocation}</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.title}>{title}</p>
                    </div>
                </div>
                <div className={styles.pointers}>
                    <div
                        className={cn(
                            styles.pointer,
                            styles[already >= 1 && "active"]
                        )}
                    ></div>
                    <div
                        className={cn(
                            styles.pointer,
                            styles[already >= 2 && "active"]
                        )}
                    ></div>
                    <div
                        className={cn(
                            styles.pointer,
                            styles[already >= 3 && "active"]
                        )}
                    ></div>
                    <div
                        className={cn(
                            styles.pointer,
                            styles[already >= 4 && "active"]
                        )}
                    ></div>
                </div>
            </div>
            <div className={styles.footer__min}>
                {already === 4 ? <Access /> : <Calendar />}
                {/* {planning && <Calendar />} */}
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

import React from "react";
import styles from "./pagination.module.scss";
import cn from "classnames";
import DoubleArrow from "@/assets/image/doubleArrow.svg";
import GrayArrow from "@/assets/image/grayArrow.svg";

export default function Pagination() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <div className={styles.wrapper}>
            <ul>
                <li className={styles.doubleArrow}>
                    <a href="">
                        <DoubleArrow />
                    </a>
                </li>
                <li className={styles.arrowLeft}>
                    <a href="">
                        <GrayArrow />
                    </a>
                </li>
                <li
                    className={cn(
                        styles.pageNumber,
                        styles[isActive === true && "active"]
                    )}
                    onClick={() => setIsActive((prev) => !prev)}
                >
                    <p>1</p>
                </li>
                <li className={styles.arrowRight}>
                    <GrayArrow />
                </li>
                <li className={styles.doubleArrowRight}>
                    <DoubleArrow />
                </li>
            </ul>
        </div>
    );
}

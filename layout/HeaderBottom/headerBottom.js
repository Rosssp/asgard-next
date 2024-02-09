import React from "react";
import styles from "./headerBottom.module.scss";
import cn from "classnames";

import Menu from "@/assets/image/menu_icon.svg";
import Building from "@/assets/image/building.svg";
import Favorite from "@/assets/image/favorite.svg";
import Messages from "@/assets/image/messages.svg";
import Comparison from "@/assets/image/comparison.svg";
import { useMediaQueryContext } from "@/contexts/mediaQuery";
import { useRouter } from "next/router";

export default function HeaderBottom() {
    const { mob, padding } = useMediaQueryContext();
    const router = useRouter();
    const handleClickCatalog = (e) => {
        e.preventDefault();
        router.push("/catalog");
    };

    const statsItems = [
        { favorite: 15, img: <Favorite /> },
        { messages: 3, img: <Comparison /> },
        { comparison: 25, img: <Messages /> },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.catalog} onClick={handleClickCatalog}>
                <Menu />
                <p>каталог {!mob && "недвижимости"} </p>
                <Building />
            </div>
            <ul className={styles.stats__items}>
                {statsItems.map((stats, index) => (
                    <>
                        <li key={index} className={styles.whiteBg}>
                            {Object.entries(stats).map(
                                ([key, value]) =>
                                    key !== "img" && <p key={key}>{value}</p>
                            )}
                            <>{stats.img}</>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}

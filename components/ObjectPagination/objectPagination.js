import React from "react";
import styles from "./objectPagination.module.scss";
import Spacer from "../Spacer/Spacer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ObjectPagination() {
    const router = useRouter();
    const { slug } = router.query;

    const paginationItems = [
        { id: 1, url: `/flats/${slug}`, text: "о проекте" },
        { id: 2, url: "/flats", text: "планировки" },
        {
            id: 3,
            url: `/flats/${slug}/monitoring`,
            text: "мониторинг строительства",
        },
        { id: 4, url: `/flats/${slug}/documents`, text: "документы" },
        { id: 5, url: `/flats/${slug}/news`, text: "новости" },
    ];
    const [active, setActive] = React.useState(false);
    const handleClick = (id) => {
        if (active === id) {
        } else {
            setActive(id);
        }
    };

    console.log(router.asPath);
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {paginationItems.map((item) => {
                        const isActive = router.asPath === item.url;
                        return (
                            <Link
                                href={item.url}
                                onClick={() => handleClick(item.id)}
                                className={`${styles.item} ${
                                    isActive ? styles.active : ""
                                }`}
                            >
                                {item.text}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <Spacer size={27} />
        </>
    );
}

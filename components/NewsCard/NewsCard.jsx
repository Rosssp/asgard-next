import React from "react";
import styles from "./newsCard.module.scss";
import OrangeTitle from "../UI/OrangeTitle/OrangeTitle";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NewsCard({ date, title, descr, slug, img }) {
    const router = useRouter();
    const handleClickObject = (e) => {
        e.preventDefault();
        router.push(`${slug}`);
    };
    return (
        <div className={styles.wrapper} onClick={handleClickObject}>
            <div className={styles.image}>
                <Image fill src={img} alt="" />
            </div>
            <div className={styles.right__side}>
                <OrangeTitle>{date}</OrangeTitle>
                <h3 className={styles.title}>{title}</h3>
                <div
                    className={styles.descr}
                    dangerouslySetInnerHTML={{ __html: descr }}
                ></div>
            </div>
        </div>
    );
}

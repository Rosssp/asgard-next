import React from "react";
import styles from "./accordion.module.scss";
import cn from "classnames";
import News from "@/assets/image/news.svg";
import AngleDown from "@/assets/image/angleDown.svg";
import Link from "next/link";

export default function Accordion({ title, desc, file }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div
            className={cn(styles.wrapper)}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <div className={styles.title}>
                <News />
                <h2>{title}</h2>
                <div className={cn(styles.angle, styles[isOpen && "rotate"])}>
                    <AngleDown />
                </div>
            </div>
            <div
                className={cn(styles.body, styles[isOpen === true && "active"])}
                // dangerouslySetInnerHTML={{ __html: desc }}
            >
                {file?.map((item) => (
                    <Link
                        target="_blank"
                        style={{
                            marginRight: "12px",
                            textAlign: "center",
                            marginTop: "24px",
                        }}
                        href={item?.url}
                    >
                        {item?.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

import React from "react";
import styles from "./catalogCard.module.scss";
import cn from "classnames";
import Sea from "@/assets/image/sea.svg";
import Image from "next/image";
import Heart from "@/assets/image/heart.svg";
import HeartActive from "@/assets/image/heart_active.svg";
import { useRouter } from "next/router";
import DateHelper from "@/helper/dateHelper";

export default function CatalogCard({
    tags,
    // repair,
    slug,
    img,
    onlyStock,
    stockFrom,
    stockTo,
    price,
    buildings,
    seaDistance,
    metroDistance,
    developer,
    title,
    subTitle,
    catalogLayout,
    large,
}) {
    const [isActive, setIsActive] = React.useState(false);
    const router = useRouter();
    const handleClickObject = (e) => {
        e.preventDefault();
        router.push(`/flats/${slug}`);
    };
    return (
        <div
            className={cn(
                styles.wrapper,
                styles[large && "large"],
                styles[catalogLayout && "catalog__layout"]
            )}
            onClick={handleClickObject}
        >
            <div
                className={cn(
                    styles.main,

                    large && "largeClass"
                )}
            >
                <Image fill src={img} alt={img} />
                <div className={cn(styles.buildInformation)}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            {tags?.map((item) => (
                                <p className={styles.event}>
                                    {item.title || item}
                                </p>
                            ))}
                            {/* {repair && (
                                <p className={styles.repair}>с ремонтом</p>
                            )}
                            <p className={styles.event}>
                                {!developer
                                    ? "акция"
                                    : "специальное предложение"}
                            </p> */}
                        </div>
                        {!onlyStock && (
                            <div
                                className={cn(styles.favorite)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsActive((prev) => !prev);
                                }}
                            >
                                {isActive ? <HeartActive /> : <Heart />}
                            </div>
                        )}
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.subtitle}>{subTitle}</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.left}>
                    {onlyStock ? (
                        <>
                            <div className={styles.stock}>
                                <p>
                                    с &nbsp;
                                    <span>
                                        <DateHelper dateToFormat={stockFrom} />
                                    </span>
                                </p>
                                <p>
                                    по &nbsp;
                                    <span>
                                        <DateHelper dateToFormat={stockTo} />
                                    </span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className={styles.price}>
                                от <span>{price}</span>
                            </p>
                            <p className={styles.buildings}>{buildings}</p>
                        </>
                    )}
                </div>
                <div
                    className={cn(styles.sea, styles[metroDistance && "metro"])}
                >
                    {seaDistance && (
                        <>
                            <Sea />
                            <p className={styles.direction}>
                                до моря <br /> <span>{seaDistance} мин</span>
                            </p>
                        </>
                    )}
                    {metroDistance && (
                        <>
                            <Sea />
                            <p className={styles.direction}>
                                Метро <span>{metroDistance} мин</span>
                            </p>
                        </>
                    )}
                </div>
                {developer && (
                    <div
                        style={{
                            backgroundColor: `${developer?.developerColorBG}`,
                        }}
                        className={styles.developer}
                    >
                        <Image src={developer?.img} width={80} height={100} />
                    </div>
                )}
            </div>
        </div>
    );
}

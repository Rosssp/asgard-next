import React from "react";
import styles from "./buildPriceCardLayout.module.scss";
import OrangeTitle from "@/components/UI/OrangeTitle/OrangeTitle";
import BuildPriceCard from "@/components/BuildPriceCard/buildPriceCard";
import FliterButton from "@/components/UI/FliterButton/fliterButton";
import AngleDown from "@/assets/image/angleDown.svg";
import Business from "@/assets/image/business.svg";
import cn from "classnames";

export default function BuildPriceCardLayout({
    date,
    course,
    prices,
    quarter,
    fakePriceCard,
}) {
    return (
        <div className={cn(styles.wrapper)}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h4>Планировки</h4>
                    <OrangeTitle after={true}>4</OrangeTitle>
                </div>
                <p className={styles.updated}>
                    Обновлено <span>{date}</span>, курс пересчёта
                    <span>&nbsp;{course}&nbsp;</span>
                    TRY/USD
                </p>
            </div>
            <div className={styles.prices}>
                <h2>{prices}</h2>
                <FliterButton>
                    <p>try/м²</p>
                </FliterButton>
                <FliterButton type={"svg"}>
                    <Business />
                </FliterButton>
                <FliterButton type={"auto"}>
                    <p>
                        Дата ввода, Дом: <span>{quarter}</span>
                    </p>
                    <AngleDown />
                </FliterButton>
            </div>
            <div className={styles.bottom}>
                {fakePriceCard?.map((item) => (
                    <BuildPriceCard
                        additional={item?.additional}
                        mettres={item?.mettres}
                        num={item?.num}
                        price={item?.price}
                        sold={item?.sold}
                    />
                ))}
            </div>
        </div>
    );
}

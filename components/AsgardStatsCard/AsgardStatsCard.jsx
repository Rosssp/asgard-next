import React from "react";
import styles from "./asgardStatsCard.module.scss";
import RedAngle from "@/assets/image/redAngle.svg";
import GreenAngle from "@/assets/image/greenAngle.svg";

export default function AsgardStatsCard({
    city,
    business,
    comfort,
    economy,
    premium,
}) {
    const data = [
        {
            id: 1,
            name: "Эконом",
            price: business?.amount,
            stats: business?.change_percent,
            svg:
                business?.change_direction === "up" ? (
                    <GreenAngle />
                ) : (
                    <RedAngle />
                ),
        },
        {
            id: 2,
            name: "Комфорт",
            price: comfort?.amount,
            stats: comfort?.change_percent,
            svg:
                comfort?.change_direction === "up" ? (
                    <GreenAngle />
                ) : (
                    <RedAngle />
                ),
        },
        {
            id: 3,
            name: "Бизнес",
            price: economy?.amount,
            stats: economy?.change_percent,
            svg:
                economy?.change_direction === "up" ? (
                    <GreenAngle />
                ) : (
                    <RedAngle />
                ),
        },
        {
            id: 4,
            name: "Премиум",
            price: premium?.amount,
            stats: premium?.change_percent,
            svg:
                premium?.change_direction === "up" ? (
                    <GreenAngle />
                ) : (
                    <RedAngle />
                ),
        },
    ];
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{city}</p>
            {data.map((item) => (
                <div key={item?.id}>
                    <p>{item?.name}</p>
                    <p>
                        {item?.price} <span> / м2</span>
                    </p>
                    <p>{item?.stats}%</p>
                    {item?.svg}
                </div>
            ))}
        </div>
    );
}

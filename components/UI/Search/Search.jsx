import React from "react";
import styles from "./search.module.scss";
import Map from "@/assets/image/map.svg";
import Spacer from "../../Spacer/Spacer";
import { useMediaQueryContext } from "@/contexts/mediaQuery";
import axios from "axios";

export default function Search() {
    const { mob, padding } = useMediaQueryContext();
    const [value, setValue] = React.useState("");

    const handleChange = (value) => {};
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.countries}>
                    <Map />
                    <p>анталья</p>
                </div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder={`${
                        !mob
                            ? "Введите поисковый запрос, район, жилой комплекс"
                            : "Введите поисковый запрос, район, ЖК"
                    }`}
                />
                <button>искать</button>
            </div>
            <Spacer size={44} />
        </>
    );
}

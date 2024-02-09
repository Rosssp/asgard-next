import React from "react";
import styles from "./calculator.module.scss";
import FromButton from "../FormButton/FromButton";
import InputCosts from "../UI/InputCosts/inputCosts";

export default function Calculator() {
    const [rangeValue, setRageValue] = React.useState(48);

    return (
        <div className={styles.wrapper}>
            <h2>рассчитать рассрочку</h2>
            <div className={styles.body}>
                <div className={styles.input__container}>
                    <p>
                        первоначальный <br /> взнос
                    </p>
                    <InputCosts />
                </div>
                <div className={styles.range__сontainer}>
                    <div
                        className={styles.inputValue}
                        style={{
                            left: ((rangeValue - 30) / (80 - 30)) * 95 + "%",
                        }}
                    >
                        {rangeValue}%
                    </div>
                    <input
                        style={{
                            background: `linear-gradient(to right, #0ccf2f 0%, #0faf2c ${
                                ((rangeValue - 30) / (80 - 30)) * 100
                            }%, #dadada ${
                                ((rangeValue - 30) / (80 - 30)) * 100
                            }%, #dadada 100%)`,
                        }}
                        type="range"
                        max={80}
                        min={30}
                        value={rangeValue}
                        onChange={(e) => setRageValue(e.target.value)}
                    />
                </div>
                <div className={styles.term}>
                    <p>срок, месяц</p>
                    <div className={styles.select}>
                        <select name="term">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="1">7</option>
                            <option value="2">8</option>
                            <option value="3">9</option>
                            <option value="4">10</option>
                            <option value="5">11</option>
                            <option value="6">12</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.calculate}>
                <div>
                    <FromButton>рассчитать</FromButton>
                    <p>сбросить</p>
                </div>
                <div>
                    <p>ежемесячный платёж</p>
                    <p className={styles.sum}>10 400</p>
                    <p>usd</p>
                </div>
            </div>
        </div>
    );
}

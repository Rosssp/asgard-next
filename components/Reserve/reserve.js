import React from "react";
import styles from "./reserve.module.scss";
import InputCosts from "../UI/InputCosts/inputCosts";
import FromButton from "../FormButton/FromButton";

export default function Reserve() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.reserve}>
                <h2>рассчитать рассрочку</h2>
                <div className={styles.input__container}>
                    <p>сумма задатка</p>
                    <InputCosts />
                </div>
                <p className={styles.description}>
                    После внесения задатка квартира будет зарезервирована за
                    вами в течение 14 дней после полной оплаты и подписания
                    договора. После оплаты наш менеджер свяжется с вами.
                </p>

                <FromButton color={"bgOrangeVisit"}>
                    выбрать планировку <br /> и записаься на визит
                </FromButton>
            </div>
            <div className={styles.fullPayment}>
                <h2>полная оплата</h2>
                <p className={styles.description}>
                    Свяжитесь с нами, чтобы узнать детали покупки.
                </p>
                <FromButton color={"tOrangeVisit"}>
                    выбрать планировку <br /> и записаься на визит
                </FromButton>
            </div>
        </div>
    );
}

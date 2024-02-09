import styles from "./greenBanner.module.scss";
import FromButton from "../FormButton/FromButton";

export default function GreenBanner({ title, subTitle, buttonText, img }) {
    return (
        <div className={styles.wrapper}>
            {img && img}
            <div className={styles.title}>
                <h1>{title}</h1>
                {subTitle && <p className={styles.subtitle}>{subTitle}</p>}
            </div>
            {buttonText !== undefined && <FromButton>{buttonText}</FromButton>}
            {!buttonText && (
                <div className={styles.article}>
                    <p> Узнайте прямо сейчас. прочитав нашу статью </p>
                </div>
            )}
        </div>
    );
}

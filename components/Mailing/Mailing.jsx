import cn from "classnames";
import FromButton from "../FormButton/FromButton";
import styles from "./mailing.module.scss";
import Mail from "@/assets/image/mail.svg";
import Check from "@/assets/image/check.svg";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function Mailing({ large, name }) {
    const { mob, padding } = useMediaQueryContext();
    const mailingItems = [
        { title: "Акции, скидки и спецпредложения" },
        { title: "Новые фотографии со строительства и аэрооблёты" },
        { title: "Обновления цен от отдела продаж" },
        { title: "Обновления документов в реестрах" },
    ];
    return (
        <div
            className={cn(
                styles.wrapper,
                styles[large === true && "wrapper_large"]
            )}
        >
            {!large ? (
                <h2>УЗНАВАЙТЕ О НОВИНКАХ ПЕРВЫМИ</h2>
            ) : (
                <>
                    <h2>
                        САМЫЕ ВАЖНЫЕ ОБНОВЛЕНИЯ &nbsp;
                        <br />
                        <br />
                        <span>
                            {!name ? "НАЗВАНИЕ ЖИЛОГО КОМПЛЕКСА" : name}
                        </span>
                    </h2>
                    <div className={styles.privileges}>
                        {mailingItems.map((item) => (
                            <div>
                                <Check />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <form action="post">
                <input type="email" placeholder="Введите ваш E-mail" />
                <FromButton color={"tOrange"}>
                    подписаться на рассылку
                </FromButton>
            </form>
            <a className={styles.link}>
                <Mail />
                <p>ЕЖЕДНЕВНОЕ ОБНОВЛЕНИЕ В НАШЕМ КАНАЛЕ</p>
            </a>
        </div>
    );
}

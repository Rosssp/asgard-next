import Image from "next/image";
import styles from "./developersCard.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";

export default function DevelopersCard({
    img,
    color,
    title,
    workDone,
    wip,
    object,
    slug,
}) {
    const router = useRouter();
    const handleClickObject = (e) => {
        e.preventDefault();
        router.push(`${slug}`);
    };
    function formatHouses(count) {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits > 10 && lastTwoDigits < 20) {
            return `${count} домов`;
        } else if (lastDigit === 1) {
            return `${count} дом`;
        } else if (lastDigit > 1 && lastDigit < 5) {
            return `${count} дома`;
        } else {
            return `${count} домов`;
        }
    }

    const wipFormated = `${formatHouses(wip)} в процессе`;
    const workDoneFormated = `${formatHouses(workDone)} сдано`;

    return (
        <div
            onClick={handleClickObject}
            className={cn(styles.wrapper, styles[object && "object"])}
            style={{
                backgroundColor: `${color}`,
                color: `${color !== "white" ? "white" : "black"}`,
            }}
        >
            <div className={styles.container}>
                {object ? (
                    <>
                        <div className={styles.left}>
                            <h3
                                className={styles.title}
                                style={{
                                    color: `${color !== "white" && "white"}`,
                                }}
                            >
                                {title}
                            </h3>
                            <div className={styles.subTitle}>
                                {/* <p>{workDone} дома сдано</p> */}
                                <p>{workDoneFormated}</p>
                                <p>{wipFormated}</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            {img}
                            {/* <Image width={100} height={100} src={img} alt="" /> */}
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.image}>
                            <Image width={100} height={100} src={img} alt="" />
                        </div>
                        <h3
                            className={styles.title}
                            style={{
                                color: `${color !== "white" && "white"}`,
                            }}
                        >
                            {title}
                        </h3>
                        <div className={styles.subTitle}>
                            <p>{workDoneFormated}</p>
                            <p>{wipFormated}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

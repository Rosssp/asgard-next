import Image from "next/image";
import styles from "./newsObjectCard.module.scss";
import OrangeTitle from "@/components/UI/OrangeTitle/OrangeTitle";
import Link from "next/link";

export default function NewsObjectCard({ date, title, descr, img, link }) {
    return (
        <Link href={link} className={styles.wrapper}>
            <div className={styles.left}>
                <OrangeTitle>{date}</OrangeTitle>
                <h2>{title}</h2>
                <p className={styles.descr}>{descr}</p>
                {/* <ul> */}
                {/* {descr?.map((item) => (
                        <li>
                            <p>{item}</p>
                        </li>
                    ))} */}
                {/* </ul> */}
            </div>
            <div className={styles.right}>
                <Image width={100} height={100} src={img} alt={img} />
                {/* {img?.slice(0, 2)?.map((item) => (
                    <Image src={item} alt={img} />
                ))}
                {img?.length > 2 && (
                    <div className={styles.other__images}>
                        <p>{`+${img?.length - 2}`}</p>
                    </div>
                )} */}
            </div>
        </Link>
    );
}

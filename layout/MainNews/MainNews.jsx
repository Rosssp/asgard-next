import cn from "classnames";
import styles from "./mainNews.module.scss";
import NewsCard from "@/components/NewsCard/NewsCard";

export default function MainNews({ data }) {
    return (
        <div className={cn(styles.wrapper, "layout__padding")}>
            <h4 className={styles.title}>новости недвижимости</h4>
            <div>
                {data.map((item) => (
                    <NewsCard
                        title={item?.title}
                        descr={item?.description}
                        date={item?.item_date}
                        slug={item?.slug}
                        img={item?.image}
                    />
                ))}
            </div>
        </div>
    );
}

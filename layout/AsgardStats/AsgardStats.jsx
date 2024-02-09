import AsgardStatsCard from "../../components/AsgardStatsCard/AsgardStatsCard";
import styles from "./asgardStats.module.scss";

export default function AsgardStats({ data }) {
    return (
        <div className={styles.wrapper}>
            <h2>asgard статистика</h2>
            <div className={styles.body}>
                {data?.map((item) => (
                    <AsgardStatsCard
                        city={item?.title}
                        business={item?.business}
                        comfort={item?.comfort}
                        economy={item?.economy}
                        premium={item?.premium}
                    />
                ))}
            </div>
        </div>
    );
}

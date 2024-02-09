import CatalogCard from "@/components/CatalogCard/CatalogCard";
import styles from "./catalogCards.module.scss";
import cn from "classnames";
import Mailing from "@/components/Mailing/Mailing";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function CatalogCards({
    CatalogCardData,
    mailing,
    catalogLayout,
}) {
    const { mob, padding } = useMediaQueryContext();
    return (
        <div className={cn("layout__padding", styles.catalog)}>
            {CatalogCardData.map((item) => (
                <CatalogCard
                    large={item?.large}
                    catalogLayout={catalogLayout}
                    img={item?.img}
                    repair={item?.repair}
                    title={item?.title}
                    subTitle={item?.subTitle}
                    onlyStock={item?.onlyStock}
                    stockFrom={item?.stockFrom}
                    stockTo={item?.stockTo}
                    price={item?.price}
                    buildings={item?.buildings}
                    seaDistance={item?.seaDistance}
                    metroDistance={item?.metroDistance}
                    developer={item?.developer}
                />
            ))}
            {!padding && <>{mailing && <Mailing />}</>}
        </div>
    );
}

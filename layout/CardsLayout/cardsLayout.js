import React from "react";
import styles from "./cardsLayout.module.scss";
import cn from "classnames";
import OrangeTitle from "@/components/UI/OrangeTitle/OrangeTitle";
import Spacer from "@/components/Spacer/Spacer";
import SliderCard from "@/components/CatalogCard/sliderCard";
import RecomendationCard from "@/components/CatalogCard/recomendationCard";
import CatalogCard from "@/components/CatalogCard/CatalogCard";
import Mailing from "@/components/Mailing/Mailing";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function CardsLayout({
    data,
    title,
    count,
    mailing,
    onlyStock,
    statusBuilding,
    recomended,
}) {
    // data ? data : "";
    const { mob, padding } = useMediaQueryContext();
    return (
        <>
            <div className={styles.title}>
                <h4 className="layout__padding">{title}</h4>
                {!statusBuilding ? (
                    <>
                        <OrangeTitle after={true}>{count || 4}</OrangeTitle>
                    </>
                ) : (
                    <>
                        <OrangeTitle after={true}>
                            {data[0]?.cards?.length}
                        </OrangeTitle>
                        <p>
                            обновлено <span> {data[0]?.updated} </span>
                        </p>
                    </>
                )}
            </div>
            <Spacer size={19} />
            <div className={styles.catalog__cards}>
                <div className={cn("layout__padding", styles.catalog)}>
                    {data?.map((item) => (
                        <>
                            {!recomended ? (
                                <CatalogCard
                                    img={item?.image_main}
                                    title={item?.title}
                                    subTitle={item?.subTitle}
                                    tags={item?.tags || item?.special}
                                    slug={item?.slug}
                                    price={item?.min_price}
                                    seaDistance={item?.from_sea}
                                    metroDistance={item?.from_subway}
                                    large={item.show_big_card}
                                    // catalogLayout={catalogLayout}
                                    // repair={item?.repair}
                                    onlyStock={onlyStock}
                                    stockFrom={item?.special_from}
                                    stockTo={item?.special_to}
                                    // buildings={item?.buildings}
                                    // seaDistance={item?.seaDistance}
                                    // metroDistance={item?.metroDistance}
                                    // developer={item?.developer}
                                />
                            ) : (
                                <RecomendationCard
                                    contribution={item?.contribution}
                                    descr={item?.descr}
                                    from={item?.from}
                                    to={item?.to}
                                    img={item?.img}
                                    subTitle={item?.subTitle}
                                    title={item?.title}
                                />
                            )}
                        </>
                    ))}
                    {!padding && <>{mailing && <Mailing />}</>}

                    {/* {data[0]?.cards ? (
                        <>
                            {data[0]?.cards?.map((item) => (
                                <SliderCard
                                    geolocation={item?.geolocation}
                                    img={item?.img}
                                    subtitle={item?.subTitle}
                                    title={item?.title}
                                    already={item?.already}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {data?.map((item) => (
                                <RecomendationCard
                                    contribution={item?.contribution}
                                    descr={item?.descr}
                                    from={item?.from}
                                    to={item?.to}
                                    img={item?.img}
                                    subTitle={item?.subTitle}
                                    title={item?.title}
                                />
                            ))}
                        </>
                    )} */}
                </div>
            </div>
        </>
    );
}

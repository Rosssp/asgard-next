import React from "react";
import Mailing from "@/components/Mailing/Mailing";
import cn from "classnames";
import FliterButton from "@/components/UI/FliterButton/fliterButton";
import styles from "./monitoring.module.scss";

import Slider from "@/components/Slider/Slider";
import Spacer from "@/components/Spacer/Spacer";
import fetchersService from "@/services/fetchers.service";
import Head from "next/head";
import map from "@/assets/image/map.png";
import Image from "next/image";

export default function Monitoring({ data, slug }) {
    const [activeIndex, setActiveIndex] = React.useState(false);
    const handleDateClick = (index) => {
        setActiveIndex(index);
    };
    console.log(data[0]);
    const fakeSliderData = [
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
        {
            img: "https://www.idesignarch.com/wp-content/uploads/Attractive-Prefab-Home-Toby-Long_3.jpg",
        },
    ];

    const fakeData = ["18 дом", "18 дом", "18 дом", "18 дом", "ещё 10"];
    return (
        <>
            <Head>
                <title>{slug} — Мониторинг — Asgard</title>
            </Head>
            <div className={cn("layout__padding", styles.wrapper)}>
                <h1 className="catalog__title">
                    {slug} : МОНИТОРИНГ СТРОИТЕЛЬСТВА
                </h1>
                <div className={styles.filter__buttons}>
                    {/* {data[0]?.house_number?.map((item, index) => ( */}
                    <FliterButton
                    // onClick={() => handleDateClick(index)}
                    // type={index === activeIndex ? "orange" : ""}
                    >
                        <p>{data[0]?.house_number} дом</p>
                    </FliterButton>
                    {/* ))} */}
                </div>
                <p>{data[0]?.status?.title}</p>

                <div className={styles.content}>
                    <Slider
                        page={false}
                        date={true}
                        data={data[0]?.history}
                        // img={fakeSliderData}
                        thumb={true}
                    />
                </div>
                <Spacer size={92} />
                <Mailing large={true} />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    const data = await fetchersService
        .getFlats("/flats/monitoring", slug)
        .then(({ data }) => {
            return data?.data;
        });

    return { props: { data, slug } };
}

import React from "react";
import styles from "./newsObject.module.scss";
import cn from "classnames";
import NewsObjectCard from "@/components/NewsObjectCard/newsObjectCard";
import FliterDropDown from "@/components/UI/FliterButton/fliterButton";
import Pagination from "@/components/Pagination/pagination";
import Spacer from "@/components/Spacer/Spacer";
import tempCard from "@/assets/image/tempCard.png";
import fetchersService from "@/services/fetchers.service";
import Head from "next/head";

export default function NewsObjectPage({ data, slug }) {
    const filterItems = [
        { id: 1, text: "показать все" },
        { id: 2, text: "цены" },
        { id: 3, text: "дата введения" },
        { id: 4, text: "документы" },
        { id: 5, text: "МОНИТОРИНГ СТРОИТЕЛЬСТВА" },
    ];
    const mockNews = [
        {
            title: "title",
            descr: [
                "descr",
                "Цена за м2:25 500 — 29 300 грн (была 24 900 — 28 300 грн)",
                "Курс доллара: 38.85 грн",
                "1-комнатные: от 1.08 млн грн (была от 1.05 млн грн)",
                "Курс доллара: 38.85 грн",
                "1-комнатные: от 1.08 млн грн (была от 1.05 млн грн)",
                "Курс доллара: 38.85 грн",
                "1-комнатные: от 1.08 млн грн (была от 1.05 млн грн)",
            ],
            date: "15 мар 2023",
            img: [tempCard, tempCard, tempCard, tempCard],
        },
        {
            title: "title",
            descr: [
                "descr",
                "Цена за м2:25 500 — 29 300 грн (была 24 900 — 28 300 грн)",
            ],
            date: "15 мар 2023",
            img: [tempCard, tempCard],
        },
        {
            title: "title",
            descr: [
                "descr",
                "Цена за м2:25 500 — 29 300 грн (была 24 900 — 28 300 грн)",
            ],
            date: "15 мар 2023",
            img: [tempCard],
        },
        {
            title: "title",
            descr: [
                "descr",
                "Цена за м2:25 500 — 29 300 грн (была 24 900 — 28 300 грн)",
            ],
            date: "15 мар 2023",
            img: [tempCard],
        },
        {
            title: "title",
            descr: [
                "descr",
                "Цена за м2:25 500 — 29 300 грн (была 24 900 — 28 300 грн)",
                "Курс доллара: 38.85 грн",
                "1-комнатные: от 1.08 млн грн (была от 1.05 млн грн)",
            ],
            date: "15 мар 2023",
            img: [tempCard],
        },
    ];
    const [active, setActive] = React.useState(false);
    const handleClick = (id) => {
        if (active === id) {
        } else {
            setActive(id);
        }
    };
    return (
        <>
            <Head>
                <title>{slug} — Новости — Asgard</title>
            </Head>
            <div className={styles.wrapper}>
                <h1 className="catalog__title">{slug} : ЛЕНТА НОВОСТЕЙ</h1>
                <div className={cn(styles.filter__layout, "layout__padding")}>
                    <div className={cn(styles.filter)}>
                        {filterItems.map((item) => (
                            <FliterDropDown
                                onClick={() => handleClick(item.id)}
                                type={active === item.id && "orange"}
                            >
                                <p>{item.text}</p>
                            </FliterDropDown>
                        ))}
                    </div>
                </div>
                <div className="layout__padding">
                    {data.map((item) => (
                        <NewsObjectCard
                            link={item?.slug}
                            date={item?.date}
                            title={item?.title}
                            descr={item?.description}
                            img={item?.image}
                        />
                    ))}
                </div>
                <Spacer size={46} />
                <Pagination />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    const data = await fetchersService
        .getFlats("/flats/news", slug)
        .then(({ data }) => {
            return data?.data;
        });

    return { props: { data, slug } };
}

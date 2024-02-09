import Head from "next/head";
import styles from "./main.module.scss";
import cn from "classnames";
import DevelopersCard from "@/components/DevelopersCard/DevelopersCard";
import GreenBanner from "@/components/GreenBanner/greenBanner";
import Mailing from "@/components/Mailing/Mailing";
import Spacer from "@/components/Spacer/Spacer";
import AsgardStats from "@/layout/AsgardStats/AsgardStats";
import CatalogCards from "@/layout/CatalogCards/CatalogCards";
import MainNews from "@/layout/MainNews/MainNews";
import BuildingGreen from "@/assets/image/buildingGreen.svg";
import OrangeTitle from "@/components/UI/OrangeTitle/OrangeTitle";
import { mockCards, mockStockCard } from "./mockCards";
import { useMediaQueryContext } from "@/contexts/mediaQuery";
import fetchersService from "@/services/fetchers.service";
import CardsLayout from "@/layout/CardsLayout/cardsLayout";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({
    objects,
    developers,
    analytics,
    news,
    special,
}) {
    const { mob, padding } = useMediaQueryContext();
    console.log("objects?.townhouses?.count", objects?.townhouses?.count);
    return (
        <>
            <Head>
                <title>Asgard</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GreenBanner
                title={"ПОЧЕМУ СТОИТ ПРИОБРЕСТИ НЕДВИЖИМОСТЬ ИМЕННО В ТУРЦИИ?"}
            />
            <Spacer size={70} />
            <CardsLayout
                title={"Каталог недвижимости"}
                count={objects?.flats?.count}
                data={objects?.flats?.items}
            />
            <Spacer size={70} />
            <CardsLayout
                title={"Танхаусы"}
                count={objects?.townhouses?.count}
                data={objects?.townhouses?.items}
            />
            <Spacer size={70} />
            <div className={styles.title}>
                <h4 className="layout__padding">коттеджи</h4>
                <OrangeTitle after={true}>{mockCards?.length}</OrangeTitle>
            </div>
            <Spacer size={19} />
            <div className={styles.catalog__cards}>
                <CatalogCards CatalogCardData={mockCards?.slice(0, 4)} />
            </div>

            <Spacer size={70} />
            <div className={styles.title}>
                <h4 className="layout__padding">виллы</h4>
                <OrangeTitle after={true}>{mockCards?.length}</OrangeTitle>
            </div>
            <Spacer size={19} />
            <div className={styles.catalog__cards}>
                <CatalogCards CatalogCardData={mockCards} />
            </div>

            <Spacer size={70} />
            <div className={styles.title}>
                <h4 className="layout__padding">коммерческая недвижимость</h4>
                <OrangeTitle after={true}>{mockCards?.length}</OrangeTitle>
            </div>
            <Spacer size={19} />
            <div className={styles.catalog__cards}>
                <CatalogCards CatalogCardData={mockCards?.slice(0, 4)} />
            </div>

            <Spacer size={70} />
            <div className={styles.title}>
                <h4 className="layout__padding">дуплексы</h4>
                <OrangeTitle after={true}>{mockCards?.length}</OrangeTitle>
            </div>
            <Spacer size={19} />
            <div className={styles.catalog__cards}>
                <CatalogCards CatalogCardData={mockCards?.slice(0, 4)} />
            </div>
            <Spacer size={70} />
            <div className={styles.title}>
                <h4 className="layout__padding">застройщики city</h4>
                <OrangeTitle after={true}>{developers?.count}</OrangeTitle>
            </div>
            <Spacer size={19} />
            <div className={cn("layout__padding", styles.developers)}>
                {developers?.items?.map((item) => (
                    <DevelopersCard
                        title={item?.title}
                        color={item?.color}
                        img={item?.logo}
                        workDone={item?.houses_built}
                        wip={item?.houses_in_process}
                        slug={item?.slug}
                    />
                ))}
            </div>
            <Spacer size={70} />
            <AsgardStats data={analytics} />
            <Spacer size={70} />
            <MainNews data={news} />
            <Spacer size={70} />
            <GreenBanner
                img={<BuildingGreen />}
                title={"ДОБАВИТЬ ОБЪЯВЛЕНИЕ?"}
                subTitle={"Свяжитесь с нами, чтобы добавить свой объект"}
                buttonText={"заполнить форму"}
            />
            <Spacer size={70} />
            <Spacer size={70} />
            <CardsLayout
                title={"Акции и спецпредложения"}
                count={special?.count}
                data={special?.items}
                mailing={true}
                onlyStock={true}
            />
            {/* <div className={styles.title}>
                <h4 className="layout__padding">Акции и спецпредложения</h4>
                <OrangeTitle after={true}>{mockCards?.length}</OrangeTitle>
            </div>
            <Spacer size={19} />
            <div className={styles.catalog__cards}>
                <CatalogCards mailing={true} CatalogCardData={mockStockCard} />
            </div>*/}
            <Spacer size={32} />
            {padding && <Mailing />}
        </>
    );
}

export async function getServerSideProps({ params }) {
    const objects = await fetchersService.getAll("/").then(({ data }) => {
        return data?.data?.objects;
    });
    const developers = await fetchersService.getAll("/").then(({ data }) => {
        return data?.data?.developers;
    });
    const analytics = await fetchersService.getAll("/").then(({ data }) => {
        return data?.data?.analytics;
    });
    const news = await fetchersService.getAll("/").then(({ data }) => {
        return data?.data?.news;
    });
    const special = await fetchersService.getAll("/").then(({ data }) => {
        return data?.data?.special;
    });
    return {
        props: {
            objects,
            developers,
            analytics,
            news,
            special,
        },
    };
}
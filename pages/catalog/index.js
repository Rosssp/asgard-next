import CatalogCards from "@/layout/CatalogCards/CatalogCards";
import styles from "../main.module.scss";
import SortingFiltration from "@/layout/SortingFiltration/sortingFiltration";
import Pagination from "@/components/Pagination/pagination";
import GreenBanner from "@/components/GreenBanner/greenBanner";
import BuildingGreen from "@/assets/image/buildingGreen.svg";
import Spacer from "@/components/Spacer/Spacer";
import { mockCards } from "../mockCards";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Catalog() {
    const mob580 = useMediaQuery(540);
    return (
        <>
            <h1 className={styles.title}></h1>
            <div className="layout__padding">
                <SortingFiltration />
            </div>
            <Spacer size={27} />
            <div className={styles.catalog}>
                <CatalogCards
                    catalogLayout={true}
                    CatalogCardData={
                        !mob580 ? mockCards : mockCards?.slice(0, 3)
                    }
                />
            </div>
            <Spacer size={62} />
            <Pagination />
            <Spacer size={50} />
            <GreenBanner
                img={<BuildingGreen />}
                title={"ДОБАВИТЬ ОБЪЯВЛЕНИЕ?"}
                subTitle={"Свяжитесь с нами, чтобы добавить свой объект"}
                buttonText={"заполнить форму"}
            />
        </>
    );
}

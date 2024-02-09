import FliterButton from "@/components/UI/FliterButton/fliterButton";
import styles from "./sortingFiltration.module.scss";
import DownArrow from "@/assets/image/downArrow.svg";
import SortingLeft from "@/assets/image/sortingLeft.svg";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function SortingFiltration() {
    const { mob, padding } = useMediaQueryContext();

    return (
        <div className={styles.wrapper}>
            <div>
                {!mob ? <h5>Сортировка</h5> : ""}
                <FliterButton type={"default_orange"}>
                    <p>По умолчанию</p> <SortingLeft />
                </FliterButton>
            </div>
            <div>
                <FliterButton type={"default"}>
                    <p>фильтры</p> <DownArrow />
                </FliterButton>
                <FliterButton type={"default"}>
                    <p>застройщики</p> <DownArrow />
                </FliterButton>
                <FliterButton type={"default"}>
                    <p>цена</p> <DownArrow />
                </FliterButton>
            </div>
        </div>
    );
}

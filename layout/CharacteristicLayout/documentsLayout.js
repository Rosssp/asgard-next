import React from "react";
import OrangeTitle from "@/components/UI/OrangeTitle/OrangeTitle";
import styles from "./characteristicLayout.module.scss";
import cn from "classnames";
import CharacteristicBlock from "@/components/CharacteristicBlock/characteristicBlock";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function DocumentsLayout({ documents }) {
    const { mob, padding } = useMediaQueryContext();
    // const [show, setShow] = React.useState(false);
    // React.useEffect(() => {
    //     !mob ? setShow(true) : setShow(false);
    // }, [mob]);

    return (
        <div className={cn("layout__padding")}>
            <div className={styles.title}>
                <h4>документы</h4>
                <OrangeTitle after={true}>
                    {documents[0]?.docs?.length}
                </OrangeTitle>
                <p className={styles.information}>
                    Информация актуальна по состоянию на
                    <span> {documents[0]?.date}</span>
                </p>
            </div>
            <div className={styles.characheristic}>
                {documents[0]?.docs?.map((item) => (
                    <CharacteristicBlock
                        title={item.title}
                        subTitle={item.descr}
                    />
                ))}
            </div>
        </div>
    );
}

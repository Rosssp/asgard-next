import React from "react";
import styles from "./characteristicLayout.module.scss";
import FromButton from "@/components/FormButton/FromButton";
import cn from "classnames";
import CharacteristicBlock from "@/components/CharacteristicBlock/characteristicBlock";
import Spacer from "@/components/Spacer/Spacer";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function CharacteristicLayout({ characteristic }) {
    const { mob, padding } = useMediaQueryContext();
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        !mob ? setShow(true) : setShow(false);
    }, [mob]);

    console.log("characteristic ^_^", characteristic);

    return (
        <>
            <div className={cn("layout__padding")}>
                <h4>характеристика проекта</h4>
                <div className={styles.characheristic}>
                    {Object.entries(characteristic)
                        ?.slice(mob && 0, show ? characteristic.length : 4)
                        ?.map(([key, value]) => (
                            <CharacteristicBlock
                                title={key}
                                subTitle={value.title}
                            />
                        ))}
                </div>
                {mob && (
                    <>
                        <Spacer size={33} />
                        <div className={styles.center}>
                            <FromButton
                                onClick={() => setShow((prev) => !prev)}
                                color={"bgOrange"}
                            >
                                <p> {show ? "Скрыть" : "Смотреть все"}</p>
                            </FromButton>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

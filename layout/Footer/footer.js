import cn from "classnames";
import styles from "./footer.module.scss";
import NavLinks from "../Header/navLinks";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import pimax from "@/assets/image/pimax.png";
import Link from "next/link";
import HeaderBottom from "../HeaderBottom/headerBottom";
import { useMediaQueryContext } from "@/contexts/mediaQuery";
import Spacer from "@/components/Spacer/Spacer";

export default function Footer() {
    const { mob, padding } = useMediaQueryContext();

    return (
        <>
            {mob && <Spacer size={99} />}
            <footer className={cn("layout__padding", styles.wrapper)}>
                <div className={styles.container}>
                    <Link href={"/"}>
                        <Image src={logo} alt={logo} />
                    </Link>
                    <div className={styles.left}>
                        <NavLinks />
                        <div className={styles.about}>
                            <div>
                                <a>Ограничение ответственности</a>
                                <a>Политика конфиденциальности</a>
                            </div>
                            <div>
                                <p>© 2001-2023, ASGARD REAL ESTATE</p>
                            </div>
                        </div>
                    </div>
                    <Link
                        target="_blank"
                        href={"https://pimax.agency/"}
                        className={styles.right}
                    >
                        <Image src={pimax} alt={pimax} />
                        <p>РАЗРАБОТКА САЙТА</p>
                    </Link>
                </div>
            </footer>
            {mob && (
                <>
                    <Spacer size={27} />
                    <HeaderBottom />
                </>
            )}
        </>
    );
}

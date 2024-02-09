import React from "react";
import cn from "classnames";
import styles from "./header.module.scss";
import NavLinks from "./navLinks";

import Image from "next/image";
import logo from "@/assets/image/logo.png";
import logoMobile from "@/assets/image/logoMobile.png";
import russia from "@/assets/image/russia.png";
import HeaderBottom from "../HeaderBottom/headerBottom";
import Spacer from "@/components/Spacer/Spacer";
import Link from "next/link";
import { useMediaQueryContext } from "@/contexts/mediaQuery";

export default function Header() {
    const userItems = ["войти", "регистрация"];
    const { mob, padding } = useMediaQueryContext();
    return (
        <>
            <header
                className={cn(styles.wrapper, padding && "layout__padding")}
            >
                <div className={styles.top}>
                    <Link href={"/"} className={styles.logo}>
                        {!mob ? (
                            <Image src={logo} alt={logo} />
                        ) : (
                            <Image src={logoMobile} alt={logo} />
                        )}
                    </Link>
                    {!mob && <NavLinks className={"padding__left"} />}
                    <div className={styles.right}>
                        <ul
                            className={cn(styles.user__items, "padding__right")}
                        >
                            <li className={styles.language}>
                                {!mob && <Image src={russia} alt={russia} />}
                                <p>rus</p>
                            </li>
                            {userItems.slice(0, !mob ? 2 : 1)?.map((item) => (
                                <li>
                                    <a href="">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {!mob && <HeaderBottom />}
            </header>
            <Spacer size={21} />
        </>
    );
}

import React from "react";
import styles from "./header.module.scss";
import cn from "classnames";

export default function NavLinks({ className }) {
    const [navItems, setNavItem] = React.useState([
        { item: "о нас" },
        { item: "акции" },
        { item: "новости" },
        { item: "контакты" },
    ]);
    return (
        <ul className={cn(styles.nav__items, className)}>
            {navItems?.map((item) => (
                <li>
                    <a href="">{item?.item}</a>
                </li>
            ))}
        </ul>
    );
}

import Search from "@/components/UI/Search/Search";
import Footer from "@/layout/Footer/footer";
import Header from "@/layout/Header/header";
import ObjectPagination from "@/components/ObjectPagination/objectPagination";
import useMediaQuery from "@/hooks/useMediaQuery";
import MediaQueryContext from "@/contexts/mediaQuery";
import "@/styles/index.scss";
import "@/styles/slider.css";
import { useRouter } from "next/router";
import Slider from "@/components/Slider/Slider";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const mob = useMediaQuery(768);
    const padding = useMediaQuery(1210);
    return (
        <>
            <MediaQueryContext.Provider value={{ mob, padding }}>
                <Header />
                <Search />
                {router.pathname === "/" || router.pathname === "/catalog" ? (
                    ""
                ) : (
                    <ObjectPagination />
                )}
                {/* {router.pathname === "/" && <Slider />} */}
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </MediaQueryContext.Provider>
        </>
    );
}

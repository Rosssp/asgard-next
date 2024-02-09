import Accordion from "@/components/Accordion/accordion";
import fetchersService from "@/services/fetchers.service";
import Head from "next/head";
import { router } from "next/router";

export default function DocumentsPage({ data, slug }) {
    console.log("docs", data);
    const mockDocuments = [
        {
            title: "документы на земельный участок",
            descr: "<p>После внесения задатка квартира будет зарезервирована за вами в течение 14 дней после полной оплаты и подписания договора. После оплаты наш менеджер свяжется с вами. После внесения задатка квартира будет зарезервирована за вами в течение 14 дней после полной оплаты и подписания договора. После оплаты наш менеджер свяжется с вами. После внесения задатка квартира будет зарезервирована за вами в течение 14 дней после полной оплаты и подписания договора. После оплаты наш менеджер свяжется с вами.</p><a>смотреть документ</a><p>После внесения задатка квартира будет зарезервирована за вами в течение 14 дней после полной оплаты и подписания договора. После оплаты наш менеджер свяжется с вами. После внесения задатка квартира будет зарезервирована за вами в течение 14 дней после полной оплаты и подписания договора. После оплаты наш менеджер свяжется с вами. После внесения задатка квартира будет зарезервирована за вами в течение 14 дней после полной оплаты и подписания договора. После оплаты наш менеджер свяжется с вами.</p><a>смотреть документ</a>",
        },
        {
            title: "документы на строительство",
            descr: "<p>Описание</p><a>ссылка</a>",
        },
        {
            title: "документы на строительство",
            descr: "<p>Описание</p><a>ссылка</a>",
        },
        {
            title: "документы на строительство",
            descr: "<p>Описание</p><a>ссылка</a>",
        },
        {
            title: "документы на строительство",
            descr: "<p>Описание</p><a>ссылка</a>",
        },
        {
            title: "документы на строительство",
            descr: "<p>Описание</p><a>ссылка</a>",
        },
        {
            title: "документы на строительство",
            descr: "<p>Описание</p><a>ссылка</a>",
        },
    ];
    return (
        <>
            <Head>
                <title>{slug} — Документы — Asgard</title>
            </Head>
            <h1 className="catalog__title">{slug} : ДОКУМЕНТЫ</h1>
            {data.map((item) => (
                <Accordion
                    title={item?.title}
                    desc={item?.descr}
                    file={item?.files}
                />
            ))}
        </>
    );
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    const data = await fetchersService
        .getFlats("/flats/docs", slug)
        .then(({ data }) => {
            return data?.data;
        });
    return { props: { data, slug } };
}

// export async function getServerSideProps({ params }) {
//     // const { slug } = Router.query;
//     // const { slug } = context.params;
//     const docs = await fetchersService
//         .get(`/flats/${slug}/docs`, params.slug)
//         .then(({ data }) => {
//             return data;
//         });

//     return {
//         props: {
//             docs,
//         },
//     };
// }

// export async function getStaticPaths() {
//     const res = await fetchersService.getAll("/flats/docs");
//     console.log("----------------");
//     console.log(res);
//     console.log("----------------");
//     const paths = res.data.data.map((flat) => ({
//         params: { slug: flat.slug },
//     }));
//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     const data = await fetchersService
//         .getFlats("/flats/docs", params.slug)
//         .then(({ data }) => {
//             return data?.data;
//         });

//     return { props: { data } };
// }

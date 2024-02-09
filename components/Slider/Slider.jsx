import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

import AngleDown from "@/assets/image/angleDown.svg";
import Heart from "@/assets/image/heart.svg";
import Share from "@/assets/image/share.svg";
import Comparison from "@/assets/image/comparison.svg";

export default function Slider({ img, thumb, date, buttonsTop, data, page }) {
    console.log("data", data);
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [activeIndex, setActiveIndex] = React.useState(false);

    const handleDateClick = (index) => {
        setActiveIndex(index);
    };

    // const dates = ["август 2022", "сентябрь 2022", "октябрь 2022"];

    const [selectedButton, setSelectedButton] = React.useState(null);
    const [selectedPhotos, setSelectedPhotos] = React.useState([]);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
        setSelectedPhotos(data?.[buttonIndex].images);
        setActiveIndex(buttonIndex);
    };
    React.useEffect(() => {
        handleButtonClick(0);
    }, []);

    // const renderButton = (month, year) => {
    //     const date = new Date(year, month - 1);
    //     const monthName = date.toLocaleString("en-US", { month: "long" });
    // };

    function getMonthName(monthNumber, locale = "ru-RU") {
        const monthDate = new Date();
        monthDate.setMonth(monthNumber - 1);

        const options = { month: "long" };
        const monthName = monthDate.toLocaleString(locale, options);

        return monthName;
    }

    return (
        <div className="wrapper">
            <Swiper
                spaceBetween={0}
                // navigation={true}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                modules={[Navigation, Thumbs]}
                navigation={{
                    nextEl: `.right`,
                    prevEl: ".left",
                    lockClass: "disabled",
                }}
                className="mySwiper2"
            >
                {page ? (
                    <>
                        {img?.map((item) => (
                            <SwiperSlide>
                                <Image fill src={item?.full_url} />
                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    <>
                        {selectedPhotos?.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    fill
                                    src={photo}
                                    alt={`photo-${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </>
                )}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={"auto"}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
            >
                {page ? (
                    <>
                        {img?.map((item) => (
                            <SwiperSlide>
                                <Image fill src={item?.full_url} />
                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    <>
                        {selectedPhotos?.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    fill
                                    src={photo}
                                    alt={`photo-${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </>
                )}
            </Swiper>
            {date && (
                <div className="date__container">
                    <div className="left svgContainer">
                        <AngleDown />
                    </div>
                    <div className="dates">
                        {data?.map((buttonData, index) => (
                            <p
                                key={index}
                                onClick={() => handleButtonClick(index)}
                                className={
                                    index === activeIndex ? "active" : ""
                                }
                            >
                                {getMonthName(buttonData?.month)}
                                &nbsp;
                                {/* {buttonData?.month} */}
                                {buttonData?.year}
                            </p>
                        ))}
                        {/* {dates.map((date, index) => (
                            <p
                                key={index}
                                className={
                                    index === activeIndex ? "active" : ""
                                }
                                onClick={() => handleDateClick(index)}
                            >
                                {date}
                            </p>
                        ))} */}
                    </div>
                    <div className="right svgContainer">
                        <AngleDown />
                    </div>
                </div>
            )}
            {buttonsTop && (
                <div className="topButtons ">
                    <div className="left__side ">
                        <div className="social svgContainer">
                            <Heart />
                        </div>
                        <div className="social svgContainer">
                            <Comparison />
                        </div>
                        <div className="social svgContainer">
                            <Share />
                        </div>
                    </div>
                    <div className="right__side">
                        <div className="left svgContainer">
                            <AngleDown />
                        </div>
                        <div className="right svgContainer">
                            <AngleDown />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

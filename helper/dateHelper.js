import React from "react";

const DateHelper = ({ dateToFormat }) => {
    const getFormattedDate = (date) => {
        return date.split("-").reverse().join(".");
    };

    const formattedDate = getFormattedDate(dateToFormat);

    return <>{formattedDate}</>;
};

export default DateHelper;

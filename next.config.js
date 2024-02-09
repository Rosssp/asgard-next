/** @type {import('next').NextConfig} */

const withSvgr = require("next-svgr");
module.exports = withSvgr({
    reactStrictMode: true,
    images: {
        domains: ["abali.ru", "almode.ru", "www.idesignarch.com", "asgard.pimax.dev", "via.placeholder.com"],
    },
});

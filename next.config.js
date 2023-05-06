/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './public/styles/antd-custom.less'), 'utf8'));

const pathToLessFileWithVariables = path.resolve('./public/styles/antd-custom.less');

module.exports = withLess({
    reactStrictMode: true,
    lessLoaderOptions: {
        lessOptions: {
            // modifyVars: {
            //     ...themeVariables,
            // },
        },
        additionalData: (content) => `${content}\n\n@import '${pathToLessFileWithVariables}';`,
    },
});

const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
    experimental: {
        serverActions: true
    }
});

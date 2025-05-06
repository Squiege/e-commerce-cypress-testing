const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        supportFile: false,
        baseUrl: "https://salinaka-ecommerce.web.app",
    },
});

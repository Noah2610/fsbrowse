const path = require("path");

module.exports = {
    webpack(config, _options) {
        config.resolve.alias["/"] = path.join(__dirname, "src");
        config.resolve.alias["C"] = path.join(__dirname, "src/components");
        config.resolve.alias["ENDPOINT"] = path.join(__dirname, "src/endpoint");
        return config;
    },
};

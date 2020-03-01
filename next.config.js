const path = require("path");

module.exports = {
    webpack(config, _options) {
        config.resolve.alias["ENDPOINT$"] = path.join(
            __dirname,
            "src/endpoint"
        );
        config.resolve.alias["FILE-TYPE$"] = path.join(
            __dirname,
            "src/file-type"
        );
        config.resolve.alias["MOCK$"] = path.join(__dirname, "src/mock");

        return config;
    },
};

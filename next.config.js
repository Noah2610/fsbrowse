const path = require("path");

module.exports = {
    webpack(config, _options) {
        config.resolve.alias["ENDPOINT$"] = path.join(
            __dirname,
            "src/endpoint"
        );

        return config;
    },
};

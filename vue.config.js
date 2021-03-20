module.exports = {
    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "ar",
            localeDir: "locales",
            enableInSFC: false,
            chainWebpack: config => {
                config.module
                    .rule("vue")
                    .use("vue-loader")
                    .loader("vue-loader")
                    .tap(options => {
                        options["transformAssetUrls"] = {
                            // [...]
                            "b-embed": ["src", "poster"],
                            source: "src",
                            track: "src"
                        };
                        return options;
                    });

                // adjusting the media rule to include vtt files
                config.module
                    .rule("media")
                    .test(/\.(vtt|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/);
            },
            publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
            pluginOptions: {
                i18n: {
                    locale: "en",
                    fallbackLocale: "ar",
                    localeDir: "locales",
                    enableInSFC: false
                }
            }
        }
    },
    publicPath: "./",
    outputDir: "enab"
};
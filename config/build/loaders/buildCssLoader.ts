import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // Применять модули только для файлов, содержащих `.module.`
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                    importLoaders: 1,
                    sourceMap: isDev,
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: isDev,
                }
            },
        ]
    }
}
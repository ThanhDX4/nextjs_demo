import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
    static async getInitialProps(context) {
        const originalRenderPage = context.renderPage;
        try {
            context.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => <App {...props} />,
                });

            const initialProps = await Document.getInitialProps(context);
            return {
                ...initialProps,
                styles: [initialProps.styles],
            };
        } finally {
            // sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head prefix="og: https://ogp.me/ns#">
                    <link
                        href="/static/images/favicon.ico"
                        rel="icon"
                        sizes="any"
                    />
                    <link
                        href="https://fonts.googleapis.com"
                        rel="preconnect"
                    />
                    <link href="https://fonts.gstatic.com" rel="preconnect" />
                    <link
                        crossOrigin="anonymous"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
                        rel="preload"
                        as="font"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap"
                        rel="preload"
                        as="font"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&family=Zen+Old+Mincho&display=swap"
                        rel="preload"
                        as="font"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap"
                        rel="preload"
                        as="font"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Klee+One&display=swap"
                        rel="preload"
                        as="font"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"
                        rel="preload"
                        as="font"
                    />
                    <meta content="initial-scale=1" name="viewport" />
                    <Script
                        strategy="afterInteractive"
                        type="text/javascript"
                        src={
                            "https://stbtoken.sps-system.com/sbpstoken/com_sbps_system_token.js"
                        }
                    />
                    <Script
                        strategy="afterInteractive"
                        type="text/javascript"
                        src={
                            "https://stbtoken.sps-system.com/sbpstoken/com_sbps_system_tds2infotoken.js"
                        }
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

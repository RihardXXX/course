import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";


// описываем структуру
export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);
    
        return {...initialProps};
      }

    render() {
        return (
            <Html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
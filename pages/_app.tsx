import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (<>
            <head>
              <title>Course Top</title>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            </head>
            <Component {...pageProps} />
          </>
        ); 
}

export default MyApp;

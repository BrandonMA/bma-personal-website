import '../styles/globals.css';
import '../styles/cell.css';
import '../styles/hello.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default MyApp;

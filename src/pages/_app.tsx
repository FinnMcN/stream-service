import type { AppProps } from "next/app";
import "../../styles/global.scss";
import "swiper/scss";

import ThemeProvider from "../utils/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

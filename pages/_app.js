import "../styles/globals.css";
import Layout from "../comps/Layout";
import { Provider } from "../content";
import { TokenProvider } from "../content/token";
// import {createContext} from "react";
// export const cardContent = createContext();
function MyApp({ Component, pageProps }) {
  return (
    // <provder >
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </provder>
    <Provider>
      <TokenProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TokenProvider>
    </Provider>
  );
}

export default MyApp;

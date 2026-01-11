import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Զարմանահրաշ հայ կանայք</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/next-assets/favicon.ico"
        />
        <meta
          property="image"
          content="https://armenianwonderwomen.com/img/logo.svg"
        />
        <meta
          name="keywords"
          content="Զարմանահրաշ, հայ, կանայք, Զարմանահրաշ հայ կանայք, մանկական գիրք, մանկական, գիրք"
        />
        <meta
          name="description"
          content="«Զարմանահրաշ հայ կանայք» ի սկզբանե ստեղծվել է, որպես մանկական գիրք, բայց մեր պատմության մեջ ու մեր շուրջն ապրող զարմանահրաշ կանայք շատ են քան տեղ են գտել գրքում։ Այս կայքում կգտնեք գրքում ներառված կանանց մասին հավելյայլ տեղեկություն ինչպես նաև կծանոթանաք բազում այլ կերպարների հետ։"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

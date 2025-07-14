import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Head from "next/head";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/skeen-metacard.png";
import Blog from "../components/blog";

const BlogHome = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Skeen Blog</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="skincare, dermatology, skincare products, acne, dark spots, hyperpigmentation, eczema, Skin aging, dermatologist, blog, skeen blog"
        />
        <meta
          name="description"
          content="Get expert skincare advice, ingredient deep-dives, and success stories on the Skeen blog. Get tips from skin consultants, learn about custom treatments, and stay updated on the latest in personalized skincare"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://tryskeen.com/blog" property="og:url" />
        <meta content="Priv Health Blog" property="og:title" />
        <meta
          content="Get expert skincare advice, ingredient deep-dives, and success stories on the Skeen blog. Get tips from skin consultants, learn about custom treatments, and stay updated on the latest in personalized skincare"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Skeen logo"
          property="og:image:alt"
        />
        <meta
          content="https://instagram.com/tryskeen/"
          property="og:see_also"
        />
        <meta
          content="https://facebook.com/tryskeen/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryskeen"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryskeen" />
        <meta name="twitter:creator" content="@tryskeen" />
        <meta name="twitter:title" content="Priv Health Blog" />
        <meta
          name="twitter:description"
          content="Get expert skincare advice, ingredient deep-dives, and success stories on the Skeen blog. Get tips from skin consultants, learn about custom treatments, and stay updated on the latest in personalized skincare"
        />
        <meta
          name="twitter:image:src"
          content={`https://tryskeen.com${metaCard.src}`}
        />
        <meta name="twitter:image:width" content="738" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of Skeen logo"
        />
        <link rel="me" href="https://twitter.com/tryskeen" />
        <link href="https://tryskeen.com/" rel="canonical" />
        <link href="https://tryskeen.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://tryskeen.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
      </Head>
      <Navbar />
      <Blog/>
      <Footer />
    </div>
  );
};

export default BlogHome;

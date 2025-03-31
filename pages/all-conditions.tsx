import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar1";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/skeen-metacard.png";
import StartSuccess from "../components/all-conditions";

const Start = () => {
  return (
    <div>
      <Head>
        <title>Get started - Skeen Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta
          name="description"
          content="Become a member and get unlimited consultations, pharmacy discounts, and more for a year."
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://tryskeen.com/start" property="og:url" />
        <meta content="Get started - Skeen Health" property="og:title" />
        <meta
          content="Become a member and get unlimited consultations, pharmacy discounts, and more for a year."
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Skeen health logo"
          property="og:image:alt"
        />
        <meta
          content="https://instagram.com/tryskeen"
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
        <meta name="twitter:title" content="Get started - Skeen Health" />
        <meta
          name="twitter:description"
          content="Become a member and get unlimited consultations, pharmacy discounts, and more for a year."
        />
        <meta
          name="twitter:image:src"
          content="https://tryskeen.com/_next/static/media/skeen-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="785" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Skeen health logo"
        />
        <link rel="me" href="https://twitter.com/tryskeen" />
        <link href="https://tryskeen.com/start" rel="canonical" />
        <link href="https://tryskeen.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://tryskeen.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
      </Head>
      <Navbar />
      <StartSuccess />
    </div>
  );
};

export default Start;

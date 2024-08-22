import Head from "next/head";

function Meta({ title, keywords, description, siteTitle }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon1.ico" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{`${title} :: ${siteTitle}`}</title>
    </Head>
  );
}

Meta.defaultProps = {
  siteTitle: "Salman",
  title: "Home",
  keywords: "Salman, Web Developer, Portfolio",
  description:
    "Salman Khan's personal portfolio showcasing skills and projects.",
};

export default Meta;

import Head from 'next/head';

const Meta = props => (
  <Head>
    <title key="title">{props?.title}</title>
    <meta key="description" name="description" content={props?.description} />
    <meta key="og:type" name="og:type" content={props?.og?.type} />
    <meta key="og:title" name="og:title" content={props?.og?.title} />
    <meta key="og:description" name="og:description" content={props?.og?.description} />
    <meta key="og:url" name="og:url" content={props?.og?.url} />
    <meta key="og:image" name="og:image" content={props?.og?.image} />
  </Head>
);

export default Meta;

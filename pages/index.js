import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { Button, Input, Skeleton, Typography } from "antd";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>yar ye to great hai bro</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Typography.Title level={3}>yara bera maza a raha hai</Typography.Title>
      </section>
      <Input />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Button type="primary">Good</Button>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <div>
        <Skeleton />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

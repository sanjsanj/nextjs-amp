import Head from "next/head";

import Layout from "../components/layout";

export const config = { amp: true };

export default function MyAmpPage() {
  const date = new Date();

  return (
    <div>
      <Head>
        <script
          async
          key="amp-timeago"
          custom-element="amp-timeago"
          src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
        />
      </Head>

      <Layout />

      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ☰
      </button>

      <p>Some time: {date.toJSON()}</p>

      <amp-timeago
        width="0"
        height="15"
        datetime={date.toJSON()}
        layout="responsive"
      >
        .
      </amp-timeago>
    </div>
  );
}

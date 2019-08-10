import Head from "next/head";

export const config = { amp: true };

export default function MyAmpPage() {
  return (
    <>
      <Head>
        <title>Example AMP story in next js</title>

        <script
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
          custom-element="amp-story"
          async
        />
      </Head>

      <amp-story
        poster-landscape-src="https://picsum.photos/300/400"
        poster-portrait-src="https://picsum.photos/300/400"
        publisher-logo-src="https://picsum.photos/100/100"
        poster-square-src="https://picsum.photos/100/100"
        publisher="The AMP Team"
        supports-landscape
        title="My Story"
        standalone
      >
        <amp-story-page id="my-first-page">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://picsum.photos/900/1600"
              width="900"
              height="1600"
            />
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <h1>Hello, amp-story!</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="my-second-page">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://picsum.photos/901/1602"
              width="900"
              height="1600"
            />
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <h1>The End</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-bookend
          src="https://amp.dev/static/samples/json/bookend.json"
          layout="nodisplay"
        />
      </amp-story>
    </>
  );
}

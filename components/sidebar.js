import Link from "next/link";
import Head from "next/head";

export default function Sidebar() {
  return (
    <>
      <Head>
        <script
          async
          key="amp-sidebar"
          custom-element="amp-sidebar"
          src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
        />
      </Head>

      <amp-sidebar id="sidebar" className="sidebar" layout="nodisplay">
        <button on="tap:sidebar.toggle" className="sidebar-trigger">
          ✕
        </button>

        <ul className="menu">
          <li>
            <Link href={"/"}>
              <a>Index</a>
            </Link>
          </li>

          <li>
            <Link href={"/hello.html"}>
              <a>Hello</a>
            </Link>
          </li>
        </ul>
      </amp-sidebar>
    </>
  );
}

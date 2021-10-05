import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <div>
    <Head>
        <link rel="stylesheet" href="https://static.cloud.coveo.com/searchui/v2.10089/css/CoveoFullSearch.min.css" />
        <script src="https://static.cloud.coveo.com/searchui/v2.10089/js/CoveoJsSearch.min.js"></script>
        <script src="https://static.cloud.coveo.com/searchui/v2.10089/js/templates/templates.js"></script>
        <script src="/js/template_custom.js"></script>
        <script src="https://static.cloud.coveo.com/searchui/v2.10089/js/cultures/en.js"></script>
    </Head>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/search">
          <a>Search</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default Home
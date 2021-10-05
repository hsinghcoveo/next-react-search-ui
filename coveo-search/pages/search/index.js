import Head from 'next/head'
import Script  from 'next/script'
import Link from 'next/link'


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Search({data}) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://static.cloud.coveo.com/searchui/v2.10089/css/CoveoFullSearch.min.css" />
        <script src="https://static.cloud.coveo.com/searchui/v2.10089/js/CoveoJsSearch.min.js"></script>
        <script src="https://static.cloud.coveo.com/searchui/v2.10089/js/templates/templates.js"></script>
        <script src="/js/template_custom.js"></script>
        <script src="https://static.cloud.coveo.com/searchui/v2.10089/js/cultures/en.js"></script>
      </Head>
      <Script id="show-banner" strategy="afterInteractive">
        {`let orgId = document.getElementById('orgId').innerText;`}
        {`let apiKey = document.getElementById('apiKey').innerText;`}
        {`Coveo.SearchEndpoint.configureCloudV2Endpoint(orgId,apiKey);`}
        {`Coveo.init(document.getElementById('search'));`}
      </Script>
      <div className="returnHome">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="hidden">
        <div id="orgId">{data.orgId}</div>
        <div id="apiKey">{data.apiKey}</div>
      </div>
      <div id="search" className="CoveoSearchInterface" data-enable-history="true">
            <div className="CoveoFolding"></div>
            <div className="CoveoAnalytics"></div>
            <div className="coveo-tab-section">
              <a className="CoveoTab" data-id="All" data-caption="All Content"></a>
              <a className="CoveoTab" data-id="Drone" data-caption="Drone Docs" data-expression='@source=="Drone Docs"'></a>
             </div>
            <div className="coveo-search-section">
              <div className="CoveoSearchbox" data-enable-omnibox="true"></div>
            </div>
            <div className="coveo-main-section">
              <div className="coveo-facet-column">
                <div className="CoveoDynamicFacet" data-title="Type" data-field="@objecttype" data-tab="All"></div>
                <div className="CoveoDynamicFacet" data-title="FileType" data-field="@filetype" data-tab="All,Drone"></div>
                <div className="CoveoDynamicFacet" data-title="Author" data-field="@author" data-tab="All"></div>
              </div>
              <div className="coveo-results-column">
                <div className="CoveoShareQuery"></div>
                <div className="CoveoPreferencesPanel">
                  <div className="CoveoResultsPreferences"></div>
                  <div className="CoveoResultsFiltersPreferences"></div>
                </div>
                <div className="CoveoTriggers"></div>
                <div className="CoveoBreadcrumb"></div>
                <div className="CoveoDidYouMean"></div>
                <div className="coveo-results-header">
                  <div className="coveo-summary-section">
                    <span className="CoveoQuerySummary"></span>
                    <span className="CoveoQueryDuration"></span>
                  </div>
                  <div className="coveo-result-layout-section">
                    <span className="CoveoResultLayout"></span>
                  </div>
                  <div className="coveo-sort-section">
                    <span className="CoveoSort" data-sort-criteria="relevancy" data-caption="Relevance"></span>
                    <span className="CoveoSort" data-sort-criteria="date descending,date ascending" data-caption="Date"></span>
                  </div>
                </div>
                <div className="CoveoHiddenQuery"></div>
                <div className="CoveoErrorReport" data-pop-up="false"></div>
                <div className="CoveoResultList" data-layout="list" data-wait-animation="fade" data-auto-select-fields-to-include="true">
                  
                </div>
                <div className="CoveoPager"></div>
                <div className="CoveoLogo"></div>
                <div className="CoveoResultsPerPage"></div>
              </div>
            </div>
          </div>
    </div>
  )
}

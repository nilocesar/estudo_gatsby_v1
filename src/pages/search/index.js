import React from "react"

import Layout from "../../global/components/Layout"
import SEO from "../../global/components/seo"
import Search from "../../global/components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search />
  </Layout>
)

export default SearchPage
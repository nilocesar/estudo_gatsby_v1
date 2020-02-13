import React from "react"
import { Link } from 'gatsby';


import Layout from "../global/components/Layout"
import PostItem from "../global/components/PostItem"

import SEO from "../global/components/Seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
    />
  </Layout>
)

export default IndexPage

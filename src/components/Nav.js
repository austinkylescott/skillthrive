import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, SVGWrapper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <SVGWrapper>
          <img src={data.logo.publicURL} alt="My Logo" />
        </SVGWrapper>
      </Link>
    </NavWrapper>
  )
}

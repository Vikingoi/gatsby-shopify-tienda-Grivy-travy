import React from 'react';
import Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

export function Logo() {
    const data = useStaticQuery(graphql`
      {
        file(relativePath: { eq: "LogoGribyTravy.png" }) {
          childImageSharp {
            fixed(width: 110){
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }

    `);
    console.log(data);
    return (
    <Img fixed={data.file.childImageSharp.fixed} />
    );
  }

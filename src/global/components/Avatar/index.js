import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

export default function Avatar() {

  const { avatarImage } = useStaticQuery(
    graphql`
      query{
        avatarImage: file( relativePath:{ eq: "avatar.jpeg"}){
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
        }
      }
    }
  `)


  return (
    <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
  );
}

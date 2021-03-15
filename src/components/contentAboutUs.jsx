import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Content = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`;

const ContentAboutUs = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: { eq: "nosotros" } } ) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fixed {
                            ...GatsbyDatoCmsFixed
                        }
                    }
                }
            }
        }
    `);
    const { titulo, contenido, imagen } = data.allDatoCmsPagina.nodes[0];
    return (
        <>
            <h2 css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{titulo}</h2>
            <Content>
                <p>{contenido}</p>
                <img src={imagen.fixed.src} alt="Nosotros" />
            </Content>
        </>

    );
}
 
export default ContentAboutUs;
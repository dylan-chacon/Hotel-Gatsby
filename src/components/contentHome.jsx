import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Home = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr) ;
        column-gap: 2rem;
    }
    p {
        line-height: 2;
        
    }
`;

const ContentHome = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: { eq: "inicio" } } ) {
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
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}>{titulo}</h2>
            <Home>
                <p>{contenido}</p>
                <img
                    css={css`
                        width: 100%;
                    `}
                    src={imagen.fixed.srcSet}
                />
            </Home>
        </>
    );
}
 
export default ContentHome;
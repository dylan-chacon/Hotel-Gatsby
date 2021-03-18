import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from './layout';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
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
`;

const Rooms = ({ data: { allDatoCmsHabitacion: { nodes }} }) => {
    const { titulo, contenido, imagen } = nodes[0];
    return (
        <Layout>
            <main css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}>
                <h1 css={css`
                    text-align: center;
                    margin-top: 4rem;
                `}>{titulo}</h1>
                <p>{contenido}</p>
                <img
                    css={css`
                        width: 100%;
                    `}
                    src={imagen.fixed.srcSet}
                />
            </main>
        </Layout>
    );
}
 
export default Rooms;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const ContentHome = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: { eq: "inicio" } } ) {
                nodes {
                    titulo
            contenido
            imagen {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
            }
            }
        }
        }
    `);
    const { titulo, contenido, imagen } = data.allDatoCmsPagina.nodes[0];
    return (
        <>
            <h2>{titulo}</h2>
            <div>
                <p>{contenido}</p>
                <img src={imagen.fluid.src} />
            </div>
        </>
    );
}
 
export default ContentHome;
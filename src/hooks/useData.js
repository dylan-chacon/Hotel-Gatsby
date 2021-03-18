import { graphql, useStaticQuery } from 'gatsby';

const useData = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion {
                nodes {
                    titulo
                    slug
                    id
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
    return data.allDatoCmsHabitacion.nodes;
}
 
export default useData;
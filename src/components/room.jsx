import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;
const Room = ({data}) => {
    const { contenido, imagen, titulo, slug } = data;
    return (
        <div css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
        `}>
            <img
                css={css`
                    width: 100%;
                `}
                src={imagen.fixed.srcSet}
            />
            <div css={css`
                padding: 3rem;
            `}>
                <h3 css={css`
                    font-size: 3rem;
                `}>{titulo}</h3>
                <p>{contenido}</p>
                <Button to={slug}>Ver Habitación</Button>
            </div>
        </div>
    );
}
 
export default Room;
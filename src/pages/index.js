import * as React from "react"
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Layout from '../components/layout';
import ImgHotel from '../components/imgHotel'
import ContentHome from '../components/contentHome';
import useData from '../hooks/useData';
import Room from '../components/room';

const ListRooms = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }
`;

const IndexPage = () => {
  const rooms = useData();
  return (
    <Layout>
      <ImgHotel />
      <ContentHome />

      <h2 css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
      `}>Nuestras habitaciones</h2>
      <ListRooms>
        {rooms.map((habitacion) => (
          <Room
          key={habitacion.id}
          data={habitacion}
          />
          ))}
        </ListRooms>
    </Layout>
  );
}

export default IndexPage

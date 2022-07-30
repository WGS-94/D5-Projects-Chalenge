import styled from "styled-components";

import MapImage from './assets/map.png';

export const Container = styled.div`
    background-color: #24282F;
    min-height: 100vh;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Map = styled.div`
    width: 580px;
    height: 580px;
    background-image: url(${MapImage});
    background-position: left top;
    background-size: 100%;
`;
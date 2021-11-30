import styled from "styled-components";

export const ImageMiniaturaWrapper = styled.div`
    cursor: pointer;
    border: 4px solid ${props => (props.isActive ? "brown" : "#eee")};
`;

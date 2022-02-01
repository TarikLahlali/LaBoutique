import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #940101;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  top:0;
`;

const Announcement = () => {
  return <Container>Gratis frakt ved kjøp over 1000 kr</Container>;
};

export default Announcement;
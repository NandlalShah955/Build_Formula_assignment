import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Text>&copy; 2023 Nandlal Shah. All Rights Reserved.</Text>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  display: flex;
  
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #213059;
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: #ffffff;
`;

export default Footer;

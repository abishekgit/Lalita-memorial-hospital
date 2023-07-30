import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #336699;
  padding: 16px;
  color: #fff;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>&copy; {new Date().getFullYear()} Lalita Memorial Hospital. All rights reserved.</Copyright>
        </FooterContainer>
    );
};

export default Footer;

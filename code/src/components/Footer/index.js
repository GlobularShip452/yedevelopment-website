import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights, FooterLink2
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Belangrijke Informatie</FooterLinkTitle>
                <FooterLink to="/terms-of-services">
                  Servicevoorwaarden
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Ons Team</FooterLinkTitle>
                <FooterLink2 target="_blank" href="https://yoran.yedevelopment.xyz">Yoran Essers</FooterLink2>
                <FooterLink2 to="/signin">Jeroen Teys</FooterLink2>
                <FooterLink2 to="/signin">Koen Van Der Plas</FooterLink2>
                <FooterLink2 to="/signin">Daniel Van Der Plas</FooterLink2>
                <FooterLink2 to="/signin">Levi Vandegard</FooterLink2>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Recente Projecten</FooterLinkTitle>
                <FooterLink to="/signin">HealthCare</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Links</FooterLinkTitle>
                <FooterLink to="/signin">Inloggen</FooterLink>
                <FooterLink target="_blank" href="https://covid-tracker-nl.web.app/">Covid Tracker</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">YEDevelopment</SocialLogo>
              <WebsiteRights>
                YEDevelopment © {new Date().getFullYear()} Alle rechten
                voorbehouden.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.instagram.com/yedevelopment/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

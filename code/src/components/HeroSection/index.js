import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Van web tot software!</HeroH1>
        <HeroP>
          Wij maken alles op het gebied van interfaces. Alles op maat en snel
          geleverd.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="discover"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
                    duration={750}
                    spy={true}
                    exact={true}
                    offset={-80}
          >
            Meer Info {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

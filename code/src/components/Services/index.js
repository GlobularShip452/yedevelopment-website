import React from "react";
import Icon1 from "../../images/icon-1.svg";
import Icon2 from "../../images/icon-2.svg";
import Icon3 from "../../images/icon-3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Onze Diensten</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Web Developing</ServicesH2>
            <ServicesP>
              Wij creeëren web- sites en apps. Alles op maat en een tijdloos
              design.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>App Developing</ServicesH2>
            <ServicesP>
              Wij creeëren cross-platform apps voor optimaal en makkelijk
              gebruik.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Software Developing</ServicesH2>
            <ServicesP>
              Wij creeëren op maat gemaakt software, van klein tot groot.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

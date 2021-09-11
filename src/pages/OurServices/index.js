import React, { Fragment } from "react";
import {
  CoverHeader,
  FeatureCard,
  Footer,
  Navbar,
  SectionLead,
  SectionTitle,
  Wrapper,
} from "components";
import * as S from "./OurServices.style";

import OurServicesCoverImg from "assets/images/team.jpg";
import { services } from "pages/OurServices/services";

export const OurServices = () => {
  return (
    <Fragment>
      <Navbar />
      <CoverHeader
        coverImg={OurServicesCoverImg}
        alt="Nuestros Servicios"
        title="Servicios"
        lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        buttonText="Nuestros Productos"
        buttonProps={{ to: "/productos", size: "small" }}
      />

      <S.OurServicesSection>
        <Wrapper>
          <SectionTitle>Nuestros Servicios</SectionTitle>
          <SectionLead>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </SectionLead>

          <S.ServicesCards>
            {services.map((service, key) => (
              <FeatureCard
                key={key}
                icon={service.icon}
                title={service.title}
                text={service.text}
              />
            ))}
          </S.ServicesCards>
        </Wrapper>
      </S.OurServicesSection>

      <Footer />
    </Fragment>
  );
};

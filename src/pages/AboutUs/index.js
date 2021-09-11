import React, { Fragment } from "react";
import {
  Carousel,
  CoverHeader,
  FeatureCard,
  Footer,
  Navbar,
  SectionLead,
  SectionTitle,
  TeamCard,
  Wrapper,
} from "components";
import AboutUsCoverImg from "assets/images/team.jpg";
import TeamImg from "assets/images/team.png";
import * as S from "./AboutUs.style";
import * as Gi from "react-icons/gi";
import * as Go from "react-icons/go";
import { members } from "pages/AboutUs/members";

export const AboutUs = () => {
  return (
    <Fragment>
      <Navbar />
      <CoverHeader coverImg={AboutUsCoverImg} alt="Sobre Nosotros" />
      <Wrapper>
        <S.AboutUsTopCard>
          <SectionTitle>
            Somos <span>Loxadev</span>
          </SectionTitle>

          <S.TopCardLead>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </S.TopCardLead>

          <S.TopCardAbstract>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, cons.
          </S.TopCardAbstract>

          <S.TopCardTeamImage>
            <img src={TeamImg} alt="Equipo Loxadev" />
          </S.TopCardTeamImage>
        </S.AboutUsTopCard>

        <S.MissionVisionSection>
          <SectionTitle>Misión y Visión</SectionTitle>

          <SectionLead>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </SectionLead>

          <S.MissionVisionCards>
            <FeatureCard
              icon={Gi.GiPeaks}
              title="Mision"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            />

            <FeatureCard
              icon={Go.GoTelescope}
              title="Visión"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            />
          </S.MissionVisionCards>
        </S.MissionVisionSection>
      </Wrapper>

      <S.TeamSection>
        <Wrapper>
          <SectionTitle>Nuestro Equipo</SectionTitle>

          <SectionLead>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </SectionLead>

          <S.TeamCards>
            <Carousel>
              {members.map((member, key) => (
                <TeamCard key={key} {...member} />
              ))}
            </Carousel>
          </S.TeamCards>
        </Wrapper>
      </S.TeamSection>

      <Footer />
    </Fragment>
  );
};

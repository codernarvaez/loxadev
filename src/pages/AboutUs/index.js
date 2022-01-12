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
            Somos <span>LoxaDev</span>
          </SectionTitle>

          <S.TopCardLead>
            Empresa que ofrece servicios tecnológicos a tu medida y a tu
            alcance.
          </S.TopCardLead>

          <S.TopCardAbstract>
            Garantizamos nuestros servicios porque trabajamos con estándares de
            calidad y entendemos que tus necesidades deben ser cubiertas lo más
            rápido posible. Además, estamos cerca de ti, por lo que conocemos
            muchas y distintas realidades y nos preocupamos por dar soluciones
            eficientes.
          </S.TopCardAbstract>

          <S.TopCardTeamImage>
            <img src={TeamImg} alt="Equipo Loxadev" />
          </S.TopCardTeamImage>
        </S.AboutUsTopCard>

        <S.MissionVisionSection>
          <SectionTitle>Misión y Visión</SectionTitle>

          <SectionLead>
            El mundo cambia a diario y las tecnologías se han impuesto como una
            necesidad global, es por eso que nos hemos organizado, para
            acercarte a un universo de soluciones que evolucionan contigo y con
            el mundo.
          </SectionLead>

          <S.MissionVisionCards>
            <FeatureCard
              icon={Gi.GiPeaks}
              title="Mision"
              text="Ofrecer servicios tecnológicos genéricos y a medida con el fin de ayudar a la comunidad mundial a solucionar sus necesidades de forma rápida y eficiente."
            />

            <FeatureCard
              icon={Go.GoTelescope}
              title="Visión"
              text="Ser una Empresa sostenible, capaz de acercar el mundo de las tecnologías a toda la comunidad mundial con soluciones integrales a sus necesidades así como ofrecer ayuda automatizada a sus actividades."
            />
          </S.MissionVisionCards>
        </S.MissionVisionSection>
      </Wrapper>

      <S.TeamSection>
        <Wrapper>
          <SectionTitle>Nuestro Equipo</SectionTitle>

          <SectionLead>
            Te garantizamos los mejores servicios porque trabajamos con un
            equipo ideal para lograrlo.
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

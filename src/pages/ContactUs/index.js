import React, { Fragment } from "react";
import { Footer, Header, Navbar, SocialIcon, Wrapper } from "components";
import * as S from "pages/ContactUs/ContactUs.style";
import * as Fa from "react-icons/fa";
import { ContactUsForm } from "pages/ContactUs/ContactUsForm";

export const ContactUs = () => {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Header
          title="Contáctanos"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et."
        />

        <S.Content>
          <S.FormCard>
            <S.FormCardHeader>
              <S.FormCardTitle>Enviar un mensaje</S.FormCardTitle>
              <S.FormCardIcon>
                <Fa.FaEnvelopeOpen />
              </S.FormCardIcon>
            </S.FormCardHeader>

            <ContactUsForm />
          </S.FormCard>

          <S.InfoCard>
            <S.InfoCardTitle>Información de Contacto</S.InfoCardTitle>
            <S.InfoCardDetails>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <Fa.FaPhone />
                </S.InfoCardIcon>
                <S.InfoCardItemText>(+593) 072713879</S.InfoCardItemText>
              </S.InfoCardItem>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <Fa.FaEnvelope />
                </S.InfoCardIcon>
                <S.InfoCardItemText>loxadev@contacto.com</S.InfoCardItemText>
              </S.InfoCardItem>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <Fa.FaMapMarkedAlt />
                </S.InfoCardIcon>
                <S.InfoCardItemText>
                  Avenida Principal 200-14 <small>Calle Secundaria</small>
                </S.InfoCardItemText>
              </S.InfoCardItem>
            </S.InfoCardDetails>

            <S.Social>
              <SocialIcon>
                <Fa.FaFacebookF />
              </SocialIcon>
              <SocialIcon>
                <Fa.FaTwitter />
              </SocialIcon>
              <SocialIcon>
                <Fa.FaInstagram />
              </SocialIcon>
            </S.Social>
          </S.InfoCard>
        </S.Content>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

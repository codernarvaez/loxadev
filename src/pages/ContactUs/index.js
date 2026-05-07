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
          description="Pregunta por nuestros servicios y productos o solicita el tuyo personalizado."
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
                <S.InfoCardItemText>(+593) 098 917 5786</S.InfoCardItemText>
              </S.InfoCardItem>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <Fa.FaEnvelope />
                </S.InfoCardIcon>
                <S.InfoCardItemText>info@loxadev.com</S.InfoCardItemText>
              </S.InfoCardItem>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <Fa.FaMapMarkedAlt />
                </S.InfoCardIcon>
                <S.InfoCardItemText>
                  Loja, Loja <small>Ecuador</small>
                </S.InfoCardItemText>
              </S.InfoCardItem>
            </S.InfoCardDetails>

            <S.Social>
              <SocialIcon
                href="https://www.facebook.com/LoxaDev"
                target="_blank"
              >
                <Fa.FaFacebookF />
              </SocialIcon>

              <SocialIcon href="https://twitter.com/LoxaDev" target="_blank">
                <Fa.FaTwitter />
              </SocialIcon>

              <SocialIcon
                href="https://www.instagram.com/loxadev"
                target="_blank"
              >
                <Fa.FaInstagram />
              </SocialIcon>

              <SocialIcon href="https://t.me/LoxaDev" target="_blank">
                <Fa.FaTelegramPlane />
              </SocialIcon>
            </S.Social>
          </S.InfoCard>
        </S.Content>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

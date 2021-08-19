import React, { Fragment } from "react";
import { Footer, Header, Navbar, SocialIcon, Wrapper } from "components";
import * as S from "pages/ContactUs/ContactUs.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </S.FormCardIcon>
            </S.FormCardHeader>

            <ContactUsForm />
          </S.FormCard>

          <S.InfoCard>
            <S.InfoCardTitle>Información de Contacto</S.InfoCardTitle>
            <S.InfoCardDetails>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </S.InfoCardIcon>
                <S.InfoCardItemText>(+593) 072713879</S.InfoCardItemText>
              </S.InfoCardItem>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </S.InfoCardIcon>
                <S.InfoCardItemText>loxadev@contacto.com</S.InfoCardItemText>
              </S.InfoCardItem>
              <S.InfoCardItem>
                <S.InfoCardIcon>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </S.InfoCardIcon>
                <S.InfoCardItemText>
                  Avenida Principal 200-14 <small>Calle Secundaria</small>
                </S.InfoCardItemText>
              </S.InfoCardItem>
            </S.InfoCardDetails>

            <S.Social>
              <SocialIcon>
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
            </S.Social>
          </S.InfoCard>
        </S.Content>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

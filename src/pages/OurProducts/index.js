import React, { Fragment } from "react";
import {
  CoverHeader,
  Footer,
  Navbar,
  ProductCard,
  SectionLead,
  SectionTitle,
  Wrapper,
} from "components";
import * as S from "./OurProducts.style";

import OurProductsCoverImg from "assets/images/team.jpg";
import { products } from "pages/OurProducts/products";

export const OurProducts = () => {
  return (
    <Fragment>
      <Navbar />
      <CoverHeader
        coverImg={OurProductsCoverImg}
        alt="Nuestros Productos"
        title="Productos"
        lead="Conoce los productos que te ofrece LoxaDev"
        buttonText="Nuestros Servicios"
        buttonProps={{ to: "/servicios", size: "small" }}
      />

      <S.OurProductsSection>
        <Wrapper>
          <SectionTitle>Nuestros Productos</SectionTitle>
          <SectionLead>
            Ofrecemos productos pre-establecidos, Los cuales los puedes conocer
            a continuación Además, ofrecemos servicios personalizados que
            respondan a tus necesidades, contáctanos para sabes más de esto
          </SectionLead>

          <S.ProductCards>
            {products.map((product, key) => (
              <ProductCard key={key} {...product} />
            ))}
          </S.ProductCards>
        </Wrapper>
      </S.OurProductsSection>

      <Footer />
    </Fragment>
  );
};

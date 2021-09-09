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
        lead="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        buttonText="Nuestros Servicios"
        buttonProps={{ to: "/servicios", size: "small" }}
      />

      <S.OurProductsSection>
        <Wrapper>
          <SectionTitle>Nuestros Productos</SectionTitle>
          <SectionLead>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
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

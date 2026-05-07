import React from "react";
import { Button, Form, FormInputWrapper, Input, TextArea } from "components";
import { FormProvider, useForm } from "react-hook-form";
import { useYupValidationResolver } from "hooks";
import { contactUsSchema } from "utils/schemas";

export const ContactUsForm = () => {
  const resolver = useYupValidationResolver(contactUsSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputWrapper>
          <Input name="firstName" label="Nombre*" />
          <Input name="lastName" label="Apellido*" />
          <Input name="email" label="Correo Electrónico*" />
          <Input name="subject" label="Asunto*" />
        </FormInputWrapper>

        <TextArea name="message" label="¿En que te podemos ayudar?*" />

        <Button type="submit">Enviar</Button>
      </Form>
    </FormProvider>
  );
};

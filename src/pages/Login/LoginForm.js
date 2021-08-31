import React from "react";
import { Button, Form, Input } from "components";
import { useYupValidationResolver } from "hooks";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema } from "utils/schemas";

export const LoginForm = () => {
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(`data`, data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" label="Usuario*" />
        <Input name="password" type="password" label="Contraseña*" />
        <Button type="submit" block>
          Ingresar
        </Button>
      </Form>
    </FormProvider>
  );
};

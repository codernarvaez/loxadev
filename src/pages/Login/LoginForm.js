import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "components";
import { login } from "features/auth/authSlice";
import { useYupValidationResolver } from "hooks";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema } from "utils/schemas";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate("/panel", { replace: true });
    } catch {
      /* error expuesto vía state.auth.error */
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" label="Usuario*" />
        <Input name="password" type="password" label="Contraseña*" />
        {error ? (
          <p style={{ color: "var(--color-danger, #c00)", marginTop: 8 }}>
            No se pudo iniciar sesión. Revisa tus datos o la conexión con el
            servidor.
          </p>
        ) : null}
        <Button type="submit" block disabled={loading}>
          {loading ? "Ingresando…" : "Ingresar"}
        </Button>
      </Form>
    </FormProvider>
  );
};

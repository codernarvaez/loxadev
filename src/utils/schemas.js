import yup from "./validation";

export const contactUsSchema = yup.object({
  firstName: yup.string().required().min(3).trim(),
  lastName: yup.string().required().min(3).trim(),
  email: yup.string().required().email().trim(),
  subject: yup.string().required().min(3).trim(),
  message: yup.string().required().trim(),
});

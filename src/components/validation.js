import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup); // extend yup

const validations = Yup.object({
  username: Yup.string()
    .max(10, "must be 10 characters or less")
    .required("required"),
  email: Yup.string().email("invalid email address").required("required"),
  phone: Yup.number().notRequired(),
  password: Yup.string()
    .password()
    .min(8, "must be 8-16 characters")
    .max(16, "must be 8-16 characters")
    .minLowercase(1, "must contain atleast one lowercase letter")
    .minNumbers(1, "must contain atleast one number")
    .minSymbols(1, "must contain atleast one special character")
    .minUppercase(1, "must contain atleast one uppercase letter")
    .required("required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "password must match")
    .required("required"),
});

export default validations;

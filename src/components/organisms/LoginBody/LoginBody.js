import TextField from "@material-ui/core/TextField";
// import { useForm, Controller } from "react-hook-form";

import LeftCard from "components/molecules/LeftCard/LeftCard";
import CustomButton from "components/atoms/Buttons/CustomButton";
import { Container, RightBody } from "./LoginBody.styles";
import { signIn } from "helpers/saveUser";

import { useFormik } from "formik";
import * as yup from "yup";

const LoginBody = () => {
  // const {
  //   control,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .matches(
        /^\S+(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Password must be alphanumeric without spaces"
      )
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => signIn(values),
  });

  // const onSubmit = (data) => signIn(data);

  return (
    <Container>
      <LeftCard
        title="Login"
        description="Get access to your Orders, Wishlist & Recommendations"
      />
      <RightBody>
        <form className="right-body__form" onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            id="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type="password"
            label="Password"
            id="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {/* <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9]+[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,5}$/,
                message: "Email is not valid",
              },
            }}
            render={({ field }) => (
              <TextField {...field} type="email" label="Email" id="Email" />
            )}
          /> */}
          {/* {errors.email && (
            <span className="err-msg">{errors.email.message}</span>
          )} */}
          {/* <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
              pattern: {
                value: /^\S+(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Password must be alphanumeric without spaces",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                id="Password"
              />
            )}
          />
          {errors.password && (
            <span className="err-msg">{errors.password.message}</span>
          )} */}
          <CustomButton>Login</CustomButton>
        </form>
      </RightBody>
    </Container>
  );
};

export default LoginBody;

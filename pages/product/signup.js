import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { createContext, useContext } from "react";
import { TokenContext } from "../../content/token";

// const SetToken = createContext();

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
});

const SignUp = () => {
  const router = useRouter();
  const { setData } = useContext(TokenContext);

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: "mor_2314",
              password: "83r5^_",
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              setData(json);
              if (json) router.push("/product/cartpage");
              console.log(json);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            <br></br>
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            <br></br>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            <br></br>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br></br>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

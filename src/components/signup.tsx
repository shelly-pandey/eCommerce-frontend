import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import '../App.css';
import axios from "axios";
import Header from "./navigation";
import { Button } from "react-bootstrap";


const initialValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",

};

export default function SignUp() {
  return (
    <div>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:5000/api/v1/users", values)
            .then((data: any) => console.log(data));
        }}
      >
        {({ values, errors, touched }) => (
          <div className="catagories">
            <Form className="section2">

              <div className="form-group">
                <div className="box-1" >Create an account </div>
                <Field label="username" id="username" name="username" placeholder="username" />
                {errors.username && touched.username ? (
                  <div className="Errors">{errors.username}</div>
                ) : null}
              </div>
              <div className="form-group">
                <Field id="firstName" name="firstName" placeholder="First Name" />
              </div>
              <div className="form-group">
                <Field id="lastName" name="lastName" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <Field id="email" name="email" placeholder="email" />
                {errors.email && touched.email ? (
                  <div className="Errors">{errors.email}</div>
                ) : null}
              </div>
              <div className="form-group">
                <Field
                  label="password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="Errors">{errors.password}</div>
                ) : null}
              </div>
              <div className="form-group">
                <Field
                  label="confirm password"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="Errors">{errors.confirmPassword}</div>
                ) : null}


              </div>
              <Button variant="primary">Submit</Button>

            </Form>
          </div>
        )}
      </Formik>
    </div>
  );

};

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too much...")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(3, "Password should be min 3")
    .required("required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});



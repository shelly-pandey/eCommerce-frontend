import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import '../App.css';
import axios from "axios";
import Header from "./navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const initialValues = {
  email: "",
  password: "",
};


export default function SignIn() {
  return (
    <div>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => {
          axios
          .post("http://localhost:5000/api/v1/users ", values)
          .then((data: any) => localStorage.setItem("token", JSON.stringify(data.data.token)))
          .catch(console.log);
        console.log(values);
        }}
      >
        {({ values, errors, touched }) => (
          <div className="catagories">
            <Form className="section2">


              <div className="box-1" >Log in to your account </div>

              <div className="form-group">
                <Field id="email" name="email" size="30" placeholder="email" />
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
                  size="30"
                />
                {errors.password && touched.password ? (
                  <div className="Errors">{errors.password}</div>
                ) : null}

              </div>

              <Button variant="primary">Log In</Button>not a user? <Link to={'/signup'}>Sign up!</Link>

            </Form>
          </div>
        )}
      </Formik>
    </div>
  );

};

const userSchema = Yup.object().shape({

  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(3, "Password should be min 3")
    .required("required"),

});



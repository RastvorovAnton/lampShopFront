import React from "react";
import { Formik } from "formik";
import * as yup from 'yup'
import '../SignUp/SignUpAndSignIn.scss'
import { Button, FormLabel } from "@mui/material";

const SignIn = () => {

  const validationSchema = yup.object().shape({
    password: yup.string().min('8').typeError('Must be a string').required(<div className="validation-message">Must add a value</div>),
    email: yup.string().email('Please add an email').required(<div className="validation-message">Must add a value</div>),
  })

  return (
    <div>
      <div className="sign-up">
        <header>
          <h3>Log in to your account</h3>
        </header>
        <Formik
          initialValues={{
            name: '',
            secondName: '',
            password: '',
            confirmPassword: '',
            email: '',
            confirmEmail: ''
          }}
          validateOnBlur
          onSubmit={(values) => { console.log(values) }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className="registration-form">
              <div className="label-and-input">
                <FormLabel>Email</FormLabel> <br />
                <input
                  type={`text`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {
                  touched.email && errors.email && <div className="validation-message">{errors.email}</div>
                }
              </div>
              <div className="label-and-input">
                <FormLabel>Password</FormLabel> <br />
                <input
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {
                  touched.password && errors.password && <div className="validation-message">{errors.password}</div>
                }
              </div>
              <div className="sign-up-button">
                <Button
                  variant="contained"
                  color="success"
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type={`submit`}
                >Login</Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default SignIn
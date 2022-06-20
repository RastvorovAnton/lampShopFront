import React, { useContext } from "react";
import RequestContext from "../../Context/RequestContext";
import ValidationContext from '../../Context/ValidationContext'
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { FormLabel, Button } from "@mui/material";
import '../SignUp/SignUpAndSignIn.scss'

const SignIn = () => {

  const requestContext = useContext(RequestContext)
  const validation = useContext(ValidationContext)
  const { loginRequest } = requestContext
  const { validationSchemaAuthorization } = validation

  const navigate = useNavigate()

  return (
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
        onSubmit={(values) => {
          loginRequest(values)
          navigate(`/starter-store`)
        }}
        validationSchema={validationSchemaAuthorization}
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
  )
}
export default SignIn
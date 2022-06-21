import { useContext } from "react";
import RequestContext from "../../Context/RequestContext";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import './SignUpAndSignIn.scss'
import { Button, FormLabel } from "@mui/material";

const SignUp = () => {

  const requestContext = useContext(RequestContext)
  const { registrationRequest } = requestContext
  const navigate = useNavigate()


  return (
    <div className="sign-up">
      <header>
        <h3>Create an account</h3>
      </header>
      <Formik
        initialValues={{
          name: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: ''
        }}
        validateOnBlur
        onSubmit={
          (values) => {
            registrationRequest(values)
            navigate('/starter-store')
          }
        }
        // validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="registration-form">
            <div className="label-and-input">
              <FormLabel>Name</FormLabel> <br />
              <input
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {
                touched.name && errors.name && <div className="validation-message">{errors.name}</div>
              }
            </div>
            <div className="label-and-input">
              <FormLabel>Email</FormLabel> <br />
              <input
                type={'text'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {
                touched.email && errors.email && <div className="validation-message">{errors.email}</div>
              }
            </div>
            <div className="label-and-input">
              <FormLabel>Confirm Email</FormLabel> <br />
              <input
                type={'text'}
                name={'confirmEmail'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
              {
                touched.confirmEmail && errors.confirmEmail && <div className="validation-message">{errors.confirmEmail}</div>
              }
            </div>
            <div className="label-and-input">
              <FormLabel>Password</FormLabel> <br />
              <input
                type={'password'}
                name={'password'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {
                touched.password && errors.password && <div className="validation-message">{errors.password}</div>
              }
            </div>
            <div className="label-and-input">
              <FormLabel>Confirm Password</FormLabel> <br />
              <input
                type={'password'}
                name={'confirmPassword'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {
                touched.confirmPassword && errors.confirmPassword && <div className="validation-message">{errors.confirmPassword}</div>
              }
            </div>
            <div className="sign-up-button">
              <Button
                variant="contained"
                color="success"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={'submit'}
              >Register</Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default SignUp
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup'
import './SignUpAndSignIn.scss'
import { Button, FormLabel } from "@mui/material";
import axios from '../../api/axios'

const SignUp = () => {

  const navigate = useNavigate()

  const validationSchema = yup.object().shape({
    name: yup.string().min('5').max('20').typeError('Must be a string').required(<div className="validation-message">Must add a value</div>),
    password: yup.string().min('2').typeError('Must be a string').required(<div className="validation-message">Must add a value</div>),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords are not the same').required(<div className="validation-message">Must add a value</div>),
    email: yup.string().email('Please add an email').required(<div className="validation-message">Must add a value</div>),
    confirmEmail: yup.string().email('Please add a true email').oneOf([yup.ref('email')], 'Emails are not the same').required(<div className="validation-message">Must add a value</div>)
  })

  const submitData = async (values) => {
    const { name, email, password } = values
    {
      await axios.post('/api/users/registration',
        {
          userName: name,
          email: email,
          password: password,
          isAdmin: false
        }
      )
        .then((res) => {
          console.log(res.data)
          localStorage.setItem('accessToken', res.data.accessToken)
          localStorage.setItem('refreshToken', res.data.refreshToken)
          localStorage.setItem('userName', res.data.data.userName)
          navigate(`/starter-store`)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div>
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
            (values) => { submitData(values) }
          }
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className="registration-form">
              <div className="label-and-input">
                <FormLabel>Name</FormLabel> <br />
                <input
                  type={`text`}
                  name={`name`}
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
                <FormLabel>Confirm Email</FormLabel> <br />
                <input
                  type={`text`}
                  name={`confirmEmail`}
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
              <div className="label-and-input">
                <FormLabel>Confirm Password</FormLabel> <br />
                <input
                  type={`password`}
                  name={`confirmPassword`}
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
                  type={`submit`}
                >Register</Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default SignUp
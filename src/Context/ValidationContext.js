import React from "react";
import * as yup from 'yup'

const ValidationContext = React.createContext()
const { Provider, Consumer } = ValidationContext

const ValidationProvider = props => {


  const validationSchemaAuthorization = yup.object().shape({
    password: yup.string().min('2').typeError('Must be a string').required(<div className="validation-message">Must add a value</div>),
    email: yup.string().email('Please add an email').required(<div className="validation-message">Must add a value</div>),
  })

  const validationSchemaRegistartion = yup.object().shape({
    name: yup.string().min('5').max('20').typeError('Must be a string').required(<div className="validation-message">Must add a value</div>),
    password: yup.string().min('2').typeError('Must be a string').required(<div className="validation-message">Must add a value</div>),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords are not the same').required(<div className="validation-message">Must add a value</div>),
    email: yup.string().email('Please add an email').required(<div className="validation-message">Must add a value</div>),
    confirmEmail: yup.string().email('Please add a true email').oneOf([yup.ref('email')], 'Emails are not the same').required(<div className="validation-message">Must add a value</div>)
  })

  const validationContext = {
    validationSchemaAuthorization,
    validationSchemaRegistartion
  }

  return <Provider value={validationContext}>{props.children}</Provider>
}

export { ValidationProvider, Consumer as ValidationConsumer }
export default ValidationContext
import React from "react";
import axios from "../api/axios";

const RequestContext = React.createContext()
const { Provider, Consumer } = RequestContext

const RequestProvider = props => {

  const loginRequest = async (values) => {
    const { email, password } = values
    await axios
      .post('/api/users/login',
        {
          email: email,
          password: password,
          isAdmin: false
        }
      )
      .then((res) => {
        const { accessToken, refreshToken, user } = res.data
        const { userName } = user
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('userName', userName)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const registrationRequest = async (values) => {
    const { name, email, password } = values
    await axios.post('/api/users/registration',
      {
        userName: name,
        email: email,
        password: password,
        isAdmin: false
      }
    )
      .then((res) => {
        const { accessToken, refreshToken, data } = res.data
        const { userName } = data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('userName', userName)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const requestContext = {
    loginRequest,
    registrationRequest
  }
  return <Provider value={requestContext}>{props.children}</Provider>
}

export { RequestProvider, Consumer as RequestConsumer }
export default RequestContext
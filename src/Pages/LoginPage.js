import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function LoginPage() {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
    })

    const handleSubmitFormik = (values) => {
        Axios
        .post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login", values)
        .then(response => {
            setUserData(response.data)
            localStorage.setItem('token',response.data.token)
          })
          .catch((err) => console.log(err))
        
        if (userData.isAccountExist.isVerified === true){
            navigate("/")
        }
    }
  return (
    <>
    <div className="loginTitle"><span>Log In to Your Account</span></div>
    <div>
        <Formik initialValues={{
            email: "",
            password: ""
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmitFormik}> 
            {() => {
                return (<Form>
                    <div className="loginEmail">Email</div>
                    <div>
                    <Field className="loginInput" type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="loginPassword">Password</div>
                    <div>
                    <Field className="loginInput" type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    </div>
                    <button className="loginBtn" type="submit">Log in</button>
                </Form>)
            }}
        </Formik>
    <div className="or">or</div>
    <Link to="/register"><button className="signUpBtn">Sign Up</button></Link>
    </div>

    </>
  )
}

export default LoginPage
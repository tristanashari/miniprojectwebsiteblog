import React from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function RegisterPage() {
    const navigate = useNavigate()

    const registerSchema = Yup.object().shape({
        password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
        .matches(/[^a-zA-Z0-9]/, "Password must contain at least 1 special character")
        .matches(/[a-z]/, "Password must contain at least 1 lowercase letter"),

        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("You must confirm your password")
    })

    const handleSubmit = (values) => {
        try {
            Axios.post(
                "https://minpro-blog.purwadhikabootcamp.com/api/auth/", values
            )
        } catch (error) {
            return;
        }
        
        navigate("/login")
    }

    return (
        <>
            <div className="loginTitle">Register</div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                        <div className="loginEmail">Username</div>
                        <input className="loginInput" type="text" name="username" onChange={props.handleChange} value={props.values.username} />
                        <div className="loginEmail">Email</div>
                        <input className="loginInput" type="text" name="email" onChange={props.handleChange} value={props.values.email} />
                        <div className="loginEmail">Phone Number</div>
                        <input className="loginInput" type="phone number" name="phone" onChange={props.handleChange} value={props.values.phone} />
                        <div className="loginEmail">Password</div>
                        <input className="loginInput" type="password" name="password" onChange={props.handleChange} value={props.values.password} />
                        <ErrorMessage name="password" component="div" />
                        <div className="loginEmail">Confirm Password</div>
                        <input className="loginInput" type="password" name="confirmPassword" onChange={props.handleChange} value={props.values.confirmPassword} />
                        <ErrorMessage name="confirmPassword" component="div" />
                        <div><button className="loginBtn" type="submit">Register</button></div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default RegisterPage;

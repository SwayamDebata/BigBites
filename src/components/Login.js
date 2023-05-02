import React from "react";
import { Formik } from "formik"; 
import * as Yup from "yup"; 
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
    email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
    password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
    const navigate = useNavigate();

    function handleNavigate(values) {
    alert(values);
    setTimeout(() => {
        navigate(-1);
    }, 0);
    }
    return (
    <>
        <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
            handleNavigate(JSON.stringify(values));
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
        }) => (
        <div className="login-container mt-[100px] min-h-9 text-center flex ">
            <div className="border pr-[50px] border-gray shadow basis-[500px] h-[420px] m-auto flex items-center justify-center flex-col gap-3 mob:basis-[300px] mob:h-[360px] bg-yellow">
                <form noValidate onSubmit={handleSubmit}>
                <span className="text-black text-lg font-semibold mob:text-sm ml-[80px]">Login</span>
                <div className="flex justify-center p-2.5">
                <label htmlFor="email" className="p-2.5 w-[100px] mob:text-left mob:h-8 mob:text-sm ">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email"
                    className="outline-none p-1 text-sm h-10 w-[200px] rounded-md bg-white mob:w-[180px] mob:h-8 hover:bg-gray-light"
                    id="email"
                /> 
                </div>
                <p className="text-md text-black ml-[80px]">
                    {errors.email && touched.email && errors.email}
                </p>
                <div className="pwd flex justify-center p-2.5">
                <label htmlFor="password" className="pwd-label p-2.5 w-[100px] mob:text-left mob:h-8 mob:text-sm">Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter your password"
                    className="outline-none p-1 text-sm h-10 w-[200px] rounded-md bg-white mob:w-[180px] mob:h-8 hover:bg-gray-light"
                />
                </div>
                <p className="text-md text-black ml-[80px]">
                    {errors.password && touched.password && errors.password}
                </p>
                <button className="h-[35px] w-[80px] ml-[80px] mt-4 rounded-md bg-white hover:bg-black hover:text-white" type="submit">Login</button>
                </form>
            </div>
            </div>
        )}
        </Formik>
    </>
    );
};

export default Login;
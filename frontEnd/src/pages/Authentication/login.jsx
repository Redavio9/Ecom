import React from 'react';
import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LoginUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("handle submit", values);
    dispatch(LoginUserAction({ data: values }));
  };

  return (
    <>
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form className="space-y-5">
        <div className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="email"
              placeholder="Email"
              variant="outlined"
              fullWidth
              type="email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div>
            <Field
              as={TextField}
              name="password"
              placeholder="Password"
              variant="outlined"
              fullWidth
              type="password"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
        </div>
        <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth>
          Login
        </Button>
      </Form>
    </Formik>
    <div className="flex gap-2 items-center  justify-center p-4">
      <p> Don't have an account? </p>
        <Button
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
    </div>

    <div>
      <Button className="w-full" variant='outlined'>
        Forgot Password?
      </Button>
    </div>
    </>
  );
};

export default Login;

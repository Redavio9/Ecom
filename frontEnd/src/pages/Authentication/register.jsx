import React from 'react';
import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  gender: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  firstName: Yup.string().min(3, "Username must be at least 3 characters").required("Required"),
  lastName: Yup.string().min(3, "Username must be at least 3 characters").required("Required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  phoneNumber: Yup.string().min(10, "Phone number must be at least 10 characters").required("Required"),
  gender: Yup.string().required('Required'),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    dispatch(RegisterUserAction({ data: values }));
  };

  return (
    <>
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form className="space-y-5 " >
        <div className="space-y-5">
          <div>
            <Field
              as={TextField}
              name="firstName"
              placeholder="firstName"
              variant="outlined"
              fullWidth
              type="text"
            />
            <ErrorMessage name="firstName" component="div" className="text-red-500" />
          </div>
          <div>
            <Field
              as={TextField}
              name="lastName"
              placeholder="lastName"
              variant="outlined"
              fullWidth
              type="text"
            />
            <ErrorMessage name="lastName" component="div" className="text-red-500" />
          </div>
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
          <div>
            <Field
              as={TextField}
              name="confirmPassword"
              placeholder="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
          </div>
          <div>
            <Field
              as={TextField}
              name="phoneNumber"
              placeholder="Phone Number"
              variant="outlined"
              fullWidth  
              type="text"
            />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
          </div>
          <div>
            <FormControl>
              <FormLabel id="gender-label">Gender</FormLabel>
              <Field name="gender">
                {({ field }) => (
                  <RadioGroup
                    {...field}
                    row
                    aria-labelledby="gender-label"
                    name="gender"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                )}
              </Field>
              <ErrorMessage name="gender" component="div" className="text-red-500" />
            </FormControl>
          </div>
        </div>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth>
          Register
        </Button>
      </Form>
    </Formik>
    <div className="flex gap-2 items-center  justify-center p-4">
      <p> Already have an account?  </p>
        <Button
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
    </div>
    </>
  );
};

export default Register;

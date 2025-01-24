import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
// import { LoginUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import { UpdateProfileAction } from "../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const jwt = localStorage.getItem("jwt");

const initialValues = {
  firstName: null,
  lastName: null,
  email: null,
  profilePicture: null,
  coverImage: null,
};
const validationSchema = Yup.object({
  firstName: Yup.string().nullable(),
  lastName: Yup.string().nullable(),
  email: Yup.string().email("Invalid email").nullable(),
  profilePicture: Yup.mixed().nullable(),
  coverImage: Yup.mixed().nullable(),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: "none",
  overflow: "scroll -y",
  borderRadius: 3,
};

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    if (values.profilePicture)
      formData.append("profilePicture", values.profilePicture);
    if (values.coverImage) formData.append("coverImage", values.coverImage);

    console.log("FormData submitted:", formData);
    dispatch(UpdateProfileAction(formData, jwt));
    navigate("/");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-5">
                  <div className="space-y-5">
                    <div>
                      <Field
                        as={TextField}
                        name="firstName"
                        placeholder="First Name"
                        variant="outlined"
                        fullWidth
                        type="text"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        name="lastName"
                        placeholder="Last Name"
                        variant="outlined"
                        fullWidth
                        type="text"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500"
                      />
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
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="profilePicture">Profile Picture</label>
                      <input
                        name="profilePicture"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("profilePicture", file); // Set file in Formik's state
                        }}
                      />
                      <ErrorMessage
                        name="profilePicture"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="coverImage">Cover Image</label>
                      <input
                        name="coverImage"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("coverImage", file); // Set file in Formik's state
                        }}
                      />
                      <ErrorMessage
                        name="coverImage"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

import React from "react";
import { Modal, Box} from "@mui/material";
import { useFormik } from "formik";
import { Avatar, Button, IconButton, Backdrop, CircularProgress } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from '@mui/icons-material/VideoCall';
import { uploadToCloud } from "../../Utils/uploadToCloud";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

function CreatePostModal({ handleClose, open }) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [isloading, setIsloading] = React.useState(false);

  const handleSelectImage = async(event) => {
    setIsloading(true);
    const imageUrl = await uploadToCloud(event.target.files[0], "image");
    console.log("imageUrl", imageUrl);
    setSelectedImage(imageUrl);
    setIsloading(false);
    formik.setFieldValue("image", imageUrl);
  };


  const handleSelectVedeo = async(event) => {
    setIsloading(true);
    const videoUrl = uploadToCloud(event.target.files[0], "video");
    console.log("videoUrl", videoUrl);
    setSelectedVideo(videoUrl);
    setIsloading(false);
    formik.setFieldValue("video", videoUrl);
    
  };


  const formik = useFormik(
    {
      initialValues: {
        image: "",
        caption:"",
        video: "",
      },
      onSubmit:(values) => {
        console.log("formik value", values);

        
      }

    }
  );
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">Solix</p>
                <p className="text-sm">@Solix</p>
              </div>
            </div>
            <textarea
              className="w-full mt-5 p-2 bg-transparent outline-none border border-[#3b3b3b] rounded-lg"
              placeholder="What do you want to talk about?"
              name="post"
              id=""
              rows="4"
              value={formik.values.post}
              onChange={formik.handleChange}
            />

            <div className="flex space-x-5 items-centre mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  // style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="vedeo/*"
                  onChange={handleSelectVedeo}
                  style={{ display: "none" }}
                  id="vedeo-input"
                />
                <label htmlFor="vedeo-input">
                  <IconButton color="primary">
                    <VideoIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>
            {selectedImage && (
              <div>
                <img className="h-[10rem]" src={selectedImage} />
              </div>
            )}
            {selectedVideo && (
              <div>
                <img className="h-[10rem]" src={selectedVideo} />
              </div>
            )}
            <div className="flex w-full justify-end">
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "1.5rem" }}
              >
                Post
              </Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isloading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
}

export default CreatePostModal;

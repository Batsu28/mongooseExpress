import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    // const ext = extractExtention(file.originalname)
    // const NewName =
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;

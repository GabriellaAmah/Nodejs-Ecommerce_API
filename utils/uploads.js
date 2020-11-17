// eslint-disable-next-line node/no-extraneous-import
import multer from 'multer';

const storage  = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'images')
    },

    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const imageUpload = multer({storage : storage, fileFilter : fileFilter}).single('image')

export default imageUpload
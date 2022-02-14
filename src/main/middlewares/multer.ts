import { diskStorage, FileFilterCallback, StorageEngine, Multer } from 'multer'
import multer = require('multer')
import { join, resolve } from 'path'

const storage = (dest: string): StorageEngine => {
  return diskStorage({
    destination: (req, file, calllback) => {
      calllback(null, join(resolve('.') + dest))
    },
    filename: (req, file, calllback) => {
      calllback(null, file.originalname)
    }
  })
}

const fileFilter = async (req: any, file: Express.Multer.File, cb: FileFilterCallback): Promise<void> => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    return cb(null, true)
  } else {
    return cb(new Error('Image uploaded is not of type jpg/jpeg or png'))
  }
}

export const upload = (destination: string): Multer => multer({ storage: storage(destination), fileFilter: fileFilter })

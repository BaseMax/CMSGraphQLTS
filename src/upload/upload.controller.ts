import {
  Post,
  UseInterceptors,
  UploadedFile,
  Controller,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';


@Controller('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename =
            path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
          const extention = path.parse(file.originalname).ext;
          cb(null, `${filename}${extention}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { UploadedFilePath: file.path };
  }
}

"use server";

import { imagekit } from "./util/util";


export const shareAction = async (formData: FormData) => {

    const file = formData.get("file") as File;
    // const desc = formData.get('desc') as string

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);


    imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: 'assets',
        transformation: {
            pre: 'w-600'
        }
    }, 
      function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
)
}


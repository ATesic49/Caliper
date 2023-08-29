import formidable from "formidable";
import { NextApiHandler, NextApiRequest, NextConfig } from "next";
import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: false,
  },
};
const create = async (
  name: string,
  image: string,
  boje: string[],
  description: string
) => {
  const dugaciji = await prisma.galerija.findFirst({
    where: {
      name,
    },
  });
  name = name.toLowerCase();
  if (!dugaciji) {
    const newProizvod = await prisma.galerija.create({
      data: {
        name,
        image,
        boje,
        description,
      },
    });
  }
};

const readFile = (
  req: NextApiRequest,
  saveLocally: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/imgs");
    options.filename = (name, ext, path, form) => {
      return `sliksa${getExt(path.originalFilename)}`;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      if (files){
        console.log(files.file[0].newFilename, "faJLNEJM");
      const oldPath = files.file[0].filepath;
      const filename = `${fields.ime[0]}${getExt(files.file[0].newFilename)}`;
      const newPath = path.join(process.cwd(), "/public/imgs", filename);
      const readStream = fs.createReadStream(oldPath);
      const writeStream = fs.createWriteStream(newPath);
      readStream.pipe(writeStream);
      readStream.on("end", () => {
        fs.unlinkSync(oldPath);
      });
      
      const name = fields.ime[0];
      console.log(name);
      const image = `/imgs/${filename}`;
      console.log(image);
      const boje = fields.boje[0].split(",");
      console.log(boje);
      const description = fields.deskripcija[0];
      console.log(description);
      create(name, image, boje, description);
      resolve({ fields, files });
      }else{
      const name = fields.ime[0];
      console.log(name);
      const image = `/imgs/pocetna`;
      console.log(image);
      const boje = fields.boje[0].split(",");
      console.log(boje);
      const description = fields.deskripcija[0];
      console.log(description);
      create(name, image, boje, description);
      resolve({ fields, files });
      }
      
     
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    await readFile(req, true);
    return res.status(200).json({ success: true });
  } else {
    return res.status(405);
  }
};

export default handler;
const getExt = (part: string | null) => {
  return part?.slice(part?.lastIndexOf("."));
};

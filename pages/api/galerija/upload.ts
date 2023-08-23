import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) {
          return res.status(500).json({ error: "Error uploading file" });
        }

        // 'files' will contain the uploaded file details
        const uploadedFile = files.file;

        res.status(200).json({ message: "File uploaded successfully" });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred during upload" });
    }
  } else {
    res.status(405).end();
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import dbConnect from "../../../utils/db";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();

  if (method === "PUT") {
    try {
      const product = await Product.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  }
  if (method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(201).json({ data: "product has been deleted successfully" });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  }
}

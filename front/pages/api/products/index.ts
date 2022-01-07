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
  const { method } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({ data: product });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  }
}

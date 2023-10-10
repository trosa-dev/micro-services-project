import { NextApiRequest, NextApiResponse } from "next/types";
import { pensionSystemAxiosInstance } from "src/configs/pensionSystemAxiosInstance";

type ResponseData = {
  message: string;
};

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {

    await pensionSystemAxiosInstance.get('heartbeat');

    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'API Pension System is not online' });
  }
}

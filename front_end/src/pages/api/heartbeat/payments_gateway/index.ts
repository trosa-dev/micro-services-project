import { NextApiRequest, NextApiResponse } from "next/types";
import { paymentsGatewayAxiosInstance } from "src/configs/paymentsGatewayAxiosInstance";

type ResponseData = {
  message: string;
};

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    await paymentsGatewayAxiosInstance.get('heartbeat');

    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'API Payments Gateway is not online' });
  }
}

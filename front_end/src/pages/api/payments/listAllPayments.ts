import { isAxiosError } from "axios";
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

    //Fazer uma chamada POST para a rota localhost:3004 com os parâmetros
    const { data } = await pensionSystemAxiosInstance.get('payments');

    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    if (isAxiosError(error)) {
      // Verifique se a mensagem de erro contém "Unique constraint failed on the fields: (`email`)"
      res.status(409).json({ message: error.response?.data.message });

      return;
    }
    res.status(400).json({ message: 'Something went wrong' + error });
  }
}

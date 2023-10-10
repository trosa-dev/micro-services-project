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
    // Extrair os parâmetros da requisição
    const name = req.body.name as string;
    const email = req.body.email as string;

    //Fazer uma chamada POST para a rota localhost:3004 com os parâmetros
    const response = await pensionSystemAxiosInstance.post('users', {
      name,
      email,
    });

    //Extrair a mensagem da resposta
    const message = response.data.message;

    //Responder com a mensagem
    res.status(200).json({ message });
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

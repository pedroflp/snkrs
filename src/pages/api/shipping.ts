// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addDays } from 'date-fns';
import frete from 'frete';
import type { NextApiRequest, NextApiResponse } from 'next';

type ShippingRequestBody = {
  cep: string,
  productWeight: number;
  price: number;
};

export type IShippingData = {
  code?: string,
  name: string,
  price: number,
  deliveryOnWeekend: boolean,
  deliveryDays: number,
  deliveryDate: string
}

export type IShippingAddress = {
  cep: string,
  city: string,
  neighborhood: string,
  state: string,
  street: string,
}

export type ShippingResponse = {
  data?: {
    address?: IShippingAddress,
    shipping: IShippingData[],
  },
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShippingResponse>
) {
  const { cep, productWeight = 1000, price } = JSON.parse(req.body) as ShippingRequestBody;

  const cepValidation = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
    method: 'GET'
  }).then(res => res.json());

  if (cepValidation?.errors?.length > 0)
    return res.status(400).json({ error: 'Não foi possível encontrar esse CEP!' });

  const defaultShippingInfo = {
    cepDestino: cep,
    formato: frete.formatos.caixaPacote,
    comprimento: 30,
    largura: 20,
    altura: 12,
    diametro: 1,
    peso: productWeight / 1000, // kg
    valorDeclarado: price,
    sCepOrigem: '02176010',
  }

  const [pac, sedex] = await Promise.all([
    ...[frete.servicos.pac, frete.servicos.sedex].map(service =>
      frete({
        ...defaultShippingInfo, servico: service,
      }).precoPrazo(cep)
    )
  ]);

  console.log(pac, sedex)

  res.status(200).json({
    data: {
      address: cepValidation,
      shipping: [...pac, ...sedex].map(service => ({
        code: service.codigo || service.code,
        name: service.name.replace('A VISTA', ''),
        price: parseFloat(service.valor),
        deliveryOnWeekend: service.entregaSabado === 'S',
        deliveryDays: parseInt(service.prazoEntrega),
        deliveryDate: addDays(new Date(), parseInt(service.prazoEntrega)).toISOString()
      }))
    }
  });
}

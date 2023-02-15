import type { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

import { CartInfoProps } from './../../components/Cart/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { cartInfo } = req.body

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." })
  }

  if (!cartInfo) {
    return res.status(400).json({ error: "Price not found" })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const lineItems = cartInfo.map((item: CartInfoProps) => {
    return {
      price: item.defaultPriceId,
      quantity: item.quantity
    }
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: lineItems
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}

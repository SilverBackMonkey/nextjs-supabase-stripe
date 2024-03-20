import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {amount, productName, quantity, currency} = req.body;
  console.log("******************************** amount: ", amount)
  console.log("******************************** productName: ", productName)
  console.log("******************************** quantity: ", quantity)
  console.log("******************************** currency: ", currency)
  console.log("******************************** process.env.STRIPE_SECRET_KEY: ", process.env.STRIPE_SECRET_KEY)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY||"");
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: 'donate',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            images:["https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"],
            name: "product name",
          },
          unit_amount: 12 * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };

  const checkoutSession: Stripe.Checkout.Session = 
    await stripe.checkout.sessions.create(params);
  console.log(checkoutSession.id)
    res.status(200).json({ id: checkoutSession.id });
}
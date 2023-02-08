import type { AppProps } from 'next/app'
import { Container } from '../styles/pages/app'
import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/CartContext'
import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '../styles/global'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

globalStyles()

const stripeKey = `${process.env.STRIPE_PUBLIC_KEY}`
const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
const cancelUrl = `${process.env.NEXT_URL}/`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={stripeKey}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency='BRL'
      billingAddressCollection={true}
      shouldPersist
    >
      <CartContextProvider>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
        <ToastContainer />
      </CartContextProvider>
    </CartProvider>
  )
}

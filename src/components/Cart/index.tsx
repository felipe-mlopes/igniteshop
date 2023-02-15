import axios from "axios";
import { useShoppingCart } from "use-shopping-cart";
import { CartContent } from "./CartContent";
import * as Dialog from "@radix-ui/react-dialog";

import { X } from "phosphor-react";
import { Handbag } from 'phosphor-react'
import { AmountTotal, ButtonShop, CartLogo, CloseButton, Content, Overlay, PriceTotal, Sumary, Title } from "./styles";

export interface CartInfoProps {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
  defaultPriceId: string
}

export function Cart() {
  const { cartDetails, cartCount, clearCart } = useShoppingCart()

  const cartEntries: any = Object.values(cartDetails!).map(entry => (
    <CartContent key={entry.id} entry={entry} />
  ))

  const cartInfo: CartInfoProps[] = Object.values(cartDetails!).map(product => ({
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
    price: product.price,
    quantity: product.quantity,
    defaultPriceId: product.defaultPriceId
  }))

  const priceTotal = cartEntries.map((item: any) => {
    const price = item.props.entry.price 
    const formatPrice = Number(price.toString().replace("R$", '').replace(',', '.').trim())
    const amount = item.props.entry.quantity

    return formatPrice * amount
  })

  const total = priceTotal.length > 0 ? priceTotal.reduce((acc: number, element: number) => {
    return acc + element
  }) : 0

  const formatTotal = new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  }).format(total)

  
  async function handleBuyButton() {
  try {
    const response = await axios.post('/api/checkout', {
      cartInfo
    })

    const { checkoutUrl } = response.data

    clearCart()

    window.location.href = checkoutUrl
  } catch (err) {
    alert('Falha ao redirecionar ao checkout!')
  }
}

  return (
    <Dialog.Root >
      <Dialog.Trigger asChild  >
        <CartLogo className='cart' >
          { cartCount! > 0 && <span>{cartCount}</span> }
          <Handbag weight='bold' />
        </CartLogo>   
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X />
          </CloseButton>
          <Title>Sacola de compras</Title>
          {cartEntries}
          <Sumary>
            <AmountTotal>
              <p>Quantidade</p>
              <p>{cartCount} itens</p>
            </AmountTotal>
            <PriceTotal>
              <p>Valor total</p>
              <strong>{formatTotal}</strong>
            </PriceTotal>
            <ButtonShop onClick={handleBuyButton}>Finalizar compra</ButtonShop>
          </Sumary>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
import axios from "axios";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { CartContent } from "./CartContent";
import * as Dialog from "@radix-ui/react-dialog";

import { X } from "phosphor-react";
import { Handbag } from 'phosphor-react'
import { AmountTotal, ButtonShop, CartLogo, CloseButton, Content, Overlay, PriceTotal, Sumary, Title } from "./styles";


export function Cart() {
  const { cartDetails, totalPrice, cartCount, clearCart, removeItem } = useShoppingCart()

  const cartEntries = Object.values(cartDetails ?? {}).map(entry => (
    <CartContent key={entry.id} entry={entry} removeItems={removeItem(entry.id)!} />
  ))

  const priceTotal = formatCurrencyString({
    value: totalPrice!,
    currency: 'BRL',
    language: 'pt-BR'
  })

  async function handleBuyButton() {
  try {
    const response = await axios.post('/api/checkout', {
      // priceId: product.defaultPriceId
      products: []
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
          <span>{cartCount}</span>
          {/* { cartCount! > 0 && <span>{cartCount}</span> } */}
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
              <strong>{priceTotal}</strong>
            </PriceTotal>
            <ButtonShop>Finalizar compra</ButtonShop>
          </Sumary>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
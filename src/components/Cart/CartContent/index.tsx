import Image from "next/image";
import { CartContainer, DescriptionWrapper } from "./styles";
import { useShoppingCart } from 'use-shopping-cart'
import { CartActions, CartEntry as ICartEntry } from 'use-shopping-cart/core'

export function CartContent({ entry, removeItems }: {
  entry: ICartEntry, removeItems: CartActions['removeItem']
}) {
  const { removeItem  } = useShoppingCart()
  
  return (
    <CartContainer>
      { entry.image ? <Image src={entry.image} alt='' /> : null }      
      <DescriptionWrapper>
        <span>
          <p>{entry.name}</p>
          <strong>{entry.price}</strong>
        </span>
        <button onClick={() => removeItem(entry.id)}>
          Remover
        </button>
      </DescriptionWrapper>
    </CartContainer>
  )
}
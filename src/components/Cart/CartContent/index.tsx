import Image from "next/image";
import { CartContainer, DescriptionWrapper, ImageWrapper } from "./styles";
import { CartEntry as ICartEntry } from 'use-shopping-cart/core'
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

export function CartContent({ entry }: { entry: ICartEntry }) {
  const { removeItem } = useContext(CartContext)

  return (
    <CartContainer>
      <ImageWrapper>
        <Image src={entry.imageUrl} width={95} height={95} alt='' />    
      </ImageWrapper>
      <DescriptionWrapper>
        <span>
          <p>{entry.name}</p>
          <div>
            <strong>{entry.price}</strong>
            <span>{entry.quantity}{" x"}</span>
          </div>
        </span>
        <button onClick={() => removeItem(entry.id)}>
          Remover
        </button>
      </DescriptionWrapper>
    </CartContainer>
  )
}
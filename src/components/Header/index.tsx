import Image from "next/image";
import Link from "next/link";

import { useShoppingCart } from "use-shopping-cart";

import { Cart } from "../Cart";

import { Handbag } from "phosphor-react";
import logoImg from '../../assets/logo.svg'
import { CartEmpty, HeaderContainer } from "./sytles";

export function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="" />
      </Link>
      { cartCount! > 0 ? 
        <Cart /> : 
        <CartEmpty>
          <Handbag weight='bold' />
        </CartEmpty> 
      }
    </HeaderContainer>
  )
}
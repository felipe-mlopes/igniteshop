import { createContext, ReactNode } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  addItem: (product: Product, options: any) => void,
  removeItem: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartProviderProps) {
  const { addItem, removeItem } = useShoppingCart()

  return (
    <CartContext.Provider value={
      {addItem, removeItem}
    }
    >
      {children}
    </CartContext.Provider>
  )
}
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Head from "next/head"

import Stripe from "stripe"
import { stripe } from "../../lib/stripe"

import { useShoppingCart } from "use-shopping-cart"
import { Product } from "use-shopping-cart/core"

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { toast } from "react-toastify"

export interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function ProductAvailable({ product }: ProductProps) {
  const { addItem } = useShoppingCart()
  const { name, imageUrl, price, description } = product

  const item: Product = {
      name: product.name,
      sku: product.id,
      price: Number(product.price),
      currency: 'BRL',
      image: product.imageUrl
    }

  function handleAddToCart() {
    addItem(item, { count: 1 })
    toast.success('Produto adicionado ao carrinho', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    })
    
  }
  
  return (
    <>
      <Head>
        <title>{name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{name}</h1>
          <span>{price}</span>

          <p>{description}</p>

          <button onClick={handleAddToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MLH5Wy0Y97hDAC' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        // defaultPriceId: price.id,
        // sku: product.id,
        // currency: price.currency
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
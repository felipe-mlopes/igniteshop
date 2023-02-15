import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"

import Stripe from "stripe"
import { stripe } from "../../lib/stripe"

import { useContext } from "react"
import { toast } from "react-toastify"

import { CartContext } from "../../contexts/CartContext"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { LoadingProduct } from "../../components/Loading/LoadingProduct"

export interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
    defaultPriceId: string,
    sku: string,
    currency: 'BRL',
  }
}

export default function ProductAvailable({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { name, imageUrl, price, description } = product
  const { addItem } = useContext(CartContext)

  function handleAddToCart() {
    addItem(product, {})
    toast.success('Produto adicionado ao carrinho', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    })
  }


  if(isFallback) {
    return <LoadingProduct />
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
    fallback: true
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
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
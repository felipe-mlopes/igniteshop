import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartLogo = styled('div', {
  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  cursor: 'not-allowed',
  position: 'relative',

  'svg': {
    color: '$gray500',
    fontSize: 24,
  },

  '&.cart': {
    span: {
      display: 'flex',
      justifyContent: 'center',
      background: '$green500',
      border: '3px solid $gray900',
      borderRadius: '50%',
      fontSize: '0.875rem',
      color: '$white',
      width: '1.5rem',
      height: '1.5rem',
      position: 'absolute',
      top: -7,
      right: -7,
    },

    'svg': {
      color: '$gray300'
    },

    cursor: 'pointer',
  }
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  height: '100vh',
  inset: '0 0 0 70%',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  background: '$gray800',
  position: 'fixed',
  inset: '0 0 0 70%',
  padding: '4.5rem 3rem 3rem',
})

export const Title = styled(Dialog.Title, {
  color: '$gray100',
  fontSize: '$lg',
  lineHeight: 1.6,
})

export const CloseButton = styled(Dialog.Close, {
  position: 'fixed',
  top: 24,
  right: 24,
  background: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',

  'svg': {
    color: '$gray500',
    fontWeight: 'bold',
    fontSize: '$xl',
  }
})

export const Sumary = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4375rem',
  marginTop: 'auto'
})

export const AmountTotal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray100'
  }
})

export const PriceTotal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: {
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$gray100'
  },

  strong: {
    fontSize: '$xl',
    lineHeight: 1.4,
    color: "$gray100"
  }
})

export const ButtonShop = styled('button', {
    marginTop: 'calc(3.5625rem - 0.4375rem)', 
    padding: '1.25rem 7.78rem',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    },
})



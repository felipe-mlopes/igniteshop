import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const CartEmpty = styled('div', {
  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  cursor: 'not-allowed',

  'svg': {
    color: '$gray500',
    fontSize: 24,
  },
})
import { styled } from '../../../styles';

export const CartContainer = styled('main', {
  display: 'flex',
  alignItems: 'center'

})

export const DescriptionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',

  span: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',

    p: {
      fontSize: '$md',
      lineHeight: 1.6,
      color: '$gray300'
    },

    strong: {
      fontSize: '$md',
      lineHeight: 1.6,
      color: '$gray100'
    },
  },

  button: {
    backgroundColor: 'transparent',
    border: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$green500',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300'
    }
  }
})
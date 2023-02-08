import { styled } from '../../../styles';

export const CartContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem'

})

export const ImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  }
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

    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',

      strong: {
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray100',
        marginRight: '2rem'
      },
  
      span: {
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray100'  
      },
    }
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
import { styled } from "../../../styled-system/jsx";

export const Container = styled('div', {
  base: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '9999', 
  },
})

export const Paimon = styled('img', {
  base: {
    width: '180px',
    height: '264.76px',
  },
})
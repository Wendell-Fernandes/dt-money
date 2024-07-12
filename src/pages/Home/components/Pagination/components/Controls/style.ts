import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Container = styled.div`
display: flex;
gap: 1rem;
align-items: center;
padding: 2.5rem 0;
`

export const IconButton = styled.button`
background-color: transparent;
border: none;
color: ${(p) => p.theme.gray5};
cursor: pointer;
`

export const ArrowLeft = styled(CaretLeft)`
`

export const ArrowRight = styled(CaretRight)`
`

export const Pages = styled.div`
display: flex;
gap: 0.5rem;
`

export const Page = styled.button`
background-color: ${(p) => p.theme.gray6};
color: ${(p) => p.theme.gray5};
border: none;
border-radius: 6px;
font-size: 1rem;
font-weight: bold;
line-height: 140%;
width: 2.5rem;
height: 2.5rem;
cursor: pointer;

&.selected{
  background-color: ${(p) => p.theme.green5};
  color: ${(p) => p.theme.white};
}
`

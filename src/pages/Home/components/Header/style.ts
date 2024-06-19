import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 2.5rem;
padding-top: 2rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Img = styled.img`
height: 2.5rem;
width: 2.5rem;
`

export const Title = styled.p`
font-size: 1.625rem;
line-height: 160%;
font-weight: bold;
`

export const Button = styled.button`
font-size: 1rem;
font-weight: bold;
color: ${(p) => p.theme.white};
line-height: 160%;

background-color: ${(p) => p.theme['green-700']};
border: none;
border-radius: 6px;
cursor: pointer;

padding: 0.75rem 1.25rem;

&:hover {
  background-color: ${(p) => p.theme['green-500']};
}
`

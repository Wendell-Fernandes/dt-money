import styled from 'styled-components'

export const Container = styled.div`
display: flex;
gap: 1rem;

padding-top: 4rem;
padding-bottom: 1.5rem;
`

export const Input = styled.input`
flex: 1;

font-size: 1rem;
line-height: 140%;
color: ${(p) => p.theme['gray-500']};

padding: 1rem;

background-color: ${(p) => p.theme['gray-900']};
border: none;
outline: none;
border-radius: 6px;
`

export const Button = styled.button`
display: flex;
align-items: center;
gap: 0.75rem;
padding: 0.875rem 2rem;

font-size: 1rem;
font-weight: bold;
line-height: 160%;
color: ${(p) => p.theme['green-500']};

background-color: ${(p) => p.theme.transparent};
border: 1px solid ${(p) => p.theme['green-500']};
border-radius: 6px;

&:hover{ 
  background-color: ${(p) => p.theme['green-500']};
  color: ${(p) => p.theme.white};
}
`

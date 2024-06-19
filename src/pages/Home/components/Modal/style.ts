import { X } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Fade = styled.div`
width: 100vw;
height: 100vh;

position: absolute;
top: 0;
left: 0;

background-color: black;
opacity: 0.75;
`
export const BoxModal = styled.div`
width: 33.375rem;
height: 33rem;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background-color: ${(p) => p.theme['gray-800']};
border-radius: 6px;

display: flex;
flex-direction: column;

padding: 3rem 3rem 2.5rem 3rem;
`

export const Title = styled.p`
font-size: 1.5rem;
font-weight: bold;
line-height: 140%;
`

export const BoxTextFields = styled.p`
display: flex;
flex-direction: column;
gap: 1rem;
margin: 2rem 0 1.5rem 0;
`

export const TextField = styled.input`
border: none;
outline: none;
background-color: ${(p) => p.theme['gray-900']};
color: ${(p) => p.theme['gray-300']};

font-size: 1rem;
font-weight: 140%;

padding: 1rem;
border-radius: 6px;
`

export const BoxButtons = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

export const TypeButton = styled.button`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;

font-size: 1rem;
line-height: 160%;

padding: 1rem 0;
background-color: ${(p) => p.theme['gray-700']};
border: none;
border-radius: 6px;
color: ${(p) => p.theme['gray-300']};
cursor: pointer;

&:hover{
  background-color: ${(p) => p.theme['gray-600']}
}
`

export const InputButton = styled(TypeButton)`
& svg {
  color: ${(p) => p.theme['green-500']};
}
&.selected {
  background-color: ${(p) => p.theme['green-700']};
  color: ${(p) => p.theme.white}
}
&.selected svg{
  color: ${(p) => p.theme.white}
}
`

export const OutputButton = styled(TypeButton)`
& svg {
  color: ${(p) => p.theme['red-500']};
}
&.selected {
  background-color: ${(p) => p.theme['red-500']};
  color: ${(p) => p.theme.white}
}
&.selected svg{
  color: ${(p) => p.theme.white}
}
`

export const SubmitButton = styled.button`
border: none;
background-color: ${(p) => p.theme['green-500']};
font-size: 1rem;
font-weight: bold;
line-height: 160%;
color: ${(p) => p.theme.white};
padding: 1rem;
border-radius: 6px;
margin-top: 2.5rem;
`

export const Close = styled(X)`
position: absolute;
top: 1.5rem;
right: 1.5rem;
cursor: pointer;
`

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled, { css } from 'styled-components'

const Button = css`
font-size: 1rem;
font-weight: bold;
color: ${(p) => p.theme.white};
line-height: 160%;

background-color: ${(p) => p.theme.green5};
border: none;
border-radius: 6px;
cursor: pointer;

padding: 0.75rem 1.25rem;

&:not(:disabled):hover {
  background-color: ${(p) => p.theme.green7};
  transition: background-color 0.2s;
}
`

export const Trigger = styled(Dialog.Trigger)`
${Button}
padding: 0.75rem 1.25rem;
`

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
inset: 0;
width: 100vw;
height: 100vh;
background-color: rgba( 0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width: 32rem;

background-color: ${(p) => p.theme.gray8};
border-radius: 6px;

display: flex;
flex-direction: column;

padding: 2.5rem 3rem;
`

export const Title = styled(Dialog.Title)``

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
`

export const Input = styled.input`
border: none;
outline: none;
background-color: ${(p) => p.theme.gray9};
color: ${(p) => p.theme.gray3};

font-size: 1rem;
font-weight: 140%;

padding: 1rem;
border-radius: 6px;
border: 1px solid ${(p) => p.theme.transparent};

&:focus{
  border: 1px solid ${(p) => p.theme.green5};
}

&[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
&[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
`

export const BoxButtons = styled(RadioGroup.Root)`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
`

interface IButtonsType {
	variant: 'income' | 'outcome'
}

export const ButtonType = styled(RadioGroup.Item)<IButtonsType>`
background-color: ${(p) => p.theme.gray7};
font-size: 1rem;
font-weight: normal;
color: ${(p) => p.theme.gray3};
border: none;
line-height: 160%;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
padding: 1rem 0;
border-radius: 6px;
cursor: pointer;

svg{    
  font-weight: 900;
  color: ${(p) => (p.variant === 'income' ? p.theme.green5 : p.theme.red5)};
}

&[data-state='unchecked']:hover {
  transition: background-color 0.2s;
  background-color: ${(p) => p.theme.gray6};
}

&[data-state='checked'] {
  color: ${(p) => p.theme.white};
  background-color: ${(p) => (p.variant === 'income' ? p.theme.green5 : p.theme.red5)};
  
  svg {
    color: ${(p) => p.theme.white};
  };
}
`

export const Submit = styled.button`
${Button}
padding: 1rem;
margin-top: 1.5rem;

&:disabled{
  opacity: 0.6;
  cursor: not-allowed;
}
`

export const Close = styled(Dialog.Close)`
background-color: ${(p) => p.theme.transparent};
border: none;
color: ${(p) => p.theme.gray5};
position: absolute;
top: 1.5rem;
right: 1.5rem;
cursor: pointer;
&:hover{
  color: ${(p) => p.theme.gray1};
}
`

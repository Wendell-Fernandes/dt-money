import styled from 'styled-components'

export const Container = styled.form`
display: flex;
gap: 1rem;

padding-top: 4rem;
padding-bottom: 1.5rem;
`

export const BoxInput = styled.div`
flex: 1;

display: flex;
justify-content: space-between;
align-items: center;
border-radius: 6px;
border: 1px solid ${(p) => p.theme.gray9};

background-color: ${(p) => p.theme.gray9};

*{
  color: ${(p) => p.theme.gray5};
}

&:focus-within{
  border: 1px solid ${(p) => p.theme.green5};
}
`

export const Input = styled.input`
flex: 1;

padding: 1rem;
font-size: 1rem;
line-height: 140%;

background-color: ${(p) => p.theme.gray9};
border: none;
outline: none;
border-radius: 6px;
`

export const ClearInput = styled.button`
padding: 0 1rem;
background-color: ${(p) => p.theme.gray9};
border: none;
cursor: pointer;

&:disabled{
  cursor: default;
  *{
    color: ${(p) => p.theme.transparent};
  }
}
`

export const Submit = styled.button`
display: flex;
align-items: center;
gap: 0.75rem;
padding: 0.875rem 2rem;

font-size: 1rem;
font-weight: bold;
line-height: 160%;
color: ${(p) => p.theme.green5};

background-color: ${(p) => p.theme.transparent};
border: 1px solid ${(p) => p.theme.green5};
border-radius: 6px;
cursor: pointer;

&:hover{ 
  background-color: ${(p) => p.theme.green5};
  color: ${(p) => p.theme.white};
  transition: background-color 0.2s;
}
`

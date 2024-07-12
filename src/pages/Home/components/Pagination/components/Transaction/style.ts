import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;

color: ${(p) => p.theme.gray3};
font-size: 1rem;
line-height: 160%;

padding: 1.25rem 2rem;
background-color: ${(p) => p.theme.gray7};
border-radius: 6px;
`
export const Description = styled.p`
width: 50%;
`

interface IPrice {
	type: 'income' | 'outcome'
}

export const Price = styled.p<IPrice>`
width: 15%;
color: ${(p) => (p.type === 'income' ? p.theme.green5 : p.theme.red5)}
`

export const Category = styled.p`
width: 15%;
`

export const Day = styled.p`
text-align: end;
width: 20%;
`

import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;

color: ${(p) => p.theme['gray-300']};
font-size: 1rem;
line-height: 160%;

padding: 1.25rem 2rem;
background-color: ${(p) => p.theme['gray-700']};
border-radius: 6px;
`
export const Name = styled.p`
width: 50%;
`

interface IValue {
	color: 'red' | 'green'
}

export const Value = styled.p<IValue>`
width: 20%;
color: ${(p) => (p.color === 'red' && p.theme['red-500']) || (p.color === 'green' && p.theme['green-500'])}
`

export const Category = styled.p`
width: 15%;
`

export const Day = styled.p`
text-align: end;
width: 15%;
`

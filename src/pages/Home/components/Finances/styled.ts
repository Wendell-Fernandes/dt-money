import styled from 'styled-components'

export const Container = styled.div`
display: flex;
gap: 2rem;
`

interface IBox {
	color: 'gray' | 'green'
}

export const Box = styled.div<IBox>`
background: ${(p) => (p.color === 'gray' && p.theme['gray-600']) || (p.color === 'green' && p.theme['green-700'])};
border-radius: 6px;
padding: 1.5rem 1.5rem 1.5rem 2rem;
display: flex;
flex-direction: column;
gap: 0.75rem;
`

interface ITitle {
	color: 'red' | 'green' | 'white'
}

export const Title = styled.div<ITitle>`
display: flex;
align-items: center;
justify-content: space-between;
width: 18.5rem;
color: ${(p) =>
	(p.color === 'red' && p.theme['red-500']) ||
	(p.color === 'green' && p.theme['green-500']) ||
	(p.color === 'white' && p.theme.white)};
`

export const Name = styled.p`
color: ${(p) => p.theme['gray-300']};
font-size: 1rem;
line-height: 160%;
`

export const Value = styled.p`
font-size: 2rem;
line-height: 140%;
font-weight: bold;
`

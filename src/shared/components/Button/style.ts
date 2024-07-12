import styled from 'styled-components'

export const StyledButton = styled.button``

export const BaseButton = styled.button`
color: ${(p) => p.theme.gray1};
font-size: 1rem;
font-weight: bold;
line-height: 160%;

border: none;
cursor: pointer;
`

export const Contained = styled(BaseButton)``

export const Outlined = styled(BaseButton)``

export const TwoTone = styled(BaseButton)``

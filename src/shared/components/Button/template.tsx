import type { IChildren } from '../../types/global'
import { StyledButton } from './style'

export function Button({ children }: IChildren) {
	return <StyledButton>{children}</StyledButton>
}

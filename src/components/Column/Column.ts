import { css } from "@emotion/core"
import styled from "@emotion/styled"

type Props = {
  theme: {
    space: string[]
    sizes: string[]
  }
}

export default styled.div`
  ${({ theme: { space, sizes } }: Props) => css`
    margin: 0 auto;
    max-width: ${space[0]};
    padding: ${sizes[1]};
  `}
`

import styled, { css } from 'styled-components'

export const Line = ({ lineColor }) => <LineStyled lineColor={lineColor} />

const LineStyled = styled.div`
  width: 100%;
  height: 1px;
  ${({ lineColor }) =>
    lineColor === 'orange'
      ? css`
          border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
        `
      : css`
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
        `}
`

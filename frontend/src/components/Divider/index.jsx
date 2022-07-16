import styled from 'styled-components'

function Divider({ lineColor }) {
  return <StyledDivider lineColor={lineColor} />
}

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: ${({ lineColor, theme }) => {
    if (lineColor === 'orange') return '1px solid ' + theme.colors.orange
    else return '1px solid ' + theme.colors.grey
  }};
`

export { Divider }

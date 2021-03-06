import styled from 'styled-components'

export const StyledToolbar = styled.div`
  height: 50px;
  display: inline-block;
`

export const StyledToolbarGrid = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 7px 0;
  width: 50px;
`

export const StyledButton = styled.div`
  width: 36px;
  height: 36px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  & > img {
    width: 32px;
  }
`

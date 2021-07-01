import styled from 'styled-components'

export const ResultSection = styled.section`
  margin-top: 2em;
  margin-bottom: 120px;
`
export const ResultTittle = styled.h3`
  color: #e86060;
  font-size: 2em;
  margin-bottom: 1em;
`
export const ResultContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (max-width: 1100px){
    grid-template-columns: repeat(3,auto);
  }
  @media (max-width: 850px){
    grid-template-columns: repeat(1,auto);
    align-items: center;
    justify-items:center;
  }
`
export const Card = styled.div`
  width: 190px;
`
export const CardImg = styled.img`
  width: 100%;
  height: auto;
`
export const CardIcons = styled.div`
  position: absolute;
`
export const CardDescriptionTittle = styled.h4`
  margin:0;
`

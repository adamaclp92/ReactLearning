import styled from 'styled-components'

export const Title = styled.h2`
text-align: center;
margin-top: 4rem;
margin-bottom: 2rem;
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 50px;
width: 100%;
`

export const ProductContainer = styled.div`
border: 1px solid black;
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
img {
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
}
button {
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
}
&:hover {
  img {
    opacity: 0.8;
  }
  button {
    opacity: 0.85;
    display: flex;
  }
}
`;

export const ProductName = styled.span`
position: absolute;
bottom: 10px;
left: 10px
`
export const ProductPrice = styled.span`
position: absolute;
bottom: 10px;
right: 20px;
`


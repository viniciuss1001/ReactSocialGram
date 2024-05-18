import styled from 'styled-components'

export const NavbarStyled = styled.nav`
     padding: 2rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: royalblue;
     border-bottom: 1px solid #363636;

`

export const FormStyled = styled.form`
     position: relative;
     width: 20%;

     i{
          height: 2rem;
          width: 2rem;
     }
     input{
          padding: .5rem;
          border-radius: .3rem;
          border: none;
          margin: 0;
          outline: none;
          width: 90%;

          ::placeholder{
               color: gray;
          }
     }
`
export const ListComponent = styled.ul`
     list-style: none;
     gap: .5rem;
     font-size: 1.2rem;
     font-style: none;
     a{
          color: #ffff;
          font-size: 1.2rem;
          text-decoration: none;
          margin: 0 1rem;
          transition: .3s ease;

          &:hover{
               color: #f8f8f8;
               text-decoration: underline;
          }
     }

`
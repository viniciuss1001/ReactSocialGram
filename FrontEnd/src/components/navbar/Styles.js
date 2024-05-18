import styled from 'styled-components'

export const Logo = styled.span`
     a{
          color: #fff;
          text-decoration: none;
          text-align: center;
     }
`

export const NavbarStyled = styled.nav`
     padding: 2rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: #003049;
     border-bottom: 1px solid #363636;

`

export const FormStyled = styled.form`
     position: relative;
     width: 20%;
     background: #0f0f0f;
     border-radius: 4px;
     height: fit-content;
     padding: 1rem;
     margin: 0 auto;

     input{
          padding: .5rem;
          border-radius: none;
          border: none;
          margin: 0;
          outline: none;
          width: 90%;
          background-color: transparent;

          ::placeholder{
               color: gray;
          }
          &:focus{
               border-bottom: 1px solid #fff;
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
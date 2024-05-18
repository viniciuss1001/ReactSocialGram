import styled from 'styled-components'

export const FormContainerDiv = styled.div`
     width: 30%;
     background-color: #003049;
     border-radius: 1rem;
     padding: 2rem 1rem;
     display: flex;
     flex-direction: column;
     gap: 1rem;
     margin: 2rem auto;

     h2{
          text-align: center;
          font-size: 2rem;
     }
     p{
          text-align: center;
          line-height: 1rem;

          a{
               color: #fff;
               text-decoration: none;

               &:hover{
                    text-decoration: underline;
               }
          }
     }

`

export const FormContent = styled.form`
     margin: 0 auto;
     position: relative;
     width: 90%;
     padding: 1rem;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 1rem;

     input{
          width: 80%;
          padding: .5rem;
          outline: none;
          border: none;
          border-radius: 0.2rem;
          margin: 0 auto;
     }

     button{
          cursor: pointer;
          padding: 0.5rem;
          border: none;
          border-radius: 1rem;
          width: 30%;
          background-color: #ffff;
     }

`
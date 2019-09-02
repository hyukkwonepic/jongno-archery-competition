import styled from 'styled-components';
import Info from 'components/Info';

export const Content = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 6rem;
`;

export const StyledInfo = styled(Info)`
  margin-bottom: 2rem;
`;

export const Form = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 5rem 2rem 4rem 2rem;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 5rem;
    color: #333;
  }

  form {
    div {
      margin-bottom: 2rem;

      label {
        font-size: 1.6rem;
        font-weight: 700;
        color: #333;
        display: block;
        margin-bottom: 0.5rem;

        span {
          color: #777;
          display: inline-block;
          margin-left: 0.5rem;
          font-size: 1.6rem;
          margin-top: 0;
        }
      }

      input {
        color: #333;
        background: #f9f9f9;
        border: 0.1rem solid #eee;
        border-radius: 0.5rem;
        height: 4.5rem;
        width: 100%;
        font-size: 1.6rem;
        padding: 0 1.6rem;
      }

      select {
        color: #333;
        background: #f9f9f9;
        border: 0.1rem solid #eee;
        border-radius: 0.5rem;
        height: 4.5rem;
        width: 100%;
        font-size: 1.6rem;
        padding: 0 1.6rem;
        appearance: none;

        background-image: linear-gradient(45deg, transparent 50%, #999 50%),
          linear-gradient(135deg, #999 50%, transparent 50%);
        background-position: calc(100% - 20px) calc(2rem),
          calc(100% - 15px) calc(2rem);
        background-size: 5px 5px, 5px 5px;
        background-repeat: no-repeat;
      }

      span {
        display: block;
        margin-top: 1rem;
        color: #e52528;
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    button[type='submit'] {
      display: block;
      margin: 0 auto;
      margin-top: 4rem;
      width: 12rem;
      border-radius: 10rem;
      font-size: 1.8rem;
      font-weight: 700;
      height: 4.5rem;
      line-height: 4.5rem;
      border: none;
      padding: unset;
      background: #a00000;
      color: #fff;
    }
  }
`;

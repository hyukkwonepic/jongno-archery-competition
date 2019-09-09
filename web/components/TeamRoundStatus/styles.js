import styled from 'styled-components';

export const TeamRound = styled.div`
  width: 100%;
  background: white;
  padding: 5rem 2rem;
  border-radius: 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

    @media only screen and (min-width: 960px) {
      font-size: 2.2rem;
    }
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;

  table {
    min-width: 80rem;

    thead {
      background: #eee;
      tr {
        border-top: 1px solid #999;

        th {
          color: #333;
          font-size: 1.6rem;
          line-height: 1.6rem;
          font-weight: 700;
          font-family: 'Nanum Gothic', sans-serif;
          border-bottom: 1px solid #999;
        }
      }
    }
    tbody {
      tr {
        th {
          font-size: 1.6rem;
          font-family: 'Nanum Gothic', sans-serif;
          border-right: 1px solid #999;
          border-bottom: 1px solid #999;
          background: #eee;
        }

        td {
          font-size: 1.6rem;
          font-family: 'Nanum Gothic', sans-serif;

          a {
            display: block;
            height: 2.2rem;

            svg {
              fill: #777;
            }
          }

          button {
            display: block;
            margin: 0 auto;
            background: unset;
            border: unset;
            padding: unset;
            height: 2.2rem;
            cursor: pointer;

            svg {
              fill: #777;
            }
          }
        }

        td.last {
          border-bottom: 1px solid #999;
        }
      }
    }
  }
`;

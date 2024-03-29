import styled from 'styled-components';

export const SemiproTimetable = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 5rem 2rem 4rem 2rem;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 2rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 5rem;
    color: #333;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;

  table {
    min-width: 40rem;

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

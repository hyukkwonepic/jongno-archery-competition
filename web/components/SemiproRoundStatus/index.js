import React from 'react';
import Link from 'next/link';
import moment from 'moment-timezone';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as S from './styles';

import EditSVG from '../../assets/EditSVG';
import CancelSVG from '../../assets/CancelSVG';

function getTableContent() {
  // First day Sep 21st
  let tableRows = [];
  const startRound = 1;
  const endRound = 6;

  for (let i = (startRound - 1) * 7; i < 7 * endRound; i += 1) {
    const round = Math.floor(i / 7) + 1;
    const baseTime = moment.tz('2019-09-21 09:15', 'Asia/Seoul');
    const roundStartTime = baseTime.add(
      (15 * Math.floor((round - 1) / 3)).toString(),
      'minutes'
    );

    const number = (i % 7) + 1;
    const isFirstNumber = i % 7 === 0;
    const isLastCellOfRound = number === 7;

    tableRows.push(
      <TableRow key={i}>
        {isFirstNumber ? (
          <TableCell align="center" rowSpan={7} component="th" scope="row">
            <strong>{round}대</strong>
            <br />
            <span>({roundStartTime.format('hh:mm')})</span>
          </TableCell>
        ) : null}
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {number}
        </TableCell>
        <TableCell
          className={isLastCellOfRound ? 'last' : ''}
          align="center"
        ></TableCell>
        <TableCell
          className={isLastCellOfRound ? 'last' : ''}
          align="center"
        ></TableCell>
        <TableCell
          className={isLastCellOfRound ? 'last' : ''}
          align="center"
        ></TableCell>
        <TableCell
          className={isLastCellOfRound ? 'last' : ''}
          align="center"
        ></TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          <Link href="/individual/1234">
            <a>
              <EditSVG />
            </a>
          </Link>
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          <button type="button">
            <CancelSVG />
          </button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan="8" align="center">
            실업부 9월 21일(토) 1 ~ 6대
          </TableCell>
        </TableRow>
      </TableHead>
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={1}>
            작대번호
          </TableCell>
          <TableCell align="center" colSpan={1}>
            번호
          </TableCell>
          <TableCell align="center" colSpan={1}>
            이름
          </TableCell>
          <TableCell align="center" colSpan={1}>
            소속 활터
          </TableCell>
          <TableCell align="center" colSpan={1}>
            시/군/구
          </TableCell>
          <TableCell align="center" colSpan={1}>
            휴대폰번호
          </TableCell>
          <TableCell align="center" colSpan={1}>
            수정
          </TableCell>
          <TableCell align="center" colSpan={1}>
            취소
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows.map(item => item)}</TableBody>
    </>
  );
}

// function getSecondDayTableContent() {
//   // First day Sep 22nd
//   let tableRows = [];
//   const startRound = 10;
//   const endRound = 45;
//   for (let i = (startRound - 1) * 7; i < 7 * endRound; i += 1) {
//     const round = Math.floor(i / 7) + 1;
//     const baseTime = moment.tz('2019-09-22 07:00', 'Asia/Seoul');
//     const roundStartTime = baseTime.add(
//       (15 * Math.floor((round - 1) / 3)).toString(),
//       'minutes'
//     );

//     const number = (i % 7) + 1;
//     const isFirstNumber = i % 7 === 0;
//     const isLastCellOfRound = number === 7;

//     tableRows.push(
//       <TableRow key={i}>
//         {isFirstNumber ? (
//           <TableCell align="center" rowSpan={7} component="th" scope="row">
//             <strong>{round}대</strong>
//             <br />
//             <span>({roundStartTime.format('hh:mm')})</span>
//           </TableCell>
//         ) : null}
//         <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
//           {number}
//         </TableCell>
//         <TableCell
//           className={isLastCellOfRound ? 'last' : ''}
//           align="center"
//         ></TableCell>
//         <TableCell
//           className={isLastCellOfRound ? 'last' : ''}
//           align="center"
//         ></TableCell>
//         <TableCell
//           className={isLastCellOfRound ? 'last' : ''}
//           align="center"
//         ></TableCell>
//         <TableCell
//           className={isLastCellOfRound ? 'last' : ''}
//           align="center"
//         ></TableCell>
//         <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
//           <Link href="/individual/1234">
//             <a>
//               <EditSVG />
//             </a>
//           </Link>
//         </TableCell>
//         <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
//           <button type="button">
//             <CancelSVG />
//           </button>
//         </TableCell>
//       </TableRow>
//     );
//   }

//   return (
//     <>
//       <TableHead>
//         <TableRow style={{ borderTop: 'unset' }}>
//           <TableCell colSpan="8" align="center">
//             개인전 9월 22일(토) 10 ~ 45대
//           </TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>{tableRows.map(item => item)}</TableBody>
//     </>
//   );
// }

export default function IndividualRoundStatus() {
  return (
    <S.IndividualRound>
      <h2>작대 현황</h2>

      <S.TableContainer>
        <Table>{getTableContent()}</Table>
      </S.TableContainer>
    </S.IndividualRound>
  );
}

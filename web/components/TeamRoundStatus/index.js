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
  const endRound = 60;

  for (let i = startRound - 1; i < endRound; i += 1) {
    const round = i + 1;
    const baseTime = moment.tz('2019-09-21 12:00', 'Asia/Seoul');
    const roundStartTime = baseTime.add(
      (12 * Math.floor((round - 1) / 3)).toString(),
      'minutes'
    );

    const isFirstNumber = i % 3 === 0;
    tableRows.push(
      <TableRow key={i}>
        {isFirstNumber ? (
          <TableCell align="center" rowSpan={3} component="th" scope="row">
            <span>{roundStartTime.format('HH:mm')}</span>
          </TableCell>
        ) : null}
        <TableCell align="center">{round}</TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center">
          <Link href="/individual/1234">
            <a>
              <EditSVG />
            </a>
          </Link>
        </TableCell>
        <TableCell align="center">
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
          <TableCell colSpan="13" align="center">
            실업부 9월 21일(토) 1 ~ 6대
          </TableCell>
        </TableRow>
      </TableHead>
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={1}>
            시간
          </TableCell>
          <TableCell align="center" colSpan={1}>
            작대
          </TableCell>
          <TableCell align="center" colSpan={1}>
            시/군/구
          </TableCell>
          <TableCell align="center" colSpan={1}>
            소속 활터
          </TableCell>
          <TableCell align="center" colSpan={1}>
            선수 1
          </TableCell>
          <TableCell align="center" colSpan={1}>
            선수 2
          </TableCell>
          <TableCell align="center" colSpan={1}>
            선수 3
          </TableCell>
          <TableCell align="center" colSpan={1}>
            선수 4
          </TableCell>
          <TableCell align="center" colSpan={1}>
            선수 5
          </TableCell>
          <TableCell align="center" colSpan={1}>
            예비선수
          </TableCell>
          <TableCell align="center" colSpan={1}>
            대표 번호
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

export default function TeamRoundStatus() {
  return (
    <S.TeamRound>
      <h2>작대 현황</h2>

      <S.TableContainer>
        <Table>{getTableContent()}</Table>
      </S.TableContainer>
    </S.TeamRound>
  );
}

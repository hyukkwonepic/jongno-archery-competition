import React from 'react';
import moment from 'moment-timezone';
import Link from 'next/link';

import FullTableButton from '../../components/FullTableButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as S from './styles';

import EditSVG from '../../assets/EditSVG';
import CancelSVG from '../../assets/CancelSVG';

function hideMobile(mobile) {
  if (mobile) {
    return (
      mobile.split(mobile.substring(mobile.length - 4, mobile.length))[0] +
      '****'
    );
  }

  return '';
}

function getTableContent({ fullTable, applications, onDelete, onEdit }) {
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

    let id = '';
    let city = '';
    let range = '';
    // let player1 = '';
    // let player2 = '';
    // let player3 = '';
    // let player4 = '';
    // let player5 = '';
    let players = '';
    let substitute = '';
    let mobile = '';

    const application = applications.find(item => {
      if (item.round === round) {
        return item;
      }
    });

    if (application) {
      id = application.id;
      city = application.city;
      range = application.range;
      const { player1, player2, player3, player4, player5 } = application;
      if (player1 && player2 && player3 && player4 && player5) {
        players = `${player1}, ${player2}, ${player3}, ${player4}, ${player5}`;
      }
      substitute = application.substitute;
      mobile = hideMobile(application.mobile);
    }

    tableRows.push(
      <TableRow key={i}>
        {isFirstNumber ? (
          <TableCell align="center" rowSpan={3} component="th" scope="row">
            <strong>{roundStartTime.format('HH:mm')}</strong>
          </TableCell>
        ) : null}
        <TableCell align="center" component="th">
          <strong>{round}</strong>
        </TableCell>
        <TableCell align="center">{city}</TableCell>
        <TableCell align="center">{range}</TableCell>
        <TableCell align="center">{players}</TableCell>
        <TableCell align="center">{substitute}</TableCell>
        <TableCell align="center">{mobile}</TableCell>
        {!fullTable && (
          <>
            <TableCell align="center">
              {application && (
                <button type="button" onClick={id ? () => onEdit(id) : null}>
                  <EditSVG />
                </button>
              )}
            </TableCell>
            <TableCell align="center">
              {application && (
                <button type="button" onClick={id ? () => onDelete(id) : null}>
                  <CancelSVG />
                </button>
              )}
            </TableCell>
          </>
        )}
      </TableRow>
    );
  }

  return (
    <>
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
            선수
          </TableCell>
          <TableCell align="center" colSpan={1}>
            예비선수
          </TableCell>
          <TableCell align="center" colSpan={1}>
            대표 번호
          </TableCell>
          {!fullTable && (
            <>
              <TableCell align="center" colSpan={1}>
                수정
              </TableCell>
              <TableCell align="center" colSpan={1}>
                취소
              </TableCell>
            </>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className="separator">
          <TableCell colSpan="13" align="center">
            단체전 9월 21일(토) 1 ~ 60대
          </TableCell>
        </TableRow>
        {tableRows.map(item => item)}
      </TableBody>
    </>
  );
}

export default function TeamRoundStatus({
  fullTable,
  applications,
  onDelete,
  onEdit
}) {
  return (
    <S.TeamRound>
      {!fullTable && (
        <>
          <h2>작대 현황</h2>

          <Link href="/team/full-table">
            <FullTableButton />
          </Link>
        </>
      )}
      <S.TableContainer>
        <Table>
          {getTableContent({
            fullTable,
            applications,
            onDelete,
            onEdit
          })}
        </Table>
      </S.TableContainer>
    </S.TeamRound>
  );
}

TeamRoundStatus.defaultProps = {
  applications: []
};

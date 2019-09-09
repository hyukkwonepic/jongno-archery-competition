import React from 'react';
import moment from 'moment-timezone';

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

function getFistDayTableContent({ applications, onDelete, onEdit }) {
  // First day Sep 21st
  let tableRows = [];
  const startRound = 1;
  const endRound = 9;

  const baseTime = '2019-09-21 07:00';
  for (let i = (startRound - 1) * 7; i < 7 * endRound; i += 1) {
    const round = Math.floor(i / 7) + 1;

    const roundStartTime = moment
      .tz(baseTime, 'Asia/Seoul')
      .add((15 * Math.floor((round - 1) / 3)).toString(), 'minutes');

    const number = (i % 7) + 1;
    const isFirstNumber = i % 7 === 0;
    const isLastCellOfRound = number === 7;

    let id = '';
    let city = '';
    let range = '';
    let name = '';
    let mobile = '';

    const application = applications.find(item => {
      if (item.round === round && item.number === number) {
        return item;
      }
    });

    if (application) {
      id = application.id;
      city = application.city;
      range = application.range;
      name = application.name;
      mobile = hideMobile(application.mobile);
    }

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
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {city}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {range}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {name}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {mobile}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          <button type="button" onClick={id ? () => onEdit(id) : null}>
            <EditSVG />
          </button>
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          <button type="button" onClick={id ? () => onDelete(id) : null}>
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
            개인전 9월 21일(토) 1 ~ 9대
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
            시/군/구
          </TableCell>
          <TableCell align="center" colSpan={1}>
            소속 활터
          </TableCell>
          <TableCell align="center" colSpan={1}>
            이름
          </TableCell>
          <TableCell align="center" colSpan={1}>
            전화번호
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

function getSecondDayTableContent({ applications, onDelete, onEdit }) {
  // First day Sep 22nd
  let tableRows = [];
  const startRound = 10;
  const endRound = 45;

  const baseTime = '2019-09-22 07:00';
  for (let i = (startRound - 1) * 7; i < 7 * endRound; i += 1) {
    const round = Math.floor(i / 7) + 1;

    const roundGroup = Math.floor((round - startRound) / 9);
    const zoneTime = moment
      .tz(baseTime, 'Asia/Seoul')
      .add(2 * roundGroup, 'hours')
      .add(15 * roundGroup, 'minutes')
      .format('YYYY-MM-DD HH:mm');

    const roundStartTime = moment
      .tz(zoneTime, 'Asia/Seoul')
      .add(
        (15 * Math.floor((round - Number(roundGroup * 9) - 10) / 3)).toString(),
        'minutes'
      );

    const number = (i % 7) + 1;
    const isFirstNumber = i % 7 === 0;
    const isLastCellOfRound = number === 7;

    let id = '';
    let city = '';
    let range = '';
    let name = '';
    let mobile = '';

    const application = applications.find(item => {
      if (item.round === round && item.number === number) {
        return item;
      }
    });

    if (application) {
      id = application.id;
      city = application.city;
      range = application.range;
      name = application.name;
      mobile = hideMobile(application.mobile);
    }

    tableRows.push(
      <TableRow key={i}>
        {isFirstNumber ? (
          <TableCell align="center" rowSpan={7} component="th" scope="row">
            <strong>{round}대</strong>
            <br />
            <span>({roundStartTime.format('HH:mm')})</span>
          </TableCell>
        ) : null}
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {number}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {city}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {range}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {name}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          {mobile}
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          <button type="button" onClick={id ? () => onEdit(id) : null}>
            <EditSVG />
          </button>
        </TableCell>
        <TableCell className={isLastCellOfRound ? 'last' : ''} align="center">
          <button type="button" onClick={id ? () => onDelete(id) : null}>
            <CancelSVG />
          </button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <TableHead>
        <TableRow style={{ borderTop: 'unset' }}>
          <TableCell colSpan="8" align="center">
            개인전 9월 22일(토) 10 ~ 45대
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableRows.map(item => item)}</TableBody>
    </>
  );
}

export default function IndividualRoundStatus({
  applications,
  onDelete,
  onEdit
}) {
  const firstDayApplications = [];
  const secondDayApplications = [];
  applications.forEach(item => {
    const { round } = item;
    if (round >= 1 && round <= 9) {
      firstDayApplications.push(item);
    } else {
      secondDayApplications.push(item);
    }
  });

  return (
    <S.Round>
      <h2>작대 현황</h2>

      <S.TableContainer>
        <Table>
          {getFistDayTableContent({
            applications: firstDayApplications,
            onDelete,
            onEdit
          })}
          {getSecondDayTableContent({
            applications: secondDayApplications,
            onDelete,
            onEdit
          })}
        </Table>
      </S.TableContainer>
    </S.Round>
  );
}

IndividualRoundStatus.defaultProps = {
  applications: []
};

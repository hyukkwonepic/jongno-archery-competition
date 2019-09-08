import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as S from './styles';

export default function SemiproTimetable() {
  return (
    <S.SemiproTimetable>
      <h2>실업부 시간표</h2>

      <S.TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan="4" align="center">
                개인전 9월 21일(토) 1 ~ 9대
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}>
                시간
              </TableCell>
              <TableCell align="center" colSpan={1}>
                1관
              </TableCell>
              <TableCell align="center" colSpan={1}>
                2관
              </TableCell>
              <TableCell align="center" colSpan={1}>
                3관
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">9:15</TableCell>
              <TableCell align="center">1대</TableCell>
              <TableCell align="center">2대</TableCell>
              <TableCell align="center">3대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:30</TableCell>
              <TableCell align="center">4대</TableCell>
              <TableCell align="center">5대</TableCell>
              <TableCell align="center">6대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:45</TableCell>
              <TableCell align="center">3대</TableCell>
              <TableCell align="center">1대</TableCell>
              <TableCell align="center">2대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:00</TableCell>
              <TableCell align="center">6대</TableCell>
              <TableCell align="center">4대</TableCell>
              <TableCell align="center">5대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:15</TableCell>
              <TableCell align="center">2대</TableCell>
              <TableCell align="center">3대</TableCell>
              <TableCell align="center">1대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:30</TableCell>
              <TableCell align="center">5대</TableCell>
              <TableCell align="center">6대</TableCell>
              <TableCell align="center">4대</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </S.TableContainer>
    </S.SemiproTimetable>
  );
}

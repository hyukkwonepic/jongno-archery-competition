import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as S from './styles';

export default function TeamTimetable() {
  return (
    <S.SemiproTimetable>
      <h2>단체전 시간표</h2>

      <S.TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan="4" align="center">
                단체전 9월 21일(토) 1 ~ 60대
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
              <TableCell component="th" align="center">
                12:00
              </TableCell>
              <TableCell align="center">1대</TableCell>
              <TableCell align="center">2대</TableCell>
              <TableCell align="center">3대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                12:12
              </TableCell>
              <TableCell align="center">4대</TableCell>
              <TableCell align="center">5대</TableCell>
              <TableCell align="center">6대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                12:24
              </TableCell>
              <TableCell align="center">7대</TableCell>
              <TableCell align="center">8대</TableCell>
              <TableCell align="center">9대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                12:36
              </TableCell>
              <TableCell align="center">10대</TableCell>
              <TableCell align="center">11대</TableCell>
              <TableCell align="center">12대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                12:48
              </TableCell>
              <TableCell align="center">13대</TableCell>
              <TableCell align="center">14대</TableCell>
              <TableCell align="center">15대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                13:00
              </TableCell>
              <TableCell align="center">16대</TableCell>
              <TableCell align="center">17대</TableCell>
              <TableCell align="center">18대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                13:12
              </TableCell>
              <TableCell align="center">19대</TableCell>
              <TableCell align="center">20대</TableCell>
              <TableCell align="center">21대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                13:24
              </TableCell>
              <TableCell align="center">22대</TableCell>
              <TableCell align="center">23대</TableCell>
              <TableCell align="center">24대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                13:36
              </TableCell>
              <TableCell align="center">25대</TableCell>
              <TableCell align="center">26대</TableCell>
              <TableCell align="center">27대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                13:48
              </TableCell>
              <TableCell align="center">28대</TableCell>
              <TableCell align="center">29대</TableCell>
              <TableCell align="center">30대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                14:00
              </TableCell>
              <TableCell align="center">31대</TableCell>
              <TableCell align="center">32대</TableCell>
              <TableCell align="center">33대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                14:12
              </TableCell>
              <TableCell align="center">34대</TableCell>
              <TableCell align="center">35대</TableCell>
              <TableCell align="center">36대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                14:24
              </TableCell>
              <TableCell align="center">37대</TableCell>
              <TableCell align="center">38대</TableCell>
              <TableCell align="center">39대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                14:36
              </TableCell>
              <TableCell align="center">40대</TableCell>
              <TableCell align="center">41대</TableCell>
              <TableCell align="center">42대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                14:48
              </TableCell>
              <TableCell align="center">43대</TableCell>
              <TableCell align="center">44대</TableCell>
              <TableCell align="center">45대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                15:00
              </TableCell>
              <TableCell align="center">46대</TableCell>
              <TableCell align="center">47대</TableCell>
              <TableCell align="center">48대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                15:12
              </TableCell>
              <TableCell align="center">49대</TableCell>
              <TableCell align="center">50대</TableCell>
              <TableCell align="center">51대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                15:24
              </TableCell>
              <TableCell align="center">52대</TableCell>
              <TableCell align="center">53대</TableCell>
              <TableCell align="center">54대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                15:36
              </TableCell>
              <TableCell align="center">55대</TableCell>
              <TableCell align="center">56대</TableCell>
              <TableCell align="center">57대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" align="center">
                15:48
              </TableCell>
              <TableCell align="center">58대</TableCell>
              <TableCell align="center">59대</TableCell>
              <TableCell align="center">60대</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </S.TableContainer>
    </S.SemiproTimetable>
  );
}

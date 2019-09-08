import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as S from './styles';

export default function IndividualTimetable() {
  return (
    <S.IndividualTimetable>
      <h2>시간표</h2>

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
              <TableCell align="center">7:00</TableCell>
              <TableCell align="center">1대</TableCell>
              <TableCell align="center">2대</TableCell>
              <TableCell align="center">3대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">7:15</TableCell>
              <TableCell align="center">4대</TableCell>
              <TableCell align="center">5대</TableCell>
              <TableCell align="center">6대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">7:30</TableCell>
              <TableCell align="center">7대</TableCell>
              <TableCell align="center">8대</TableCell>
              <TableCell align="center">9대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">7:45</TableCell>
              <TableCell align="center">3대</TableCell>
              <TableCell align="center">1대</TableCell>
              <TableCell align="center">2대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:00</TableCell>
              <TableCell align="center">6대</TableCell>
              <TableCell align="center">4대</TableCell>
              <TableCell align="center">5대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:15</TableCell>
              <TableCell align="center">9대</TableCell>
              <TableCell align="center">7대</TableCell>
              <TableCell align="center">8대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:30</TableCell>
              <TableCell align="center">2대</TableCell>
              <TableCell align="center">3대</TableCell>
              <TableCell align="center">1대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:45</TableCell>
              <TableCell align="center">5대</TableCell>
              <TableCell align="center">6대</TableCell>
              <TableCell align="center">4대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:00</TableCell>
              <TableCell align="center">8대</TableCell>
              <TableCell align="center">9대</TableCell>
              <TableCell align="center">7대</TableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell colSpan="4" align="center">
                개인전 9월 22일(토) 10 ~ 45대
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">7:00</TableCell>
              <TableCell align="center">10대</TableCell>
              <TableCell align="center">11대</TableCell>
              <TableCell align="center">12대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">7:15</TableCell>
              <TableCell align="center">13대</TableCell>
              <TableCell align="center">14대</TableCell>
              <TableCell align="center">15대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">7:30</TableCell>
              <TableCell align="center">16대</TableCell>
              <TableCell align="center">17대</TableCell>
              <TableCell align="center">18대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">7:45</TableCell>
              <TableCell align="center">12대</TableCell>
              <TableCell align="center">10대</TableCell>
              <TableCell align="center">11대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:00</TableCell>
              <TableCell align="center">15대</TableCell>
              <TableCell align="center">13대</TableCell>
              <TableCell align="center">14대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:15</TableCell>
              <TableCell align="center">18대</TableCell>
              <TableCell align="center">16대</TableCell>
              <TableCell align="center">17대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:30</TableCell>
              <TableCell align="center">11대</TableCell>
              <TableCell align="center">12대</TableCell>
              <TableCell align="center">10대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">8:45</TableCell>
              <TableCell align="center">14대</TableCell>
              <TableCell align="center">15대</TableCell>
              <TableCell align="center">13대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:00</TableCell>
              <TableCell align="center">17대</TableCell>
              <TableCell align="center">18대</TableCell>
              <TableCell align="center">16대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:15</TableCell>
              <TableCell align="center">19대</TableCell>
              <TableCell align="center">20대</TableCell>
              <TableCell align="center">21대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:30</TableCell>
              <TableCell align="center">22대</TableCell>
              <TableCell align="center">23대</TableCell>
              <TableCell align="center">24대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">9:45</TableCell>
              <TableCell align="center">25대</TableCell>
              <TableCell align="center">26대</TableCell>
              <TableCell align="center">27대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:00</TableCell>
              <TableCell align="center">21대</TableCell>
              <TableCell align="center">19대</TableCell>
              <TableCell align="center">20대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:15</TableCell>
              <TableCell align="center">24대</TableCell>
              <TableCell align="center">22대</TableCell>
              <TableCell align="center">23대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:30</TableCell>
              <TableCell align="center">27대</TableCell>
              <TableCell align="center">25대</TableCell>
              <TableCell align="center">26대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">10:45</TableCell>
              <TableCell align="center">20대</TableCell>
              <TableCell align="center">21대</TableCell>
              <TableCell align="center">19대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">11:00</TableCell>
              <TableCell align="center">23대</TableCell>
              <TableCell align="center">24대</TableCell>
              <TableCell align="center">22대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">11:15</TableCell>
              <TableCell align="center">26대</TableCell>
              <TableCell align="center">27대</TableCell>
              <TableCell align="center">25대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">11:30</TableCell>
              <TableCell align="center">28대</TableCell>
              <TableCell align="center">29대</TableCell>
              <TableCell align="center">30대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">11:45</TableCell>
              <TableCell align="center">31대</TableCell>
              <TableCell align="center">32대</TableCell>
              <TableCell align="center">33대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">12:00</TableCell>
              <TableCell align="center">34대</TableCell>
              <TableCell align="center">35대</TableCell>
              <TableCell align="center">36대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">12:15</TableCell>
              <TableCell align="center">30대</TableCell>
              <TableCell align="center">28대</TableCell>
              <TableCell align="center">29대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">12:30</TableCell>
              <TableCell align="center">33대</TableCell>
              <TableCell align="center">31대</TableCell>
              <TableCell align="center">32대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">12:45</TableCell>
              <TableCell align="center">36대</TableCell>
              <TableCell align="center">34대</TableCell>
              <TableCell align="center">35대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">13:00</TableCell>
              <TableCell align="center">29대</TableCell>
              <TableCell align="center">30대</TableCell>
              <TableCell align="center">28대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">13:15</TableCell>
              <TableCell align="center">32대</TableCell>
              <TableCell align="center">33대</TableCell>
              <TableCell align="center">31대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">13:30</TableCell>
              <TableCell align="center">35대</TableCell>
              <TableCell align="center">36대</TableCell>
              <TableCell align="center">34대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">13:45</TableCell>
              <TableCell align="center">37대</TableCell>
              <TableCell align="center">38대</TableCell>
              <TableCell align="center">39대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">14:00</TableCell>
              <TableCell align="center">40대</TableCell>
              <TableCell align="center">41대</TableCell>
              <TableCell align="center">42대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">14:15</TableCell>
              <TableCell align="center">43대</TableCell>
              <TableCell align="center">44대</TableCell>
              <TableCell align="center">45대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">14:30</TableCell>
              <TableCell align="center">39대</TableCell>
              <TableCell align="center">37대</TableCell>
              <TableCell align="center">38대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">14:45</TableCell>
              <TableCell align="center">42대</TableCell>
              <TableCell align="center">40대</TableCell>
              <TableCell align="center">41대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">15:00</TableCell>
              <TableCell align="center">45대</TableCell>
              <TableCell align="center">43대</TableCell>
              <TableCell align="center">44대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">15:15</TableCell>
              <TableCell align="center">38대</TableCell>
              <TableCell align="center">39대</TableCell>
              <TableCell align="center">37대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">15:30</TableCell>
              <TableCell align="center">41대</TableCell>
              <TableCell align="center">42대</TableCell>
              <TableCell align="center">40대</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">15:45</TableCell>
              <TableCell align="center">44대</TableCell>
              <TableCell align="center">45대</TableCell>
              <TableCell align="center">43대</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </S.TableContainer>
    </S.IndividualTimetable>
  );
}

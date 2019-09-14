import React from 'react';
import ExpandSvg from '../../assets/ExpandSvg';

import * as S from './styles';

export default function FullTableButton(props) {
  return (
    <S.FullTable {...props}>
      <ExpandSvg />
      전체 화면
    </S.FullTable>
  );
}

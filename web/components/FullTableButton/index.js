import React, { Component } from 'react';
import ExpandSvg from '../../assets/ExpandSvg';

import * as S from './styles';

const FullTableButton = React.forwardRef(function(props, ref) {
  return (
    <S.FullTable {...props} ref={ref}>
      <ExpandSvg />
      전체 화면
    </S.FullTable>
  );
});

export default FullTableButton;

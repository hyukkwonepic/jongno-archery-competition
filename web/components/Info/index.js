import React from 'react';
import * as S from './styles';

export default function Info({ dates, ...props }) {
  return (
    <S.Info {...props}>
      <h2>대회 정보</h2>
      <S.Dates>
        {dates.map(({ date, round }) => (
          <span key={date}>
            {date} {round}
          </span>
        ))}
      </S.Dates>
    </S.Info>
  );
}

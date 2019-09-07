import React from 'react';
import Link from 'next/link';

import * as S from './styles';

export default function Info({ dates, path, ...props }) {
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
      <div>
        <Link href={path}>
          <S.PrimaryButton>시간표 보기</S.PrimaryButton>
        </Link>
      </div>
    </S.Info>
  );
}

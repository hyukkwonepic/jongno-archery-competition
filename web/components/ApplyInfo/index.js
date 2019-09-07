import React from 'react';
import Link from 'next/link';

import * as S from './styles';

export default function ApplyInfo({ startDate, endDate, ...props }) {
  return (
    <S.Info {...props}>
      <h2>신청 기간</h2>
      <S.Date>
        <span>
          {startDate} ~ {endDate}
        </span>
      </S.Date>
      <div>
        <Link href="/individual/apply">
          <S.PrimaryButton type="button">신청하기</S.PrimaryButton>
        </Link>
      </div>
    </S.Info>
  );
}

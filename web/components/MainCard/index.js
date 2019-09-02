import React from 'react';
import Link from 'next/link';
import * as S from './styles';

export default function MainCard({ title, path, dates }) {
  return (
    <S.MainCard>
      <h2>{title}</h2>
      <S.Dates>
        {dates.map(({ date, round }) => (
          <span key={date}>
            {date} {round}
          </span>
        ))}
      </S.Dates>
      <S.Buttons>
        <Link href={path}>
          <a>
            <S.PrimaryButton type="button">신청하기</S.PrimaryButton>
          </a>
        </Link>

        <Link href={path}>
          <a>
            <S.SecondaryButton type="button">작대현황</S.SecondaryButton>
          </a>
        </Link>
      </S.Buttons>
    </S.MainCard>
  );
}

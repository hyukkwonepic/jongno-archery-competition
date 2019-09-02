import React from 'react';
import Link from 'next/link';

import * as S from './styles';

export default function Header() {
  return (
    <S.Nav>
      <S.Logo>
        <Link href="/">
          <img
            src="http://www.hwanghakjeong.org/files/attach/images/173/40dc853c404960139cad5c13bd774e32.png"
            alt="logo"
          />
        </Link>
        <span>|</span>
        <span>제 9회 종로 전국 활쏘기 대회</span>
      </S.Logo>
      <S.Menu>
        <li>
          <Link href="/individual">
            <a>개인전</a>
          </Link>
        </li>
        <li>
          <Link href="/team">
            <a>단체전</a>
          </Link>
        </li>
        <li>
          <Link href="/semipro">
            <a>실업부</a>
          </Link>
        </li>
      </S.Menu>
    </S.Nav>
  );
}

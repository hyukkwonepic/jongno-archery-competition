import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  const lists = (
    <>
      <li>
        <Link href="/individual">
          <a className={pathname.includes('individual') ? 'active' : null}>
            개인전
          </a>
        </Link>
      </li>
      <li>
        <Link href="/team">
          <a className={pathname.includes('team') ? 'active' : null}>단체전</a>
        </Link>
      </li>
      <li>
        <Link href="/semipro">
          <a className={pathname.includes('semipro') ? 'active' : null}>
            실업부
          </a>
        </Link>
      </li>
    </>
  );

  return (
    <S.Nav>
      <S.Container>
        <S.Logo>
          <Link href="/">
            <a>
              <img
                src="http://www.hwanghakjeong.org/files/attach/images/173/40dc853c404960139cad5c13bd774e32.png"
                alt="logo"
              />
            </a>
          </Link>
          <span>|</span>
          <span>제9회 종로 전국 활쏘기 대회</span>
        </S.Logo>
        <S.Menu>{lists}</S.Menu>
      </S.Container>
      <S.MobileMenu>
        <ul>{lists}</ul>
      </S.MobileMenu>
    </S.Nav>
  );
}

'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import defaultImgUser from './../../img/default-user.svg'

type NavLink = {
    label: string
    href: string
}

type Props = {
    navLinks: NavLink[]
}
export const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname()
    return (
        <>
            {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                    link.label === 'User'
                        ? <UserBlockLink>
                            <Link href={link.href} key={link.label} className={isActive ? 'active' : ''}><Image src={defaultImgUser} alt={'user-img'} />{link.label}</Link>
                            <div className={'link-user'}>
                                <Link href={'user/signIn'} key={index}>signIn</Link>/<Link href={'user/signUp'} key={index}>signUp</Link>
                            </div>
                        </UserBlockLink>
                        :
                        <Link href={link.href} key={link.label} className={isActive ? 'active' : ''}>{link.label}</Link>
                )
            })}
        </>
    )
}


const UserBlockLink = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #2f2e44, #7C4A6F);
  border-radius: 2px;
  padding: 2px;

  & img {
    width: 24px;
    height: 24px;
  }

  .link-user {
    display: flex;
    justify-content: right;
    align-items: center;
    padding-left: 10px;
    color: white;

    & a {
      display: flex;
      align-items: center;
      color: white;
      height: 30px;
      cursor: pointer;
      text-decoration: dotted;
      font-size: 14px;

      &:hover {
        color: red;
        border-left: 0;
        padding-left: 0;
      }
    }
  }
`
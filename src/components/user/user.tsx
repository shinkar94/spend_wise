'use client'
import {useAppSelector} from "@/hok/hoks";
import {authSelectors} from "@/selectors/Selectors";
import Image from "next/image";

export const UserPage = () =>{
    const userData = useAppSelector(authSelectors)
    return(
        <>
            <div>
                <div className={'blockAvatar'}>
                    {
                        userData.avatarUrl && <Image src={userData.avatarUrl} alt={'avatar'}  width="500" height="500"/>
                    }
                </div>
                <div>
                    <p>Info</p>
                    <p>{userData.fullName}</p>
                </div>
            </div>
        </>
    )
}
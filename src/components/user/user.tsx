import Image from "next/image";


export const UserPage = () =>{
    return(
        <>
            <div className={'infoUser'}>
                <div className={'blockName'}>
                    <Image src='' alt={'avatar'} />
                    <p>Roman</p>
                    <p>Shinkarenko</p>
                    <p>test@gmail.com</p>
                </div>
                <div className={'blockCard'}>
                    <div className={'card'}>
                        this carusel card and button change card
                    </div>
                </div>
            </div>
            <div>
                <div className={'blockAvatar'}>
                    <Image src='' alt={'avatar'} />
                </div>
                <form action="#">
                    <p>Avtor</p>
                    <input type="text" placeholder={'login'}/>
                    <input type="text" placeholder={'password'}/>
                    <button>Avtarization</button>
                </form>
            </div>
            <div>
                <form action="#">
                    <p>Register</p>
                    <input type="text" placeholder={'login'}/>
                    <input type="text" placeholder={'password'}/>
                    <input type="text" placeholder={'password'}/>
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}
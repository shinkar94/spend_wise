import Image from "next/image";
import {z} from 'zod';
import {FC} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const sigInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
}).nonstrict();
type SignInFormShem = z.infer<typeof sigInSchema>
// type PropsType = {
//     onSubmit: (data: SignInFormShem) => void
// }
// export const UserPage:FC<PropsType> = ({onSubmit}) =>{
export const UserPage = () =>{
    // const {control,handleSubmit} = useForm({resolver: zodResolver(sigInSchema)})
    // const handleSubmitForm = handleSubmit(onSubmit)
    return(
        <>
            <div>
                <div className={'blockAvatar'}>
                    <Image src='' alt={'avatar'} />
                </div>
                {/*<form onSubmit={handleSubmitForm}>*/}
                <form >
                    <p>Avtor</p>
                    <input name={'email'} type={'email'}  placeholder={'login'}/>
                    <input name={'password'} type={'password'}  placeholder={'password'}/>
                    <button>Avtarization</button>
                    <button>Exit</button>
                </form>
            </div>
        </>
    )
}
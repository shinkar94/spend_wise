'use client'
import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLoginMutation} from "@/app/api-query/api-query";
import {authAction} from "@/reducer/auth.slice";
import {useAppDispatch, useAppSelector} from "@/hok/hoks";
import {authSelectors} from "@/selectors/Selectors";
import Image from "next/image";


const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
});
type SignInFormShem = z.infer<typeof signInSchema>


export const SignInPage = () =>{
    const dispatch = useAppDispatch()
    const userData = useAppSelector(authSelectors)
    const {getUser} = authAction
    const [login] = useLoginMutation()
    const onSubmit = async (values: SignInFormShem) => {
        try {
            const response= await login(values)
            const dataUser = response
            console.log(response)
            dispatch(getUser({dataUser: dataUser}))
        }catch (e) {
            console.log(e)
        }

    }

    const {register,handleSubmit} = useForm<SignInFormShem>({resolver: zodResolver(signInSchema)})
    const handleSubmitForm = handleSubmit(onSubmit)
    return(
        <>
            <div>
                <div className={'blockAvatar'}>
                    {
                        userData.avatarUrl && <Image src={userData.avatarUrl} alt={'avatar'}  width="500" height="500"/>
                    }
                </div>
                <form onSubmit={handleSubmitForm}>
                    <input {...register('email')} type={'email'}  placeholder={'login'}/>
                    <input {...register('password')} type={'password'}  placeholder={'password'}/>
                    <button>send</button>
                </form>
            </div>
        </>
    )
}
'use client'
import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLoginMutation} from "@/app/api-query/api-query";
import {authAction} from "@/reducer/auth.slice";
import {useAppDispatch, useAppSelector} from "@/hok/hoks";
import {authSelectors} from "@/selectors/Selectors";
import Image from "next/image";
import {S} from '@/components/user/signIn/siginInStyle'


const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
});
type SignInFormShem = z.infer<typeof signInSchema>


export const SignInPage = () => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(authSelectors)
    const {getUser} = authAction
    const [login] = useLoginMutation()
    const onSubmit = async (values: SignInFormShem) => {
        try {
            const response = await login(values)
            const dataUser = response
            console.log(response)
            dispatch(getUser({dataUser: dataUser}))
        } catch (e) {
            console.log(e)
        }

    }

    const {register, handleSubmit} = useForm<SignInFormShem>({resolver: zodResolver(signInSchema)})
    const handleSubmitForm = handleSubmit(onSubmit)
    return (
        <S.SignInBlock>
            <form onSubmit={handleSubmitForm}>
                {userData.avatarUrl && <Image src={userData.avatarUrl} alt={'avatar'} width="60" height="60"/>}
                {userData.avatarUrl && <span>{userData.fullName}</span>}
                <h3>SignIn</h3>
                <input {...register('email')} type={'email'} placeholder={'Login...'}/>
                <input {...register('password')} type={'password'} placeholder={'Password...'}/>
                <button>send</button>
            </form>
        </S.SignInBlock>
    )
}
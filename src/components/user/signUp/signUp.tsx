
import {S} from './signUpStyle'
import Image from "next/image";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
});
type SignUpFormShem = z.infer<typeof signUpSchema>


export const SignUpPage = ()=>{
    const onSubmit = async (values: SignUpFormShem) => {
        try {
            console.log(values)
            // const response = await login(values)
            // const dataUser = response
            // console.log(response)
            // dispatch(getUser({dataUser: dataUser}))
        } catch (e) {
            console.log(e)
        }

    }

    const {register, handleSubmit} = useForm<SignUpFormShem>({resolver: zodResolver(signUpSchema)})
    const handleSubmitForm = handleSubmit(onSubmit)
    return(
        <S.SignUpBlock>
            <form onSubmit={handleSubmitForm}>
                {/*{userData.avatarUrl && <Image src={userData.avatarUrl} alt={'avatar'} width="60" height="60"/>}*/}
                {/*{userData.avatarUrl && <span>{userData.fullName}</span>}*/}
                <h3>SignUp</h3>
                <input {...register('email')} type={'email'} placeholder={'Login...'}/>
                <input {...register('password')} type={'password'} placeholder={'Password...'}/>
                <input {...register('password')} type={'password'} placeholder={'Repeat password...'}/>
                <button>send</button>
            </form>
        </S.SignUpBlock>
    )
}
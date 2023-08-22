'use client'
import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLoginMutation} from "@/app/api-query/api-query";


const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
});
type SignInFormShem = z.infer<typeof signInSchema>


export const UserPage = () =>{
    const [login] = useLoginMutation()
    const onSubmit = (values: SignInFormShem) => {
        debugger
        login(values)
    }

    const {register,handleSubmit} = useForm<SignInFormShem>({resolver: zodResolver(signInSchema)})
    const handleSubmitForm = handleSubmit(onSubmit)
    return(
        <>
            <div>
                <div className={'blockAvatar'}>

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
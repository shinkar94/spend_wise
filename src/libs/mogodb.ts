import mongoose from 'mongoose'


export const connectMongoDB = async () =>{
    try {
        if(process.env.MONGO_CONNECT) {
            await mongoose.connect(process.env.MONGO_CONNECT)
            console.log('Conect mogoDB')
        }else{
            console.log('not varibal MONGO_CONNECT')
        }
    }catch (error){
        console.log(error)
    }
}


import {z,TypeOf}from 'zod'

export const usertype=z.object({

    body:z.object({
        username:z.string({required_error:"pleas write your name"}),
         password:z.number({required_error:"pleas write the password"}),
    })
    
})



export type MoviesType = TypeOf<typeof usertype> ["body"];
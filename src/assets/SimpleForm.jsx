import React from 'react'
import { useForm } from 'react-hook-form'

export default function SimpleForm() {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name' {...register('name')} />
        <input type="text" placeholder='Email' {...register('email')} />
        <button type='submit'>Send</button>
    </form>
  )
}

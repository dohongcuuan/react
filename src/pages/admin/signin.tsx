import React from 'react'

type Props = {}

const Signin = (props: Props) => {
    const {
        register ,
        handlesSubmit,
        fromState:{ errors},
    } = useFrom();
    const onHandlesSubmit = (data)=> {
        console.log("data",data);
        
    }

  return (
    <div>
        <form onSubmit={handlesSubmit(onHandlesSubmit)}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('password')} />
        </form>
    </div>
  );
}

export default Signin
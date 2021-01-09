import React from 'react'
import { userForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = userForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {value: true, message: 'Campo Requerido'}
                })
            } />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: {value: true, message: 'Campo Requerido'}
                })
            }/>
             <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default  AddUserForm;
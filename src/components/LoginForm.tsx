import React, { useState } from 'react';
import IUser from '../models/IUser';

interface IState{
    user: IUser
}
interface IProps{}
const LoginForm: React.FC<IProps> = () => {
const [state, setState] = useState<IState>({
    user: {
        username: '',
        password: '',
    } 
})

const updateInput = (event:React.ChangeEvent<HTMLInputElement>): void=> {
setState({
    user: {
        ...state.user,
        [event.target.name]: event.target.value
    }
})
}

const login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(state.user)
}
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.user)}</pre> */}
            <div className="container">
                <h3>Login Form</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white"><p className="h4">Login here</p></div>
                            <div className="card-body">
                                <form onSubmit={login}>
                                    <div className="mb-2">
                                        <input 
                                        name="username"
                                        value={state.user.username}
                                        onChange={updateInput}
                                        type="text" className='form-control' placeholder='UserName/email' />
                                    </div>
                                    <div className="mb-2">
                                        <input 
                                        name="password"
                                        value={state.user.password}
                                        onChange={updateInput}
                                        type="password" className='form-control' placeholder='Password' />
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className='btn btn-primary' value='login' />
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>   
        </React.Fragment>
    );
};

export default LoginForm;
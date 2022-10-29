import { stat } from 'fs';
import React, { useEffect, useState } from 'react';
import { IUser } from '../models/IUser';
import { UserService } from '../services/UserService';

interface IState{
    loading: boolean;
    users: IUser[];
    errorMessage: string
}
interface IProps{}

const UserList: React.FC<IProps> = () => {

    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUser[],
        errorMessage: '',
    })

    useEffect(()=> {
        setState({...state, loading: true})
        UserService.getAllUsers().then(response => {
        setState({
            ...state,
            loading: false,
            users: response.data,

        })
        }).catch((err)=> {
            setState({
                ...state,
                loading: true,
                errorMessage: err.message,
            })
        })
    }, [])

    const {loading, users, errorMessage} = state;
    return (
        <React.Fragment>
            
            <h3>User list from server connection</h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hoover text-center table-striped">
                          <thead className='bg-success tet-white'>
                            <tr>
                              <th >S.NO.:</th>
                              <th >Name</th>
                              <th >E mail</th>
                              <th >Phone</th>
                              <th >Company</th>
                              <th >Website</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                users.length > 0 && users.map(user => {
                                    return(
                                        <tr key={user.id}>
                                            <th >{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })
                            }
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserList;
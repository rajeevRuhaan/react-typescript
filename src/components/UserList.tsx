import React, {useState} from 'react';
import { IUser } from '../models/IUser';
import { UserService } from '../services/UserService';

interface IState {
    users: IUser[]
}
interface IProps {}

const UserList: React.FC<IProps> = () => {
    const [state, setState] = useState<IState>({
        users: UserService.getAllUsers()
    })

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.users)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3">User List</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped text-center table-hover shadow">
                              <thead className='bg-primary text-white'>
                                <tr>
                                  <th scope="col">S. No.:</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Age</th>
                                  <th scope="col">Designation</th>
                                  <th scope="col">Company</th>
                                </tr>
                              </thead>
                              <tbody>
                                {state.users.length > 0 && 
                                state.users.map(user => {
                                    return (
                                        <tr key={user.sno}>
                                            <th scope="row">{user.sno}</th>
                                            <td>{user.name}</td>
                                            <td>{user.age} yrs</td>
                                            <td>{user.designation}</td>
                                            <td>{user.company}</td>
                                        </tr>
                                    )
                                } )}
                                
                                
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserList;
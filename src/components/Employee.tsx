import React, {useState} from 'react';

interface IState {
    name: string;
    age: number;
    title: string;

}
interface IProps {

}

const Employee:React.FC<IProps> = () => {
const [state, setState] = useState<IState>({
    name: 'Rajeev',
    age: 35,
    title: 'Frontend Developer',
})

    return (
        <React.Fragment>
            <h3>Employee Component</h3>
            <ul className="list-group">
                <li className="list-group-item">Name: {state.name}</li>
                <li className="list-group-item">Age: {state.age}</li>
                <li className="list-group-item">title: {state.title}</li>
            </ul>
        </React.Fragment>
    );
};

export default Employee;
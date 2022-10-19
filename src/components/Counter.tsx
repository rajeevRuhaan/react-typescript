import React, { useState } from 'react';

interface IState {
count : number,
}
interface IProps {}

const Counter:React.FC<IProps> = () => {
    const [state, setState] = useState<IState>({
        count: 10
    })

    const incr = () : void=> {
        setState({count: state.count + 1})
    }
    const decr = () : void=> {
        setState({count: state.count - 1})
    }
    return (
        <React.Fragment>
                <h3>Counter page</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-header ">Display Count</div>
                            <div className="card-body">
                                <p className='h3'>{state.count}</p>
                                <button className="btn btn-success m-1" onClick={incr}>Increase</button>
                                <button className="btn btn-danger m-1" onClick={decr}>Decrease</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>    
            
            
        </React.Fragment>
    )   
}

export default Counter;
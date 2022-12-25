import { useReducer, useRef } from 'react'
import reducer, {initialValue} from './reducer'
import {setJob, addJob, removeJob} from './action'


function App() {
    const reff = useRef()
    const [state, dispatch] = useReducer(reducer, initialValue)
    const { job, jobs } = state

    const handleSubmit =() => {
        reff.current.focus()
        dispatch(addJob(job))
        dispatch(setJob(''))
    }
    return (
        <div style={{padding:'20px 10px'}}>
            <h1>todos</h1>
            <input
                placeholder = 'Enter job'
                value={job}
                onChange={e => dispatch(setJob(e.target.value))}
                ref={reff}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map(
                    (job, index) => (
                        <li key={index}>
                            {job}
                            <span
                                onClick={() => dispatch(removeJob(index))}
                            >&times;</span>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default App
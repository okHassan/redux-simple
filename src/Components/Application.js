import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, selectCount, decrease, setCount } from '../redux/slices/countSlice'

const Application = () => {

    const count = useSelector(selectCount) 
    const dispatch = useDispatch()

    const handleClickIn = () => {
        dispatch(increase())
    }

    const handleClickDe = () => {
        dispatch(decrease())
    }

    const handleClickRe = () => {
        dispatch(setCount(0))
    }

    return (
        <center>
            <h1>Count : {count}</h1>
            <button style={{ marginRight: "20px" }} onClick={handleClickIn}>Increase</button>
            <button style={{ marginRight: "20px" }} onClick={handleClickDe}>Decrease</button>
            <button onClick={handleClickRe}>Refresh</button>
        </center>
    )
}

export default Application
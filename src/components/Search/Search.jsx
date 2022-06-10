import { useState } from 'react'
import UpperContent from '../uppercontent/upperContent'
import './search.css'
const Search = (props) => {

    const [userName, setUserName] = useState("")
    const [data, setData] = useState({

    })

    const onChangeHandle = (e) => {
        setUserName(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
            .then((result) => {
                return result.json()
            }).then((value) => {
                setData(value)
            })
    }

    return (
        <>
        <div className="container">
            <form className="contents" autoComplete='on' onSubmit={onSubmitHandler}>
                    <input type='text' className='search' placeholder='Search Github username' value={userName} onChange={onChangeHandle} />
                    <button className="btn">Search</button>
                </form>
            </div>
            {
                <UpperContent data={data} />
            }

        </>
    )
}

export default Search
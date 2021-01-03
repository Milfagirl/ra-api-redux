import React from 'react'
import {NavLink} from 'react-router-dom'
import {useHistory } from 'react-router-dom'
import {fetchServices} from './ServiceList'
export default function ErrorList() {

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/');
    }
   
    return <>
        <NavLink to='/'>
            <button type="submit" className="btn btn-danger" onSubmit = {(e) => handleSubmit(e)} >Error Server Response. Please, push to get main Page</button>
        </NavLink>
    </>
}

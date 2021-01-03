import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    changeServiceField,
    changeService,
    cancelChangeService,
    fetchServicesError,
    fetchServicesSuccess,
    fetchServicesRequest,
    deleteServicesRequest,
    deleteServicesSuccess,
    deleteServicesError
} from '../redux/actionCreator';
import store from '../redux/store'
import { useHistory } from "react-router-dom";
export let fetchServices

function ServiceList() {
    let history = useHistory();
    const { items, loading, error } = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    fetchServices = async (dispatch) => {
        try {
            dispatch(fetchServicesRequest())
            const response = await fetch(process.env.REACT_APP_API_URL)
            const services = await response.json()
            dispatch(fetchServicesSuccess(services))
            history.push('/');
            console.log('get1', items)
        }
        catch (error) {
            console.log(error)
            dispatch(fetchServicesError(error.message))
        }
    }

    const deleteServices =  async (dispatch,id) => {
        try {
         
            dispatch(deleteServicesRequest())
            await fetch(`${process.env.REACT_APP_API_URL}/${id}`,
            {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json;'
                    
                }
            }
            )

            dispatch(deleteServicesSuccess())
        }
        catch (error) {
            console.log(error)
            dispatch(deleteServicesError(error))
        }
    
    }


    const handleRemove = id => {
       deleteServices(dispatch,id)
    }

    const handleEdit = id => {
        const { name, price } = (items.filter((item) => item.id === id))[0]
        dispatch(changeService(id))
        dispatch(changeServiceField('name', name))
        dispatch(changeServiceField('price', price))
        dispatch(cancelChangeService(true))
    }

    React.useEffect(() => {
        fetchServices(dispatch)

    }, [dispatch])


    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    } else if (error) {
        console.log('error' , error)
        history.push("/error");
    }
    
    return (

        <ul className="list-group">
            SERVICE_LIST
            {items.map(o => (
                <li className='list-group-item' key={o.id}>
                    <div>{o.name} {o.price}</div>
                    <div>
                        <button className='btn btn-outline-warning btn-sm' onClick={() => handleEdit(o.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </button>
                        <button className='btn btn-outline-danger btn-sm' onClick={() => handleRemove(o.id)}>✕</button>
                    </div>

                </li>
            ))}
        </ul>
    )
}

export default ServiceList
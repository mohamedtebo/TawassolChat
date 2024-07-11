import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions/UserAction';
import { UserElement } from '../UserElement';

const UsersList = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    let usersData = []
    try {
        if(users) {
            usersData = users.data;
        } else {
            usersData = []
        }
    } catch(err) {}

    return (
        <div>
            {usersData.length === 0 && <div className='text-center'>Users list not found</div>}
            {usersData && usersData.map((el, index) => {
                return <UserElement key={index} {...el} />;
            })}
        </div>
    );
}

export default UsersList;

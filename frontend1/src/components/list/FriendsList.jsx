import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../store/actions/UserAction';
import { FriendElement } from '../UserElement';

const FriendsList = () => {
    const dispatch = useDispatch();
    const { friends } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getFriends())
    }, [])

    let friendsData = []
    try {
        if(friends) {
            friendsData = friends.data;
        } else {
            friendsData = []
        }
    } catch(err) {}

    return (
        <div>
            {friendsData.length === 0 && <div className='text-center'>Friends list not found</div>}
            {friendsData && friendsData.map((el, index) => {
                return <FriendElement key={index} {...el} />;
            })}
        </div>
    )
}

export default FriendsList;

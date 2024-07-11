import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendRequests } from '../../store/actions/UserAction';
import { FriendRequestElement } from '../UserElement';

const FriendsRequestsList = () => {
    const dispatch = useDispatch();
    const { friendRequests } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getFriendRequests())
    }, [])

    let friendRequestsData = []
    try {
        if(friendRequests) {
            friendRequestsData = friendRequests.data;
        } else {
            friendRequestsData = []
        }
    } catch(err) {}

    return (
        <div>
            {friendRequestsData.length === 0 && <div className='text-center'>Requests list not found</div>}
            {friendRequestsData && friendRequestsData.map((el, index) => {
                return <FriendRequestElement key={index} {...el} />;
            })}
        </div>
    );
}

export default FriendsRequestsList;

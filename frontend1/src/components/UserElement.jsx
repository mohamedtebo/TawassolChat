import React from "react";
import { socket } from "../socket";
import { useSelector } from "react-redux";

// Utility function to determine online status
const getOnlineClass = (online) => online ? "border-green-400" : "border-gray-300";

const UserElement = ({ img, firstName, lastName, online, _id }) => {
    const {user_id} = useSelector(state => state.auth);
    const name = `${firstName} ${lastName}`;

    return (
        <div className={`w-full p-4 bg-white rounded-lg shadow-md hover:cursor-pointer flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
                <div className={`relative ${getOnlineClass(online)} border-2 rounded-full overflow-hidden`}>
                    <img className="w-12 h-12 object-cover" src={img} alt={name} />
                    {online && (
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
                    )}
                </div>
                <div>
                    <p className="text-lg font-medium">{name}</p>
                </div>
            </div>
            <button
                className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => {
                    socket.emit("friend_request", { to: _id, from: user_id }, () => {
                        alert("request sent");
                    });
                }}
            >
                Send Request
            </button>
        </div>
    )
}


const FriendRequestElement = ({ img, firstName, lastName, online, id }) => {
    const name = `${firstName} ${lastName}`;

    return (
        <div className={`w-full p-4 bg-white rounded-lg shadow-md flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
                <div className={`relative ${getOnlineClass(online)} border-2 rounded-full overflow-hidden`}>
                    <img className="w-12 h-12 object-cover" src={img} alt={name} />
                    {online && (
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
                    )}
                </div>
                <div>
                    <p className="text-lg font-medium">{name}</p>
                </div>
            </div>
            <button
                className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600"
                onClick={() => {
                    socket.emit("accept_request", { request_id: id });
                }}
            >
            Accept Request
            </button>
        </div>
    )
}


const FriendElement = ({ img, firstName, lastName, online, _id }) => {
    const {user_id} = useSelector(state => state.auth);
    const name = `${firstName} ${lastName}`;

    return (
        <div className={`w-full p-4 bg-white rounded-lg shadow-md flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
                <div className={`relative ${getOnlineClass(online)} border-2 rounded-full overflow-hidden`}>
                    <img className="w-12 h-12 object-cover" src={img} alt={name} />
                    {online && (
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
                    )}
                </div>
                <div>
                    <p className="text-lg font-medium">{name}</p>
                </div>
            </div>
            <button
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                onClick={() => {
                    socket.emit("start_conversation", { to: _id, from: user_id });
                }}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </button>
        </div>
    )
}


export { UserElement, FriendRequestElement, FriendElement };

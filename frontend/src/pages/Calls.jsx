import React from 'react';
import pen from '../assets/pen.png'
import TiltePage from '../components/utils/TiltePage';
import SearchPage from '../components/utils/SearchPage';
import CallCard from '../components/CallCard';
import { MdOutlineAddIcCall } from "react-icons/md";

const Calls = ({handleOpen}) => {
    let callList = [
        {
            name: 'Cool',
            time: 'Today, 2:00 PM',
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            status: true,
            incoming: true,
            type: 'voice'
        },
        {
            name: 'Mano',
            time: 'Yesterday, 8:00 AM',
            image: "https://images.unsplash.com/photo-1712857329031-eecb5980eec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            status: false,
            incoming: false,
            type: 'voice'
        },
        {
            name: 'Madona',
            time: 'Yesterday, 8:00 PM',
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            status: true,
            incoming: true,
            type: 'vedio'
        },
        {
            name: 'Eva',
            time: 'Yesterday, 10:00 PM',
            image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            status: true,
            incoming: true,
            type: 'voice'
        },
        {
            name: 'Sarah',
            time: 'Yesterday, 10:00 PM',
            image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            status: false,
            incoming: false,
            type: 'vedio'
        },
    ]
    return (
        // <div className="flex w-full">
        //     <div className="h-screen w-80 bg-gray-100 shadow-lg overflow-y-scroll">
        //         <div className="p-3 space-y-4">
        //             <div className="flex items-center justify-between">
        //                 <h5 className="text-lg font-semibold">Call Log</h5>
        //             </div>

        //             <div className="w-full">
        //                 <div className="relative">
        //                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                         <FaSearch className="w-5 h-5 text-blue-400" />
        //                     </div>
        //                     <input
        //                         type="text"
        //                         placeholder="Search…"
        //                         className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                         aria-label="search"
        //                     />
        //                 </div>
        //             </div>

        //             <div className="flex items-center justify-between">
        //                 <a href="#" className="text-sm font-medium text-blue-500">
        //                     Start a conversation
        //                 </a>
        //                 <button onClick={handleOpenDialog}>
        //                     <FaPhone className="w-6 h-6 text-blue-500" />
        //                 </button>
        //             </div>

        //             <hr />

        //             <div className="flex-grow h-full overflow-y-auto">
        //                 <div className="space-y-4">
        //                     {callLogs.map((el, idx) => (
        //                         <CallLogElement key={idx} {...el} />
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {openDialog && (
        //         <StartCall open={openDialog} handleClose={handleCloseDialog} />
        //     )}
        // </div>
        <div className='bg-bgWhaite pt-4 px-6 h-[100vh] max-h-[100vh] w-full overflow-auto'>
            <TiltePage name="Calls" icon={pen} />

            <div className="chat-app">
                <SearchPage />
                <div className="chat-main static">
                    <div className="chat-sidebar  mt-[20px]">
                        {
                            callList.map((item, index) => (
                                <CallCard
                                    key={index}
                                    name={item.name}
                                    time={item.time}
                                    image={item.image}
                                    status={item.status}
                                    incoming={item.incoming}
                                    type={item.type}
                                />
                            ))
                        }
                    </div>

                    <div className="chat-footer
                        absolute
                        bottom-[30px]
                        right-[70px]
                        text-[20px]
                        bg-primary
                        text-textWhaite
                        p-[10px]
                        rounded-full
                        drop-shadow-shadow
                        cursor-pointer"
                        onClick={handleOpen}
                    >
                        <MdOutlineAddIcCall />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calls;

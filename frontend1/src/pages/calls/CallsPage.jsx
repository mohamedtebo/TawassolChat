import React from 'react';
import pen from '../../assets/pen.png'
import TiltePage from '../../components/utils/TiltePage';
import SearchPage from '../../components/utils/SearchPage';
import CallCard from '../../components/CallCard';
import { MdOutlineAddIcCall } from "react-icons/md";
import { useSelector } from 'react-redux';

const CallsPage = ({handleOpen}) => {
    const {selectedTheme} = useSelector(state => state.theme);

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
        <div className={`${
                selectedTheme === 'Light'
                    ? 'bg-bgWhaite '
                : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'bg-bgblack' : 'bg-bgWhaite ') : 'bg-bgblack'
            }
            pt-4 px-6 h-[100vh] max-h-[100vh] w-full overflow-auto`}
        >
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
                                    selectedTheme={selectedTheme}
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

export default CallsPage;

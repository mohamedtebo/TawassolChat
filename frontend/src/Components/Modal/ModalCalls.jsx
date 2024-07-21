import React from 'react';
import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import { FaTimesCircle } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';
import CallCardModal from '../CallCardModal';

const ModalCalls = ({open, handleOpen}) => {
    let callList = [
        {
            name: 'Cool',
            time: 'Today, 2:00 PM',
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: true
        },
        {
            name: 'Mano',
            time: 'Yesterday, 8:00 AM',
            image: "https://images.unsplash.com/photo-1712857329031-eecb5980eec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            online: false
        },
        {
            name: 'Madona',
            time: 'Yesterday, 8:00 PM',
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            online: true
        },
        {
            name: 'Eva',
            time: 'Yesterday, 10:00 PM',
            image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            online: false
        },
        {
            name: 'Sarah',
            time: 'Yesterday, 10:00 PM',
            image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            online: false
        },
    ]

    return (
        <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: 100 },
            }}
            className='bg-bgWhaite'
        >
            <DialogHeader className='text-textBlack flex justify-between'>
                <div className="flex w-[80%] h-[30px] items-center my-[10px] relative">
                    <FiSearch className='absolute translate-x-[10px] text-[15px] text-textNeutralGray' />
                    <input
                        type="search"
                        placeholder="Search..."
                        name="search"
                        className='w-full h-full py-[1px] px-[40px] border-[1px] border-solid border-bgSoftGray rounded-[10px] text-[15px] text-textNeutralGray focus:outline-none'
                    />
                </div>
                <FaTimesCircle className='text-[20px] text-primary cursor-pointer' onClick={handleOpen} />
            </DialogHeader>
            <DialogBody className='h-[300px] overflow-y-auto flex flex-col gap-5'>
                {
                    callList.map((item, index) => (
                        <CallCardModal key={index} item={item} />
                    ))
                }
            </DialogBody>
        </Dialog>
    );
}

export default ModalCalls;

import React, { useEffect, useState } from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { motion, AnimatePresence } from "framer-motion";
import { IconButton, Textarea, Typography } from '@material-tailwind/react';
import { IoImageOutline, IoCameraOutline, IoDocumentOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { LiaPaperclipSolid } from 'react-icons/lia'
import { BiSmile } from "react-icons/bi";
import send from '../../assets/send3.png';

const ChatFooter = () => {
    const Actions = [
        {
            color: "#B88CFF",
            icon: <IoImageOutline size={24} />,
            title: "Image",
            delay: 0.5,
            exit: 0.4
        },
        {
            color: "#8E5AFF",
            icon: <IoCameraOutline size={24} />,
            title: "Photo/Video",
            delay: 0.6,
            exit: 0.6
        },
        {
            color: "#6B38CC",
            icon: <IoDocumentOutline size={24} />,
            title: "Document",
            delay: 0.7,
            exit: 0.8
        },
        {
            color: "#4A1D99",
            icon: <AiOutlineUser size={24} />,
            title: "Contact",
            delay: 0.8,
            exit: 1
        },
    ];
    const [pickerOpen, setPickerOpen] = useState(false);
    const [paperOpen, setPaperOpen] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');

    // Function to toggle the emoji picker visibility
    const handlePickerToggle = () => {
        setPickerOpen(!pickerOpen);
        setPaperOpen(false);
    };

    // Function to toggle the emoji picker visibility
    const handlePaperToggle = () => {
        setPaperOpen(!paperOpen);
        setPickerOpen(false);
    };

    // Function to update the textarea value on user input
    const handleTextareaValue = (e) => {
        setTextareaValue(e.target.value);
        console.log(textareaValue)
    };

    // Function to handle emoji selection and update textarea
    const handleEmojiSelect = (emoji) => {
        const { native } = emoji;
        console.log(textareaValue + native);
        setTextareaValue(textareaValue + native);
    };

    // Hide the picker and paper on textarea focus for better user experience
    const handleTextareaFocus = () => {
        if(pickerOpen) {
            setPickerOpen(false);
        } else if(paperOpen) {
            setPaperOpen(false)
        }
    };

    // Efficiently handle clicks outside the emoji picker
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.chat-footer') && pickerOpen) {
                setPickerOpen(false);
            } else if (!event.target.closest('.chat-footer') && paperOpen) {
                setPaperOpen(false);
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => document.removeEventListener('click', handleClickOutside);
    }, [pickerOpen, paperOpen]); 

    //lets start animation paperOpen
    const itemMotion={
        exit:{
            opacity:0,
            height:0,
            transition:{
                ease:"easeInOut",
                duration:.3,
                delay:1
            }
        }
    }

    return (
        <div className="chat-footer p-[10px] relative">
            <div className='absolute bottom-[60px] z-[999] w-[40px]'>
                {pickerOpen && <Picker
                    onSelect={handleEmojiSelect}
                    color='#9747FF'
                    theme={
                        'light'
                    }
                    showPreview={false}
                    showSkinTones={false}
                    emojiSize={20}
                    perLine={6}
                />}
            </div>
            
            <AnimatePresence>
                {paperOpen && (
                    <motion.div
                        variants={itemMotion}
                        initial={{height:0,opacity:0}}
                        animate={{height: Actions.length, opacity:1}}
                        transition={{duration:.5}}
                        exit="exit"
                        className='absolute bottom-[80px] flex flex-col-reverse gap-2'
                    >
                        {
                            Actions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{delay:item.delay}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                            ease:"easeInOut",
                                            delay:item.exit
                                        }
                                    }}
                                    className='flex gap-1 items-center paperBtn'
                                >
                                    <IconButton
                                        className='rounded-full'
                                        style={{backgroundColor: item.color}}
                                    >
                                        {item.icon}
                                    </IconButton>
                                    <Typography className='text-textNeutralGray text-[10px] typography'>{item.title}</Typography>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`flex
                w-full
                flex-row
                items-center
                gap-2
                sm-max:gap-1
                rounded-[99px]
                border
                border-gray-300
                bg-bgSoftGray
                ${
                    'bg-bgSoftGray '
                }
                py-1
                px-3
                sm-max:px-1`}
            >
                <div className="flex gap-3 items-center sm-max:gap-1">
                    <LiaPaperclipSolid onClick={handlePaperToggle} className='text-textNeutralGray text-[25px] cursor-pointer' />
                    <BiSmile onClick={handlePickerToggle} className='text-textNeutralGray text-[20px] cursor-pointer' />
                </div>
                <Textarea
                    value={textareaValue}
                    onChange={handleTextareaValue}
                    onFocus={handleTextareaFocus}
                    rows={1}
                    placeholder="Your Message"
                    className={`min-h-full !border-0 focus:border-transparent TextArea sm-max:px-0
                        ${
                            'text-textBlack '
                        }`}
                    containerProps={{
                        className: "grid h-full TextAreaSmall",
                    }}
                    labelProps={{
                        className: "before:content-none after:content-none hidden",
                    }}
                />
                <div className='w-[38px] sm-max:w-[48px] cursor-pointer'>
                    <img src={send} alt='send' className='w-full' />
                </div>
            </div>
        </div>
    );
}

export default ChatFooter;

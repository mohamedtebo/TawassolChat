import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography } from '@material-tailwind/react';

const Dialog = ({block, confirm, toggleShow}) => {
    // move item
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
        // Dialog element
        <motion.div
            variants={itemMotion}
            initial={{y:80,opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:0.3}}
            exit={{
                opacity:0,
                y:90,
                transition:{
                    ease:"easeInOut",
                    delay:0.2
                }
            }}
            className='absolute
                flex flex-col justify-between gap-1
                bottom-[25px]
                w-[270px]
                h-[270px]
                p-[10px]
                border-[1px]
                border-solid
                border-bgSoftGray
                rounded-[10px]
                shadow-custom
            bg-bgWhaite'
        >
            {/* Dialog titel */}
            <Typography
                className='blockHeader text-[23px] font-bold px-2 text-textBlack'
            >{block}</Typography>
            {/* Dialog text */}
            <Typography
                variant="paragraph"
                className='blockBody px-[2px] text-[17px] text-textNeutralGray'
            >{confirm}</Typography>
            {/* btn dialog */}
            <div className='blockFooter flex justify-between'>
                <Button
                    variant="text"
                    color="red"
                    onClick={toggleShow}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green">
                    <span>Confirm</span>
                </Button>
            </div>
        </motion.div>
    );
}

export default Dialog;

import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import { TbBellFilled } from "react-icons/tb";

const ModalLogout = ({open, handleOpen, confirmLogOut}) => {
    return (
        <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: 100 },
            }}
            className={
                `bg-bgWhaite`
            }
        >
            <DialogBody className="grid place-items-center gap-4">
                <TbBellFilled className='text-[50px] text-textBlack' />
                <Typography className='text-center text-textBlack' variant="h4">
                    You should read this!
                </Typography>
                <Typography className="text-center font-normal text-textNeutralGray" variant="paragraph">
                Are you sure you want to log out? You will need to login again to access your conversations and messages.
                </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
                <Button
                    variant="text"
                    className='hover:bg-transparent focus:outline-none'
                    color="blue-gray"
                    onClick={handleOpen}
                >
                Cancel
                </Button>
                <Button
                    variant="gradient"
                    color="purple"
                    className='p-3
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    focus:outline-none'
                    onClick={confirmLogOut}
                >
                    Confirm
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default ModalLogout;

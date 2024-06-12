import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

const ModalShortcuts = ({openShortcuts, handleOpenShortcuts}) => {
    const hortcutList = [
        {
            title: "Mark as unread",
            combination: ["Cmd", "Shift", "U"],
        },
        {
            title: "Mute",
            combination: ["Cmd", "Shift", "M"],
        },
        {
            title: "Archive Chat",
            combination: ["Cmd", "Shift", "E"],
        },
        {
            title: "Delete Chat",
            combination: ["Cmd", "Shift", "D"],
        },
        {
            title: "Pin Chat",
            combination: ["Cmd", "Shift", "P"],
        },
        {
            title: "Search",
            combination: ["Cmd", "F"],
        },
        {
            title: "Search Chat",
            combination: ["Cmd", "Shift", "F"],
        },
        {
            title: "Next Chat",
            combination: ["Cmd", "N"],
        },
        {
            title: "Next Step",
            combination: ["Ctrl", "Tab"],
        },
        {
            title: "Previous Step",
            combination: ["Ctrl", "Shift", "Tab"],
        },
        {
            title: "New Group",
            combination: ["Cmd", "Shift", "N"],
        },
        {
            title: "Profile & About",
            combination: ["Cmd", "P"],
        },
        {
            title: "Increase speed of voice message",
            combination: ["Shift", "."],
        },
        {
            title: "Decrease speed of voice message",
            combination: ["Shift", ","],
        },
        {
            title: "Settings",
            combination: ["Shift", "S"],
        },
        {
            title: "Emoji Panel",
            combination: ["Cmd", "E"],
        },
        {
            title: "Sticker Panel",
            combination: ["Cmd", "S"],
        },
    ]
    
    return (
        <Dialog
            size="lg"
            open={openShortcuts}
            handler={handleOpenShortcuts}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: 100 },
            }}
            className='bg-bgWhaite'
        >
            <DialogHeader className='text-textBlack text-[15px] sm:text-[18px] md:text-[21px]'>Keyboard shortcuts</DialogHeader>
            <DialogBody className='grid sm-max:grid-cols-1 grid-cols-2 gap-3 sm-max:h-[50vh] sm-max:overflow-auto'>
                {
                    hortcutList.map((item, index) => (
                        <div key={index} className="w-full px-[30px]">
                            <div className="w-full flex  justify-between items-center">
                                <p className="text-[11px] sm:text-[13px] text-textNeutralGray">{item.title}</p>
                                <div className="space-x-2 flex flex-row">
                                    {
                                        item.combination.map((el, index) => (
                                            <button
                                                key={index}
                                                disabled
                                                className="px-[4px] py-[2px] text-[11px] md:text-[13px] bg-bgSoftGray text-textNeutralGray rounded"
                                            >
                                                {el}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </DialogBody>
            <DialogFooter className='flex gap-3 items-center'>
                <Button variant="gradient" color="purple" className='p-3 text-[10px] sm:text-[12px] md:text-[14px] focus:outline-none' onClick={handleOpenShortcuts}>
                    <span>Ok</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default ModalShortcuts;

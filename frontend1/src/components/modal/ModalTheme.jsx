import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Radio
} from "@material-tailwind/react";
import useGetTheme from '../../hooks/modal/useGetTheme';

const ModalTheme = ({openTheme, handleOpenTheme}) => {
    const [
        selectedTheme,
        handleOptionChange,
        options
    ] = useGetTheme(handleOpenTheme);

    console.log(selectedTheme)

    return (
        <Dialog
            size="xs"
            open={openTheme}
            handler={handleOpenTheme}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: 100 },
            }}
            className={
                `bg-bgWhaite`
            }
        >
            <DialogHeader className={`
                text-textBlack
                text-[15px] sm:text-[18px] md:text-[21px]
            `}>Choose theme</DialogHeader>
            <DialogBody className='flex flex-col justify-between'>
                {
                    options.map((item, index) => (
                        <Radio
                            key={index}
                            name="type" 
                            color='purple'
                            label={
                                <Typography color={'black'} className='text-[12px] sm:text-[15px]'>{item.value}</Typography>
                            }
                            value={item.value}
                            checked={selectedTheme === item.value}
                            onChange={handleOptionChange}
                            className="p-[2px] transition-all hover:before:opacity-0 focus:outline-none"
                        />
                    ))
                }
            </DialogBody>
            <DialogFooter className='flex gap-3 items-center'>
                {/* <Typography className='cursor-pointer p-3 bg-primary rounded-[10px] text-textWhaite text-[10px] sm:text-[12px] md:text-[14px]' onClick={handleOpenTheme}>Cancel</Typography> */}
                <Button
                    onClick={handleOpenTheme}
                    variant="gradient"
                    color="purple"
                    className='p-3 text-[10px] sm:text-[12px] md:text-[14px] focus:outline-none'
                >
                    <span>Cancel</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default ModalTheme;

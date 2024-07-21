import React from 'react';
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Radio,
    Typography
} from '@material-tailwind/react';

const ModalTheme = ({openTheme, handleOpenTheme}) => {
    const handleOptionChange = (e) => {
        handleOpenTheme();
    };

    const options = [
        { value: 'Light' },
        { value: 'Dark' },
        { value: 'System Default' },
    ]

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
                            checked={item.value}
                            onChange={handleOptionChange}
                            className="p-[2px] transition-all hover:before:opacity-0 focus:outline-none"
                        />
                    ))
                }
            </DialogBody>
            <DialogFooter className='flex gap-3 items-center'>
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

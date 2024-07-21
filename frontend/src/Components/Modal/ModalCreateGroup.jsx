import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Typography
} from '@material-tailwind/react'
import CreateGroupForm from '../Groups/CreateGroupForm';

const ModalCreateGroup = ({open, handleOpen}) => {
    const [title, setTitle] = useState('');
    const [members, setMembers] = useState([]);
    const [errors, setErrors] = useState({});

    const TAGS_OPTION = [
        { value: 'Toy Story 3', label: 'Toy Story 3' },
        { value: 'Logan', label: 'Logan' },
        { value: 'Full Metal Jacket', label: 'Full Metal Jacket' },
        { value: 'Dangal', label: 'Dangal' },
        { value: 'The Sting', label: 'The Sting' },
        { value: '2001: A Space Odyssey', label: '2001: A Space Odyssey' },
        { value: 'Singin’ in the Rain', label: 'Singin’ in the Rain' },
        { value: 'Toy Story', label: 'Toy Story' },
        { value: 'Bicycle Thieves', label: 'Bicycle Thieves' },
        { value: 'The Kid', label: 'The Kid' },
        { value: 'Inglourious Basterds', label: 'Inglourious Basterds' },
        { value: 'Snatch', label: 'Snatch' },
        { value: '3 Idiots', label: '3 Idiots' },
    ];

    const validate = () => {
        const newErrors = {};
        if (!title) newErrors.title = "Title is required";
        if (members.length < 2) newErrors.members = "Must have at least 2 members";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleMemberChange = (selectedOptions) => {
        setMembers(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const formData = { title, members };
        console.log("Form Data:", formData);
        setTimeout(() => {
            setTitle('');
            setMembers([])
        }, 500)
        setTimeout(() => {
            handleOpen();
        }, 1000)
    };

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
            <DialogHeader className='text-textBlack text-[15px] sm:text-[18px] md:text-[21px]'>
            Create New Group
            </DialogHeader>
            <DialogBody className='flex flex-col justify-between'>
                <CreateGroupForm
                    handleTitleChange={handleTitleChange}
                    handleMemberChange={handleMemberChange}
                    title={title}
                    members={members}
                    errors={errors}
                    TAGS_OPTION={TAGS_OPTION}
                />
            </DialogBody>
            <DialogFooter className='flex gap-3 items-center'>
                <Typography className='cursor-pointer
                    text-textBlack
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]'
                    onClick={handleOpen}
                >Cancel</Typography>
                <Button
                    variant="gradient"
                    color="purple"
                    className='p-3
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    focus:outline-none'
                    onClick={handleSubmit}
                >
                    <span>Create</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default ModalCreateGroup;

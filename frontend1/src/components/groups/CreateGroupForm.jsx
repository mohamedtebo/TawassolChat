import { Typography } from '@material-tailwind/react';
import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const CreateGroupForm = ({ handleTitleChange, handleMemberChange, title, members, errors, TAGS_OPTION }) => {
    const animatedComponents = makeAnimated();

    return (
        <div>
            <div className="mb-4">
                <Typography variant='paragraph' className="text-[16px] text-gray-700">Title</Typography>
                <input
                    type="text"
                    className="mt-1 p-2 w-full border-[1px] border-gray-400 rounded focus:outline-none placeholder:text-gray-600"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder='create group name'
                />
                {errors.title && <div className="text-red-600 text-sm mt-1">{errors.title}</div>}
            </div>
            <div className="mb-4">
                <Typography variant='paragraph' className="text-[16px] text-gray-700">Members</Typography>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={TAGS_OPTION}
                    onChange={handleMemberChange}
                    value={TAGS_OPTION.filter(option => members.includes(option.value))}
                />
                {errors.members && <div className="text-red-600 text-sm mt-1">{errors.members}</div>}
            </div>
        </div>
    )
}

export default CreateGroupForm

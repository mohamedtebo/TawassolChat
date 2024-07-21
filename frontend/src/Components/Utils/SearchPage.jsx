import React from 'react';
import { FiSearch } from "react-icons/fi";

const SearchPage = () => {
    return (
        <div className="flex w-full items-center my-[10px] relative">
            <FiSearch className='absolute translate-x-[10px] text-[20px] text-textNeutralGray' />

            <input
                type="search"
                placeholder="Search..."
                name="search"
                className={`w-full py-[5px] px-[40px] border-[1px] border-solid border-bgSoftGray rounded-[10px] focus:outline-none
                bg-bgWhaite text-textNeutralGray`}
            />
        </div>
    );
}

export default SearchPage;

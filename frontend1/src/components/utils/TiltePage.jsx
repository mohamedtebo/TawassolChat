import React from 'react';
import { useSelector } from 'react-redux';

const TiltePage = ({name, icon}) => {
    const {selectedTheme} = useSelector(state => state.theme);

    return (
        <div className='flex justify-between'>
            <h1 className={`text-[22px] font-bold
                ${
                    selectedTheme === 'Light'
                        ? 'text-textBlack '
                    : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                }`}
            >{name}</h1>
            <img src={icon} alt='pen' className='w-[25px] h-[25px]' />
        </div>
    );
}

export default TiltePage;

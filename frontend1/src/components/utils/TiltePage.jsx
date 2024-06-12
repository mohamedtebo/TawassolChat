import React from 'react';

const TiltePage = ({name, icon}) => {
    return (
        <div className='flex justify-between'>
            <h1 className={`text-[22px] font-bold
                text-textBlack`}
            >{name}</h1>
            <img src={icon} alt='pen' className='w-[25px] h-[25px]' />
        </div>
    );
}

export default TiltePage;

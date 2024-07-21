import React from 'react';

const TiltePage = ({name}) => {
    return (
        <div className='flex justify-between'>
            <h1 className={`text-[22px] font-bold
                ${
                    "text-textBlack"
                }`}
            >{name}</h1>
        </div>
    );
}

export default TiltePage;

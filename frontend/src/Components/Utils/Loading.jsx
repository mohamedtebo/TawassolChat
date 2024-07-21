import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-bgCharcoalGray bg-opacity-75 z-50">
            <div className="w-[40px] h-[40px] border-3 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
        </div>
    );
}

export default Loading;

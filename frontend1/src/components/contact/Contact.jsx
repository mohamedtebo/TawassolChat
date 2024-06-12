import { Drawer } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactMedia from './ContactMedia';
import ContactDocs from './ContactDocs';
import ContactLinks from './ContactLinks';
import ContactStaredMsg from './ContactStaredMsg';
import ContactGroups from './ContactGroups';
import { AnimatePresence } from 'framer-motion';
import Dialog from '../utils/Dialog';

const Contact = ({openRight, closeDrawerRight}) => {
    // The state of each item appears/disappears
    const [showMedia, setShowMedia] = useState(false);
    const [showDocs, setShowDocs] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [staredMsg, setStaredMsg] = useState(false);
    const [showGroups, setShowGroups] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // Functions to change the state of each element
    const toggleShowMedia = () => setShowMedia(!showMedia)
    const toggleShowDocs = () => setShowDocs(!showDocs)
    const toggleShowLinks = () => setShowLinks(!showLinks)
    const toggleStaredMsg = () => setStaredMsg(!staredMsg)
    const toggleShowGroups = () => setShowGroups(!showGroups)
    const toggleShowBlock = () => setShowBlock(!showBlock)
    const toggleShowDelete = () => setShowDelete(!showDelete)

    // Function to close items when you click outside of them
    const handleClickOutside = () => {
        if (showBlock) {
            setShowBlock(false);
        } else if (showDelete) {
            setShowDelete(false);
        }
    };

    // Resets the state of each item when the drawer is closed
    useEffect(() => {
        if(openRight === false) {
            setShowMedia(false);
            setShowDocs(false);
            setShowLinks(false);
            setStaredMsg(false);
            setShowGroups(false);
            setShowBlock(false);
            setShowDelete(false);
        }
    }, [openRight])

    return (
        <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className='drawer'
            onClick={handleClickOutside}
        >
            <div className="p-4 flex flex-col justify-between relative">
                {/* Show the appropriate state */}
                {
                    showMedia ?
                        (<ContactMedia toggleShowMedia={toggleShowMedia} />)
                    : showDocs ?
                        (<ContactDocs toggleShowDocs={toggleShowDocs} />)
                    : showLinks ?
                        (<ContactLinks toggleShowLinks={toggleShowLinks} />)
                    : staredMsg ?
                        (<ContactStaredMsg toggleStaredMsg={toggleStaredMsg} />)
                    : showGroups ?
                        (<ContactGroups toggleShowGroups={toggleShowGroups} />)
                    :
                    (<ContactInfo closeDrawerRight={closeDrawerRight} toggleShowMedia={toggleShowMedia} toggleShowDocs={toggleShowDocs} toggleShowLinks={toggleShowLinks} toggleStaredMsg={toggleStaredMsg} toggleShowGroups={toggleShowGroups} toggleShowBlock={toggleShowBlock} toggleShowDelete={toggleShowDelete} />)
                }
                <AnimatePresence>
                    {/* Show the dialog box when it is open showBlock & showDelete */}
                    {showBlock && (
                        <Dialog block="Block confirm" confirm="Are you sure you want to block this account?" toggleShow={toggleShowBlock} />
                    )}
                    {showDelete && (
                        <Dialog block="Delete confirm" confirm="Are you sure you want to delete this account?" toggleShow={toggleShowDelete} />
                    )}
                </AnimatePresence>
            </div>
        </Drawer>
    )
}

export default Contact

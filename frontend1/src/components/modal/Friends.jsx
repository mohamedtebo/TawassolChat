import React, { useState } from 'react';
import { Dialog, DialogBody, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import UsersList from '../list/UsersList';
import FriendsList from '../list/FriendsList';
import FriendsRequestsList from '../list/FriendsRequestsList';

const Friends = ({open, handleOpen}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: 100 },
            }}
            className='bg-bgWhaite focus:outline-none'
        >
            <DialogBody>
                <Tabs value={value} onChange={handleChange}>
                    <TabsHeader
                        className="rounded-none border-b-none border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-primary shadow-none rounded-none",
                        }}
                    >
                        <Tab className="text-center" value={0}>Explore</Tab>
                        <Tab className="text-center" value={1}>Friends</Tab>
                        <Tab className="text-center" value={2}>Requests</Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel value={0}>
                            <UsersList />
                        </TabPanel>
                        <TabPanel value={1}>
                            <FriendsList />
                        </TabPanel>
                        <TabPanel value={2}>
                            <FriendsRequestsList />
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </DialogBody>
        </Dialog>
    );
}

export default Friends;

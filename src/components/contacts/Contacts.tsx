import React, { useState } from 'react'

import { Nav } from 'office-ui-fabric-react';
import { useHistory } from 'react-router';

const Contacts: React.FC = () => {

    const [selectedChatId, setSelectedChatId] = useState<number>(0);

    const history = useHistory();

    const onContactClick = (chatId:number) => {
        setSelectedChatId(chatId);
    };


    return (
        <div>
            <Nav
                styles={{
                    root: {
                        width: 208,
                        height: '100%',
                        boxSizing: 'border-box',
                        border: '1px solid #eee',
                        overflowY: 'auto'
                    }
                }}
                groups={

                    [
                        {
                            links:
                                [
                                    {
                                        name: 'Jannick',
                                        key: '1',
                                        url: '',
                                        forceAnchor:true,
                                        onClick:()=>history.push('/chat/1')
                                    },
                                    {
                                        name: 'Janina',
                                        key: '2',
                                        url: '',
                                        forceAnchor:true,
                                        onClick:()=>history.push('/chat/2')
                                    },
                                    {
                                        name: 'Beate',
                                        key: '3',
                                        url: '',
                                        forceAnchor:true,
                                        onClick:()=>history.push('/chat/3')
                                    }
                                ]
                        }
                    ]

                }
            />
        </div>
    )
}

export default Contacts

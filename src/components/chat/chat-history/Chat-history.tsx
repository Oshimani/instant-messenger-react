import React from 'react'

import { Stack, StackItem } from 'office-ui-fabric-react'

import Message, { IMessage } from './message/Message'

const ChatHistory: React.FC = () => {

    let messages: IMessage[] = [
        {
            id: 1,
            timeStamp: new Date(),
            text: 'Hello, how are you?',
        }, {
            id: 2,
            timeStamp: new Date(),
            text: 'I am fine, how about you?',
        }, {
            id: 3,
            timeStamp: new Date(),
            text: 'I\'m fine too, thanks for asking!',
        }, {
            id: 4,
            timeStamp: new Date(),
            text: 'Have to go, see ya!',
        }, {
            id: 5,
            timeStamp: new Date(),
            text: 'Bye!',
        },
    ]

    return (
        <div>
            This is the chat history with all the messages
            <Stack>

                {messages.map(message => {
                    return (
                        <StackItem align="center">
                            <Message {...message} />
                        </StackItem>
                    )
                })
                }
            </Stack>
        </div>
    )
}

export default ChatHistory

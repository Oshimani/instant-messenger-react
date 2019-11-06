import React from 'react'

import { Text, StackItem, Stack } from 'office-ui-fabric-react';
import { useParams } from 'react-router';
import MessageInput from './message-input/Message-input';
import ChatHistory from './chat-history/Chat-history';

export interface IChatProps {
    chatId: number;
}

const Chat: React.FC = () => {

    const { chatId } = useParams();
    return (
        <div>
            <Stack>
                {/* HEADER */}
                <StackItem>
                    <Text>
                        ChatId: {String(chatId)}
                    </Text>
                </StackItem>

                {/* CHAT HISTORY */}
                <StackItem grow={10}>
                    <ChatHistory></ChatHistory>
                </StackItem>

                {/* MESSAGE INPUT */}
                <StackItem>
                    <MessageInput></MessageInput>
                </StackItem>
            </Stack>
        </div>
    )
}

export default Chat

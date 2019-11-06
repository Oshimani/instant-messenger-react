import React from 'react'

import { Text } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';

export interface IMessage {
    text: string;
    timeStamp: Date;
    id: number;
}

const Message: React.FC<IMessage> = (props) => {
    return (
        <div>
            <Card>
                <Card.Section>
                    <Text>{props.text}</Text>
                </Card.Section>
            </Card>
        </div>
    )
}

export default Message

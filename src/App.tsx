import React, { useState } from 'react';

import './App.scss';

import { Switch, Route } from 'react-router';
import { Stack, StackItem } from 'office-ui-fabric-react';

import Contacts from './components/contacts/Contacts';
import Chat from './components/chat/Chat';

const App: React.FC = () => {

  const [selectedChatId, setSelectedChatId] = useState<number>(0);

  return (
    <div className="App">
      <Stack horizontal>
        {/* SIDEBAR WITH CONTACTS */}
        <StackItem>
          <Contacts>
          </Contacts>
        </StackItem>

        {/* CHAT */}
        <StackItem grow={10}>
          <Switch>
            <Route exact path={`/chat/:chatId`} children={<Chat />} />
          </Switch>
        </StackItem>
      </Stack>
    </div>
  );
}

export default App;

import React from 'react';
import Chat from '/src/blocks/Chat';
import Players from '/src/blocks/Players';
import Records from '/src/blocks/Records';

export const TABS_LIST = [
  { label: "Records", component: <Records /> },
  { label: "Player List", component: <Players /> },
  { label: "Chat", component: <Chat /> },
];

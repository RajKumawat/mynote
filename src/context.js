import React from 'react';

const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, text: 'Homework, food, dance, study, sleep' },
    { id: 2, text: 'Take out trash' },
    { id: 3, text: 'Clean Your Room' }
  ]
});

export default NotesContext;
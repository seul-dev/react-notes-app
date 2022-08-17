export const addNote = (note) => {
  return {
    type: 'CREATE',
    note,
  };
};

export const removeNote = (id) => {
  return {
    type: 'REMOVE',
    id,
  };
};

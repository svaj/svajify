const getTracks = variables => {
  return Promise.resolve({
    tracks: [
      {
        id: '123-456-789'
      }
    ]
  });
};

export const api = {
  getTracks
};

export const resolvers = {
  Mutation: {
    getTracks: async (_, variables, { cache }) => await api.getTracks(variables)
  }
};

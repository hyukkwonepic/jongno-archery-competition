module.exports = {
  Query: {
    async semiproApplications(root, args, { db }) {
      const semiproApplications = await db
        .collection('semiproApplications')
        .orderBy('number')
        .get()
        .then(snapshot =>
          snapshot.docs.map(docSnapshot => ({
            id: docSnapshot.id,
            ...docSnapshot.data()
          }))
        );

      return semiproApplications;
    }
  },
  Mutation: {
    createSemiproApplication(root, args, { db }) {
      return 'hasdfasdf';
    },
    updateSemiproApplication(root, args, { db }) {
      return 'hasdfasdf';
    },
    deleteSemiproApplication(root, args, { db }) {
      return 'hasdfasdf';
    }
  }
};

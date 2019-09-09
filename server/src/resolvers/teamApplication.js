module.exports = {
  Query: {
    async teamApplications(root, args, { db }) {
      const teamApplications = await db
        .collection('teamApplications')
        .orderBy('round')
        .get()
        .then(snapshot =>
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        );

      return teamApplications;
    }
  },
  Mutation: {
    createTeamApplication(root, args, { db }) {
      return 'hyou';
    },
    updateTeamApplication(root, args, { db }) {
      return 'hyou';
    },
    deleteTeamApplication(root, args, { db }) {
      return 'hyou';
    }
  }
};

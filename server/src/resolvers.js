const { db } = require('../firebase');

const resolvers = {
  Query: {
    async individualApplications(root, args, { db }) {
      const individualApplications = await db
        .collection('individualApplications')
        .orderBy('number')
        .get()
        .then(snapshot =>
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        );

      return individualApplications;
    },
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
    },
    async semiproApplications(root, args, { db }) {
      const semiproApplications = await db
        .collection('semiproApplications')
        .orderBy('number')
        .get()
        .then(snapshot =>
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        );

      return semiproApplications;
    }
  },
  Mutation: {
    createIndividualApplication(root, args, { db }) {
      return 'hey';
    },
    updateIndividualApplication(root, args, { db }) {
      return 'hey';
    },
    deleteIndividualApplication(root, args, { db }) {
      return 'hey';
    },
    createTeamApplication(root, args, { db }) {
      return 'hyou';
    },
    updateTeamApplication(root, args, { db }) {
      return 'hyou';
    },
    deleteTeamApplication(root, args, { db }) {
      return 'hyou';
    },
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

module.exports = resolvers;

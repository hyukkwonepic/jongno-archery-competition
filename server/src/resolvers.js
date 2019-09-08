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
          snapshot.docs.map(docSnapshot => ({
            id: docSnapshot.id,
            ...docSnapshot.data()
          }))
        );

      return semiproApplications;
    }
  },
  Mutation: {
    async createIndividualApplication(root, args, { db }) {
      const { round, city, range, name, mobile, password } = args.input;

      const selectedRoundApplicationsLength = await db
        .collection('individualApplications')
        .where('round', '==', round)
        .get()
        .then(snapshot => snapshot.docs.length);

      if (selectedRoundApplicationsLength >= 7) {
        throw Error('Round is full.');
      }

      const newApplication = await db
        .collection('individualApplications')
        .add({
          round,
          number: selectedRoundApplicationsLength + 1,
          city,
          range,
          name,
          mobile,
          password
        })
        .then(ref => ref.get())
        .then(docSnapshot => ({
          id: docSnapshot.id,
          ...docSnapshot.data()
        }));

      return newApplication;
    },
    updateIndividualApplication(root, args, { db }) {
      return 'hey';
    },
    async deleteIndividualApplication(root, args, { db }) {
      const { id, password } = args;

      const applicationRef = db.collection('individualApplications').doc(id);

      const applicationSnapshot = await applicationRef.get();
      if (!applicationSnapshot.exists) {
        return Error('Application does not exist.');
      }

      const data = applicationSnapshot.data();
      const isPasswordMatch = data.password === password;

      if (!isPasswordMatch) {
        return Error('Password does not match.');
      }
      applicationRef.delete();
      return {
        id: applicationRef.id,
        ...data
      };
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

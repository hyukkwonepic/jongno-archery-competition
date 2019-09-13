module.exports = {
  Query: {
    async teamApplication(root, args, { db }) {
      const { id } = args;
      const applicationSnapshot = await db
        .collection('teamApplications')
        .doc(id)
        .get();

      if (!applicationSnapshot.exists) {
        return Error('Application does not exist.');
      }

      return {
        id: applicationSnapshot.id,
        ...applicationSnapshot.data()
      };
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
    }
  },
  Mutation: {
    async createTeamApplication(root, args, { db }) {
      const {
        round,
        city,
        range,
        player1,
        player2,
        player3,
        player4,
        player5,
        substitute,
        mobile,
        password
      } = args.input;

      const selectedRoundApplications = await db
        .collection('teamApplications')
        .where('round', '==', round)
        .get()
        .then(snapshot => snapshot.docs.map(doc => doc.data()));

      if (selectedRoundApplications.length >= 1) {
        throw Error('Round is full.');
      }

      const newApplication = await db
        .collection('teamApplications')
        .add({
          round,
          city,
          range,
          player1,
          player2,
          player3,
          player4,
          player5,
          substitute,
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

    async updateTeamApplication(root, args, { db }) {
      const { id, input } = args;

      const applicationRef = db.collection('teamApplications').doc(id);

      const applicationSnapshot = await applicationRef.get();
      if (!applicationSnapshot.exists) {
        return Error('Application does not exist.');
      }

      if (input.round) {
        const selectedRoundApplications = await db
          .collection('teamApplications')
          .where('round', '==', input.round)
          .get()
          .then(snapshot => snapshot.docs.map(doc => doc.data()));

        if (selectedRoundApplications.length >= 1) {
          throw Error('Round is full.');
        }
      }

      await applicationRef.update({
        ...input
      });

      const updatedApplicationSnapshot = await applicationRef.get();

      return {
        id: updatedApplicationSnapshot.id,
        ...updatedApplicationSnapshot.data()
      };
    },

    async deleteTeamApplication(root, args, { req, db }) {
      const { id, password } = args;

      const applicationRef = db.collection('teamApplications').doc(id);

      const applicationSnapshot = await applicationRef.get();
      if (!applicationSnapshot.exists) {
        return Error('Application does not exist.');
      }

      const data = applicationSnapshot.data();
      const isPasswordMatch = data.password === password;

      if (!req.session && !isPasswordMatch) {
        return Error('Password does not match.');
      }
      await applicationRef.delete();
      return {
        id: applicationSnapshot.id,
        ...data
      };
    }
  }
};

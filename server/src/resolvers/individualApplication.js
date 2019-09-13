module.exports = {
  Query: {
    async individualApplication(root, args, { db }) {
      const { id } = args;
      const applicationSnapshot = await db
        .collection('individualApplications')
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
    }
  },
  Mutation: {
    async createIndividualApplication(root, args, { db }) {
      const { round, city, range, name, mobile, password } = args.input;

      const selectedRoundApplications = await db
        .collection('individualApplications')
        .where('round', '==', round)
        .get()
        .then(snapshot => snapshot.docs.map(doc => doc.data()));

      if (selectedRoundApplications.length >= 7) {
        throw Error('Round is full.');
      }

      // Finding out new number
      const numbers = [];
      selectedRoundApplications.forEach(item => numbers.push(item.number));
      let newNumber = null;
      for (let i = 1; i <= 7; i += 1) {
        if (!numbers.includes(i)) {
          newNumber = i;
          break;
        }
      }

      const newApplication = await db
        .collection('individualApplications')
        .add({
          round,
          number: newNumber,
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

    async updateIndividualApplication(root, args, { db }) {
      const { id, input } = args;

      const applicationRef = db.collection('individualApplications').doc(id);

      const applicationSnapshot = await applicationRef.get();
      if (!applicationSnapshot.exists) {
        return Error('Application does not exist.');
      }

      if (input.round) {
        const selectedRoundApplications = await db
          .collection('individualApplications')
          .where('round', '==', input.round)
          .get()
          .then(snapshot => snapshot.docs.map(doc => doc.data()));

        if (selectedRoundApplications.length >= 7) {
          throw Error('Round is full.');
        }

        // Finding out new number
        const numbers = [];
        selectedRoundApplications.forEach(item => numbers.push(item.number));
        let newNumber = null;
        for (let i = 1; i <= 7; i += 1) {
          if (!numbers.includes(i)) {
            newNumber = i;
            break;
          }
        }
        input.number = newNumber;
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
    async deleteIndividualApplication(root, args, { req, db }) {
      const { id, password } = args;

      const applicationRef = db.collection('individualApplications').doc(id);

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

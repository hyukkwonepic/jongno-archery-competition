module.exports = {
  Query: {
    async validateApplicationPassword(root, args, { db }) {
      const { type, id, password } = args;
      const COLLECTIONS = {
        individual: 'individualApplications',
        team: 'teamApplications',
        semipro: 'semiproApplications'
      };
      const collection = COLLECTIONS[type];
      if (!collection) {
        return Error('Invalid application type.');
      }

      const applicationSnapshot = await db
        .collection(collection)
        .doc(id)
        .get();

      if (!applicationSnapshot.exists) {
        return Error('Application does not exist.');
      }

      const data = applicationSnapshot.data();

      return password === data.password;
    }
  }
};

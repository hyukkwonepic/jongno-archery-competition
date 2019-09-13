module.exports = {
  Query: {
    async login(root, args, { req, res, auth }) {
      const { token } = args;
      const expiresIn = 24 * 60 * 60 * 1000;
      const sessionCookie = await auth.createSessionCookie(token, {
        expiresIn
      });
      const options = {
        maxAge: expiresIn,
        sameSite: false
      };
      res.cookie('session', sessionCookie, options);
      return true;
    },

    async logout(root, args, { req, res, auth }) {
      res.clearCookie('session');
      return true;
    },

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

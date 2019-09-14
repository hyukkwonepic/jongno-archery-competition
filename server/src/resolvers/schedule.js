module.exports = {
  Query: {
    async validateApplicationAvailability(root, args, { db }) {
      const schedule = await db
        .collection('applicationSchedule')
        .doc('schedule')
        .get();

      const { start, end } = schedule.data();
      const currentTime = new Date(Date.now());

      if (
        start.seconds * 1000 <= currentTime &&
        end.seconds * 1000 > currentTime
      ) {
        return true;
      }

      return false;
    }
  }
};

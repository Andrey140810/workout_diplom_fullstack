module.exports = function (user) {
  return {
    id: user._id.toString(),
    login: user.login,
    roleId: user.roleId,
    currentProgram: user.currentProgram,
    currentWeek: user.currentWeek,
    currentDay: user.currentDay,
    startDate: user.startDate,
  };
};

// A subscription request. The email is subscribed to the included legislative
// bodies.
const subscriptionRequest = {
  email: {
    in: ['body'],
    isEmail: true,
    exists: true,
  },

  subscriptions: {
    in: ['body'],
  },
};

module.exports = {
  subscriptionRequest: subscriptionRequest,
};

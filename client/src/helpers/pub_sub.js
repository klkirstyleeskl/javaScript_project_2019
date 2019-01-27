const PubSub = {
  publish: function(channel, payload) {
    console.log(`Published on channel ${channel}, payload: ${payload}`);
    const event = new CustomEvent(channel, { detail: payload });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback) {
    console.log(`Subscribed to channel: ${channel}`);
    document.addEventListener(channel, callback);
  },

  unsubscribe: function(channel, callback) {
    console.log(`Unsubscribing from channel: ${channel}`);
    document.removeEventListener(channel, callback);
  }
};

module.exports = PubSub;

const client = require('@mailchimp/mailchimp_marketing');
const { mailChimpApiKey, mailChimpServer } = require('config/config');

client.setConfig({
  apiKey: mailChimpApiKey,
  server: mailChimpServer,
});

module.exports = {
  client,
};

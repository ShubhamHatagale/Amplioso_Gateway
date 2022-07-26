const axios = require("axios");

module.exports = baseURL => {
  console.log("base url iss: " + baseURL);
  return axios.create({
    baseURL: baseURL,
    headers: {'X-Custom-Header': 'foobar'},
    /* data: {
      firstName: 'Fred'
    }, */
  });
};
 
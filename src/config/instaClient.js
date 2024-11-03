const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');

const getIgImageId = get
const IgApi = IgApiClient
module.exports = { getIgImageId, IgApi }
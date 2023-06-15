module.exports = {
  environment: process.env.ELASTIC_APM_ENVIRONMENT || 'local',
  secretToken: process.env.ELASTIC_APM_SECRET_TOKEN || 'phznpgWQHDTkky2XVk',
  serverUrl: process.env.ELASTIC_APM_SERVER_URL || 'https://ops-cluster.apm.eu-west-2.elastic.clickdealer.tech',
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME || 'click-websites',
};

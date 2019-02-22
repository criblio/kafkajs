const versions = {
  0: ({ groupId, groupGenerationId, memberId }) => {
    const request = require('./v0/request')
    const response = require('./v0/response')
    return {
      request: request({ groupId, groupGenerationId, memberId }),
      response,
    }
  },
}

module.exports = {
  versions: Object.keys(versions),
  protocol: ({ version }) => versions[version],
}
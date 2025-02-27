const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  }
}
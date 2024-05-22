// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}

module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        loader: 'imgix',
        path: 'egorxvc-929656266.imgix.net',
    },
}
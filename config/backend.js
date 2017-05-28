module.exports = function() {
    if (process.env.NODE_ENV === 'production') {
        return 'https://iglo.tech'
    }
    return 'http://snowdog.dev'
}

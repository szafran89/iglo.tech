module.exports = function() {
    if (process.env.NODE_ENV === 'production') {
        return 'http://iglo.tech'
    }
    return 'http://snowdog.dev'
}

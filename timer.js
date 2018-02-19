module.exports = (path, angles) => {
    d3.timer(function(elapsed) {
        path.attr('d', function(d) {
            return d(angles)
        })
    })
}

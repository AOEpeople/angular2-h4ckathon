module.exports = function() {
    var config = {
        source: {
            dir: 'src/',
            html: 'src/**/*.html',
            scss: 'src/scss/**/*.scss',
            ts: 'src/app/**/*.ts',
            typings: 'src/typings/**/*.d.ts',
            css: 'src/css/'
        },
        dist: {
            dir: 'app/',
            css: 'app/css/',
            html: 'app/**/*.html',
            js: 'app/js/'
        }
    };

    return config;
}

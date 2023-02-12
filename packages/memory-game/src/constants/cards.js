let cards = [
    {
        id: 0,
        flipped: false,
        img: 'angular.png'
    },
    {
        id: 1,
        flipped: false,
        img: 'babel.png'
    },
    {
        id: 2,
        flipped: false,
        img: 'bower.png'
    },
    {
        id: 3,
        flipped: false,
        img: 'browserify.png'
    },
    {
        id: 4,
        flipped: false,
        img: 'ember.png'
    },
    {
        id: 5,
        flipped: false,
        img: 'grunt.png'
    },
    {
        id: 6,
        flipped: false,
        img: 'gulp.png'
    },
    {
        id: 7,
        flipped: false,
        img: 'ionic.png'
    },
    {
        id: 8,
        flipped: false,
        img: 'meteor.png'
    },
    {
        id: 9,
        flipped: false,
        img: 'nodejs.png'
    },
    {
        id: 10,
        flipped: false,
        img: 'phantomjs.png'
    },
    {
        id: 11,
        flipped: false,
        img: 'react.png'
    },
    {
        id: 12,
        flipped: false,
        img: 'vue.png'
    },
    {
        id: 13,
        flipped: false,
        img: 'yarn.png'
    },
    {
        id: 14,
        flipped: false,
        img: 'yeoman.png'
    }
];

cards = cards.reduce((acc, item) => {
    acc.push({
        ...item,
        id: acc.at(-1).id + 1
    });
    return acc;
}, cards);

export default cards;
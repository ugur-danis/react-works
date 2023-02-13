const cardList = [
    {
        img: 'angular.png'
    },
    {
        img: 'babel.png'
    },
    {
        img: 'bower.png'
    },
    {
        img: 'browserify.png'
    },
    {
        img: 'ember.png'
    },
    {
        img: 'grunt.png'
    },
    {
        img: 'gulp.png'
    },
    {
        img: 'ionic.png'
    },
    {
        img: 'meteor.png'
    },
    {
        img: 'nodejs.png'
    },
    {
        img: 'phantomjs.png'
    },
    {
        img: 'react.png'
    },
    {
        img: 'vue.png'
    },
    {
        img: 'yarn.png'
    },
    {
        img: 'yeoman.png'
    }
]
    .map((c, i) => ({
        ...c,
        id: i,
        flipped: false,
        matched: false
    }))
    .reduce((acc, item, i, arr) => {
        if (i === 0) acc = arr;

        acc.push({
            ...item,
            id: acc.at(-1).id + 1,
        });

        return acc;
    }, []);


const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

const getCardList = () => shuffle(cardList);

export default getCardList;
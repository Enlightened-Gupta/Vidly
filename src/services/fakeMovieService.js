const movies=[
    {
        _id:"123456a",
        title:"One piece",
        genre:{_id:"123456b", name:"Action"},
        numberInStock: 8,
        dailyRentalRate: 3
    },
    {
        _id:"123456c",
        title:"Golmaal",
        genre:{_id:"123456d", name:"Comedy"},
        numberInStock: 6,
        dailyRentalRate: 2.5
    },
    {
        _id:"123456e",
        title:"Wanted",
        genre:{_id:"123456b", name:"Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5
    },
    {
        _id:"123456g",
        title:"Forrest Gump",
        genre:{_id:"123456h", name:"Romance"},
        numberInStock: 10,
        dailyRentalRate: 3
    },
    {
        _id:"123456i",
        title:"Superbad",
        genre:{_id:"123456d", name:"Comedy"},
        numberInStock: 9,
        dailyRentalRate: 2.5
    },
    {
        _id: "123456k",
        title:"The Avengers",
        genre:{_id:"123456b", name:"Action"},
        numberInStock: 10,
        dailyRentalRate: 4
    },
    {
        _id:"123456m",
        title:"Grease",
        genre:{_id:"123456h", name:"Romance"},
        numberInStock: 6,
        dailyRentalRate: 2.5
    },
    {
        _id:"123456o",
        title:"The Hangover",
        genre:{_id:"123456d", name:"Comedy"},
        numberInStock: 8,
        dailyRentalRate: 2
    },
    {
        _id:"123456q",
        title:"Twilight",
        genre:{_id:"123456h", name:"Romance"},
        numberInStock: 7,
        dailyRentalRate: 3
    }

];

export function getMovies(){
    return movies;
};

export function getMovie(id){
    return movies.find(m=> m._id === id);
};

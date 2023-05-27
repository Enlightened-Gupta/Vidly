 export const genres=[
{_id: "123456b", name: "Action"},
{_id: "123456d", name: "Comedy"},
{_id: "123456h", name: "Romance"}
];

export function getGenres(){
    return genres.filter(g=>g);
}


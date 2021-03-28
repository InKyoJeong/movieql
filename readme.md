## setup

```
$ yarn init
$ yarn add graphql-yoga
$ yarn add @babel/cli @babel/core @babel/node @babel/preset-env
$ yarn add axios
```

- `Qu ery` : 데이터베이스로 요청하여 받을 데이터. get data (Read)
- `Mutation` : 서버, 데이터베이스, 메모리의 데이터 변경 작업. mutate data. (Create, Upadate, Delete)

## Movie API

- [https://yts.mx/api/v2/list_movies.json](https://yts.mx/api/v2/list_movies.json)

## Get

```gql
query {
  movies(limit: 10, rating: 8.5) {
    id
    title
    rating
    description_full
  }
}
```

```
{
  "data": {
    "movies": [
      {
        "id": 29602,
        "title": "Götterdämmerung",
        "rating": 9.2,
        "description_full": ""
      },
      {
        "id": 29507,
        "title": "In the Company of Women",
        "rating": 9.4,
        "description_full": "Sexting. Ghosting. Catfishing. Professor Peter Boyle finds himself newly single and lost in this modern age of hookup culture and online romance. Peter hires a charismatic wingman to guide him through the battlefield of the dating world to find true, old-fashioned, real love- in a single night. Peter soon realizes that he is in over his head and must answer the age-old question: do you still believe in love?"
      },

      ...
```

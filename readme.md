## setup

```
$ yarn init
$ yarn add graphql-yoga
$ yarn add @babel/cli @babel/core @babel/node @babel/preset-env
```

- `Query` : 데이터베이스로 요청하여 받을 데이터. get data (Read)
- `Mutation` : 서버, 데이터베이스, 메모리의 데이터 변경 작업. mutate data. (Create, Upadate, Delete)

## delete

```gql
mutation {
  deleteMovie(id: 4)
}
```

```gql
{
  "data": {
    "deleteMovie": true
  }
}
```

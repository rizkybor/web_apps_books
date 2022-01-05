# Yukk : Web Developer Asessment Test Case #2

author : "Rizky Ajie Kurniawan" | role : "Front-End Developer"

## Authors

- [@RizkyAjieKurniawan](https://github.com/rizkybor/web_apps_books)

## API Reference

#### Get All Books Request :

```http
  GET http://localhost:3000/
```

#### output : response (200) - OK

```http
  [

    {
        "id": 6,
        "name": "Struktur data : konsep, kasus, dan implementasi dalam bahasa C++",
        "author_id": null,
        "isbn": "978-602-328-285-2",
        "publisher_name": "Alauddin University Press",
        "price": 59000,
        "author": null
    },
    {
        "id": 5,
        "name": "Dasar pemrograman C++",
        "author_id": 2,
        "isbn": "978-623-6591-51-2",
        "publisher_name": "Pustaka Learning Center",
        "price": 99000,
        "author": {
            "id": 2,
            "name": "Munawaroh"
        }
    },
    ...
]
```

#### Get Author By Id Request :

```http
  GET http://localhost:3000/${id}
```

| Parameter   | Type     | Description                      |
| :---------- | :------- | :------------------------------- |
| `author_id` | `string` | **Required**. author_id to fetch |

#### Response (200) - OK

```http
{

    "id": 4,
    "name": "Hendriyana, Dian Anggraini",
    "email": "hendriyana@test.com",
    "phone": "0811111111114"

}

```

#### Response (400) - Bad Request

```http
{

    "msg": "Author ID Not Found"

}

```

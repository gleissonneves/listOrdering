<h1 style="color:#ffff00;">listOrdering JS</h2>
Ordenador de listas de objetos

```
listOrdering/
├── index.js
├── README.md
└── LICENSE
```

### Install in project

```
git clone https://github.com/gleissonneves/listOrdering.git
```
### Import to your HTML

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello, world!</title>
  </head>
  <body>
    <script src="./listOrdering/index.js"></script>
  </body>
</html>
```

### Using
```
// create a list
const listSmartphone = [
  {
    people: 'Iphone11',
    value: 3895,
  },
  {
    people: 'Xiaomi Redmi 9A ',
    value: 819
  },
  {
    people: 'Smartphone Samsung Galaxy A32',
    value: 1489
  },
];


// call function orderList
// orderList(list, callback)
const newList = orderList(listSmartphone, sortByLowestValue);
```
### Features

| Name function  |  responsibility |
| ------------------- | ------------------- |
|  orderList |  Sort the list |
|  sortByLowestValue | Sorting the list from largest to smallest |
|  sortByHighestValue | Sorting the list from smallest to largest |

### Limitations
- only filters numbers


#### License/Licença do Projeto
[MIT License](https://github.com/gleissonneves/listOrdering/blob/main/LICENSE) © [Gleisson Neves](https://github.com/gleissonneves)

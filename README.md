### Тестовое задание от супер-секретной организации)

Чтобы развернуть приложение, нужно склонировать себе проект `git clone https://github.com/muratbyazrov/test-skaz.git` и запустить один из скриптов start или dev. 
1) Команда `npm run start` запустит приложение на локальном сервере localhost:3000. 
2) Команда `npm run dev` запустит приложение на локальном сервере localhost:3000 с возможностью хот релоуд.

#### Функциональность приложения

 - POST запрос `http://localhost:3000/user` с телом `{ "name": "Ann", "balance": "30" }` создаст нового пользователя и возвращает его ID после создания.
 - POST запрос `http://localhost:3000/user/create?name=Murat&balance=20` так же создаст нового пользователя и возвращает его ID после создания.
 - GET запрос `http://localhost:3000/users` возвращает всех пользователей.
 - GET запрос `http://localhost:3000/user/<ID пользователя>` возвращает пользователя с указанным ID.
 - Запрос на несуществующий ресурс выдаст соответствующее сообщение об ошибке. Попробуйте  отправить запрос `http://localhost:3000/articles`
 - Если тип данных при создании пользователя неверный, возвращается ошибка со статусом 400 с соответствующим сообщением.

##### Запросы можно отправлять с помощью приложения [Postman](https://www.postman.com/downloads)

#### Примечания: 
1) Файл .env добавлен на удаленный репозиторий только для того, чтобы проверяющий увидел, что он существует. На практике, он должен быть занесен в список .gitignore.
2) Требовалось сделать на Node.js + TypeScript. С TypeScript я знаком поверхностно, поэтому для быстроты сделал на JS. TS могу освоить достаточно быстро.
3) Прошу пояснить пункт "Настроить на бэке CORS (без ограничений) на все роуты". Имеете в виду настроить КОРС, чтобы можно было делать запросы на любые сайты?

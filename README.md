# 📝 Личный Блог | Personal Blog

> Полнофункциональное приложение для ведения личного блога с React frontend и Node.js backend.

## 📚 Содержание

- [Обзор проекта](#-обзор-проекта)
- [Технологии](#-технологии)
- [Начало работы](#-начало-работы)
- [API Документация](#-api-документация)
- [Модели данных](#-модели-данных)
- [Roadmap](#-roadmap)
- [Безопасность](#-безопасность)

## 🔍 Обзор проекта

## Структура проекта

```bash
project/
├── backend/         # Node.js + Express backend
├── frontend/        # React + TypeScript frontend
└── README.md
```

## Backend

### Технологический стек

- Node.js
- Express
- PostgreSQL
- Sequelize (ORM)
- TypeScript
- JWT для аутентификации

### Установка и запуск Backend

1. Перейдите в директорию backend:

   ```bash
   cd backend
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Создайте файл .env:

   ```env
   APP_PORT=3000
   MODE=development
   JWT_SECRET=your_jwt_secret
   ```

4. Запустите сервер:
   ```bash
   npm run dev
   ```

## Frontend

### Технологический стек

- React
- TypeScript
- React Router
- Context API для управления состоянием
- Axios для HTTP запросов

### Установка и запуск Frontend

1. Перейдите в директорию frontend:

   ```bash
   cd frontend
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите приложение:
   ```bash
   npm start
   ```

## API Документация

### Аутентификация

#### Регистрация

```http
POST /auth/registration
Content-Type: application/json

Тело запроса:
{
    "email": "user@example.com",
    "password": "password123"
}

Ответ (201):
{
    "message": "User registered successfully",
    "user": {
        "id": 1,
        "email": "user@example.com"
    }
}
```

#### Вход

```http
POST /auth/login
Content-Type: application/json

Тело запроса:
{
    "email": "user@example.com",
    "password": "password123"
}

Ответ (200):
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Посты

Все эндпоинты требуют JWT токен: `Authorization: Bearer <token>`

#### Создание поста

```http
POST /posts
Content-Type: application/json

Тело запроса:
{
    "title": "Заголовок поста",
    "content": "Содержание поста"
}

Ответ (201):
{
    "id": 1,
    "title": "Заголовок поста",
    "content": "Содержание поста",
    "createdAt": "2024-03-20T12:00:00.000Z",
    "updatedAt": "2024-03-20T12:00:00.000Z"
}
```

#### Получение всех постов

```http
GET /posts

Ответ (200):
[
    {
        "id": 1,
        "title": "Заголовок поста",
        "content": "Содержание поста",
        "createdAt": "2024-03-20T12:00:00.000Z",
        "updatedAt": "2024-03-20T12:00:00.000Z"
    }
]
```

#### Получение поста по ID

```http
GET /posts/:id

Ответ (200):
{
    "id": 1,
    "title": "Заголовок поста",
    "content": "Содержание поста",
    "createdAt": "2024-03-20T12:00:00.000Z",
    "updatedAt": "2024-03-20T12:00:00.000Z"
}
```

#### Обновление поста

```http
PUT /posts/:id
Content-Type: application/json

Тело запроса:
{
    "title": "Новый заголовок",
    "content": "Новое содержание"
}

Ответ (200):
{
    "id": 1,
    "title": "Новый заголовок",
    "content": "Новое содержание",
    "createdAt": "2024-03-20T12:00:00.000Z",
    "updatedAt": "2024-03-20T12:00:00.000Z"
}
```

#### Удаление поста

```http
DELETE /posts/:id

Ответ (200):
{
    "message": "Post deleted successfully"
}
```

## Модели данных

### User

- id: number (PRIMARY KEY)
- email: string (UNIQUE)
- password: string (хешированный)
- createdAt: Date
- updatedAt: Date

### Post

- id: number (PRIMARY KEY)
- title: string
- content: text
- createdAt: Date
- updatedAt: Date

## В разработке

- [ ] Поддержка изображений для постов
- [ ] Система комментариев
- [ ] Теги для постов
- [ ] Роли пользователей
- [ ] Восстановление пароля
- [ ] Подтверждение email
- [ ] Интеграция с социальными сетями
- [ ] Поиск по постам
- [ ] Пагинация
- [ ] Оптимизация производительности

## Безопасность

- Пароли хешируются с использованием bcrypt
- JWT для аутентификации
- CORS настроен для безопасных cross-origin запросов
- Валидация входных данных
- Защита от XSS и SQL-инъекций

## Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Отправьте пулл-реквест

## Лицензия

MIT

```

```

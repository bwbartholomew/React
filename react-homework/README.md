# React Homework (CRA)

## Запуск

```bash
npm install
npm start
```

Відкриється http://localhost:3000

## Що зроблено

1. Проєкт ініціалізовано за структурою Create React App.
2. Видалено зайве: `logo.svg`, `reportWebVitals.js`, `setupTests.js`, `App.test.js`,
   `favicon.ico`, `logo192.png`, `logo512.png`, `manifest.json`, `robots.txt`,
   залежності `@testing-library/*` та `web-vitals`.
3. Створено власні компоненти в `src/components/`:
   - Функціональні: `Welcome.js`, `UserCard.js` (з `useState`)
   - Класові: `Counter.js` (`this.state`), `Clock.js` (методи життєвого циклу)
4. Компоненти імпортовано та підключено в кореневий файл `src/App.js`.

## Структура

```
react-homework/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Clock.js
│   │   ├── Counter.js
│   │   ├── UserCard.js
│   │   └── Welcome.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

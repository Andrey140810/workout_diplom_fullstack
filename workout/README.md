Workout App

Функции:

-   авторизация: вход и регистрация
-   дашборд: обзор текущей тренировки и статистики
-   тренировки: выполнение упражнений по программе
-   статистика: отслеживание результата и достижений
-   программы: выбор и просмотр программ тренировок
-   питание: рецепты и калькулятор калорий

Области хранения данных:

-   база данных на json-server
-   BFF
-   редакс стор

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
-   тренировка: БД (список тренировок), стор (отображение в браузере)
-   статистика: стор (кеширование вычисляемой статистики на основе workout.stats), вычисление (генерация на основе данных из workouts: 1. Общее кол-во тренировок 2. Общее кол-во упражнений 3. Общее время тренировок 4. Серия дней подряд 5. Достижения, 6. Прогресс за неделю/месяц 7. Завершенные программы
    )
-   рецепты: хранение (файл), структура (по типам: завтрак, 2-й завтрак, обед, полдник, ужин), данные (калорийность, макронутриенты, ингредиенты, инструкции по приготовлению)
-   список тренировок: хранение (файл), структура (программы разбиты по уровням, неделям и дням с упражнениями)

Таблицы БД:

-   пользователи - users: id / login / password / registed_at / role_id / currentProgram / currentWeek / currentDay / startDate
-   роли - roles: id / name
-   тренировки - workouts: id / user_id / program (level, week, day) / exercises / duration / completed / complet_at

Схема состояния на BFF:

-   сессия текущего пользователя: id / login / password / role_id / currentProgram / currentWeek / currentDay / role

Схема для редакс стора (на клиенте)

-   авторизация:

    -   user: id / login / role_id / currentProgram / currentWeek / currentDay
    -   session: id / login / role_id / urrentProgram / currentWeek / currentDay / role
    -   loading: false
    -   error: null

-   тренировки - workout:

    -   workouts: массив
    -   currentWorkout
    -   stats: totalWorkout / totalExercise / totalTime / streak / achievements / completedPrograms / weeklyProgress / monthlyProgress
    -   loading: false
    -   error: null

-   пользователи

    -   users: массив: user: id / login / registered_at / role
    -   loading: false
    -   error: null

# Тестовая задача Angular

 Основная цель выполнения задачи - как можно лучше показать ваши навыки.
 Ваша задача не только выполнить требования по реализации функциональности,
 но и написать красивый, легко воспринимаемый и расширяемый код,
 при необходимости выполнить рефакторинг уже существующего кода.
 
 _Замечание: Angular проект требует Node.js версии 12.x или выше._
  
  
 1. Ознакомьтесь Angular с проектом.
 Проект представляет собой систему поиска и сохранения записей, полученных
 с использованием стороннего API.
 Имеется 2 страницы:
  Search (Поиск записей) и
  Bookmarks (Список записей добавленных в закладки).
 Для получения списка записей можно использовать любой сторонний API,
 например, YouTube, Twitter, Instagram и т.п.
 Для вывода записей нужно создать компонент, который будет отображать
 основную информацию о ней (логотип, заголовок, дату публикации и т.п.),
 и значок добавления в закладки (внешний вид должен соответствовать
 наличию записи в закладках). Доступ к записям добавленным в закладки
 должен быть возможен в offline режиме даже после закрытия браузера.
 Список записей добавленных в закладки должен быть синхронизирован между
 всеми вкладками браузера.

 1. Часть реализации функций работает корректно, часть - нет.
 Кратко: Вам нужно сделать так, чтобы проект работал корректно.
 
## Что значит "корректно"?

 **1. Со стороны кода**
 
 * Код должен быть отформатирован, реализовывать интерфейсы и т.д.
 Лучшим подходом будет использовать руководство по стилю (style guide) Angular.
 
 **2. Со стороны Angular**
 
 * Проект должен иметь понятную структуру: модули, ленивые (lazy) модули,
 правильный импорт модулями друг друга и т.д. Если вы считаете, что проект
 должен иметь специфичные Angular-модули:
 resolvers, services, interceptors и modules,пожалуйста реализуйте их.
 
 **3. Со стороны UI**
 
 * UI не должен быть очень красивым и сложным,
  однако должен обладать 2 базовыми свойствами:
  
  1. Простой и аккуратный
  1. Отзывчивый

  Хорошей практикой является использование Material компонентов.
  Если вы видите баги в реализации UI, пожалуйста исправьте их.

  *Замечание: компонент карточки для отображения записи должен быть реализован с нуля,
  помните, что его дизайн должен быть простой, аккуратный и отзывчивый.
  Не забудьте добавить загрузчик (spinner), анимацию и т.п.*
  
 **4. Со стороны архитектуры**

## Что значит "код работает корректно"?
1. Пользователь всегда видит то, что ожидает:
 изменение страницы, загрузчик (spinner) во время загрузки новых данных,
 при добавлении/удалении записи в закладки значок меняет свой внешний вид. 
1. Система не должна выполнять одинаковые http запросы дважды.
1. Во время работы с системой не должно возникать ошибок времени выполнения (runtime errors).
1. Команды «npm run start», «npm run build» и «npm run build:prod» должны работать.

# Закончили? Checklist
* Проект не имеет ошибок времени выполнения
* Отсутствуют ошибки сборки (build) в режимах dev и prod
* Система не выполняет дублирующихся запросов
* Записи, добавленные в закладки можно увидеть после закрытия/открытия браузера
* Записи, добавленные в закладки синхронизированы между всеми вкладками браузера
* Карточка записи имеет простой, но рабочий UI
* Список записей и карточка записи имеет отзывчивый UI
* Вы уверены в качестве вашего TypeScript кода
* Вы уверены в архитектуре проекта

Успехов!

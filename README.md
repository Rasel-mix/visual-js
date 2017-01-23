# visual-js
jqery plugins library

Вызов аккордеона
```javascript
$(function() {
  $('.accordion').accordion(
    accordionsOptions = {
      itemClass: 'accordion-item', // класс блока по которому происходит клик
      dataClass: 'accordion-data', // класс блока который должен открываться
      openClass: 'open',           // класс подстовляемый блоку при клике
      speedUp: 500,                // скорость показа анимации
      speedDown: 500               // скорость скрытия анимации
    }
  );
});
```

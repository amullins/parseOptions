Parse options from an attribute of an element.
```html
<span id="test" data-options="testing:true; test1:123; test2:hello"></span>
```
```js
var opts = $.parseOptions('#test');
// {
//     testing : true,
//     test1 : 123,
//     test2 : "hello"
// }
```
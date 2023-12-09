# dunst
Simple node wrapper for dunstify ([dunst notification daemon](https://github.com/dunst-project/dunst))

## Installation
> $ npm i dunst

## Usage
``` js 
const notifier = require('dunst').spawn({
    // dunstify "-r" flag, optional
    id: 123, 
    // title of the notification
    title: 'my app',
    /* 
        optional formatter for manipulating notification's body
        called before showing notifications
    */ 
    formatter(data) { 
        data.content = '[prefix] ' + data.content;
        return data;
    }
})

notifier.show({
    // overwrite instance id, optional
    id: 124,
    // urgency of notification, dunstify -u flag, optional
    type: 'normal', 
    // overwrite instance title, optional
    title: 'my app'

    /* 
        body of notification, will be passed to optional formatter function.
        useful for creating pango markup supported by dunst
    */ 
    content: '...'
})
```
## License 
MIT


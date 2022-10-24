# dunst
Simple node wrapper for dunstify (dunst notification daemon)

# Installation
> $ npm i dunst

# Usage
``` js 
const notifier = require('dunst').spawn({
    // dunstify "-r" flag, optional
    id: 123, 
    // title of the notification
    title: 'my app',
    // optional formatter for manipulating notification's body
    // called before showing notifications
    formatter: (data) => data.content + ' whatever'
})

notifier.show({
    // overwrite instance id, optional
    id: 124,
    // urgency of notification, dunstify -u flag, optional
    type: 'normal', 
    // overwrite instance title, optional
    title: 'my app 2'
    // body of notification, will be passed to optional formatter fn
    // useful for creating pango markup supported by dunst dynamically
    content: '...'
})
```
# License 
MIT


# mofron-event-clicktap
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

click and tap event for mofron

set click event or tap event according to access device


# Install
```
npm install mofron mofron-event-clicktap
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-event-clicktap">ClickTap</tag>
</setting>

<script name=clktap run=init>
console.log("click or tap event");
</script>

<Text size=0.4rem event=Tap:@clktap>Click Tap Event</Text>
```

# setInterval in useEffect

If you want to execute some code repeatedly after some time interval

For example: Getting data from Public API

## Usage

We can do this using Set Interval Function

```javascript
setInterval(() => {
  console.log('Interval triggered');
}, 1000);

```

Execute it like this on your useEffect()

```javascript
...
  
  useEffect(() => {
    const interval = setInterval(() => {
      ... //your function
    }, 1000);
    return () => clearInterval(interval);
  }, []);

...
```


# Tic Tac Toe

Welcome to `Tic Tac Toe` using ReactJS (sin Redux)!

___
## Development Info

To start the application in a new browser window use:

```
yarn start
```

To start and stop the flow server use:

```
yarn flow-start

yarn flow-stop
```

___
## Possible Improvements

### Remove null type

To represent an empty square, I used `null` instead of using a string value. Now that type checking has been added to the application, it would be `cleaner` to have all the possible square contents values to have the same type, which would fix the one remaining flow type error. [Currently, it is just being suppressed]

### Define Shared Player values

Instead of hard-coding the player symbols in the code, it would be better to create a shared class, containing symbol constants for all the possible square contents values.
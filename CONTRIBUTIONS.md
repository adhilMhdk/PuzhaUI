# CONTRIBUTIONS

1. Fork this repo
1. Install all dependencies

```
npm install
```

1. Start Development Server

```
npm start
```

> ## How add new componenets ? <br>
>
> You can add your scss file on `src/styles` files as partials and import in `main.scss` file and the js file must be in `src/scripts` folder and imported in `index.js`

> No Others code can be written in main.scss and index.js

> eg: you can add button compoenent you need to create scss file in `src/styles` folder as `_button.scss` and import it on `main.scss` files and create js file in `src/scripts` as `button.js` 

## Where to add html files?
> Add all html files in `public` directory 

>Link this css file on head <br>
```
<link rel="stylesheet" href="./puzha.ui.css">
```

> Add this Js file on before the closing tag of body 
```
<script src="./puzha.ui.js"></script>
```
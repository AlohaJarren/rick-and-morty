# Rick and Morty

## Objective

Use your knowledge of HTTP request by using Axios to fetch star wars film information from an API and render to the DOM. Use only ES6.

## Prerequisites

- Basic knowledge of HTTP requests using Axios
- Basic understanding of API's.
- Basic understanding of JSON.

## Setup

- Clone repo to local machine.
- Create and link `index.html`, `styles.css`, `app.js`
- Import `axios` cdn
- Sanity check in browser.

## Your Challenge

- Create a text input field with a submit button
- When a user clicks the submit button, a `GET` request is made `character` endpoint with the specifc character name from the text input field. Grab and append the respective values requested onto the DOM.
  - You can find the route/endpoint to call from the [Rick and Morty Documentation](https://rickandmortyapi.com/documentation/)
- Get each character's following values:
  - image
  - name
  - species
  - origin name
  - status

## Hints

1. Use `map` method to render each character

2. Create a function named **`buildHtmlElements(responseData)`**. This is where you will use ES6 methods to build your HTML elements and dynamically add them to the DOM.

```
    <div class="character-container">
      ** Write the following in HTML **
        - image
        - name
        - species
        - origin name
        - status
    </div>
```

## Stretch Goals

1. Make pretty with CSS and use Flexbox
1. Make request to other routes `/location` and `/episode`
1. Get character value `episode`
  - will need to check out methods `lastIndexOf`, `slice`, and `map`


## Resources

[Rick and Morty API](https://rickandmortyapi.com/documentation/)

[Axios Docs](https://github.com/axios/axios)

[Axios CDN](https://cdnjs.com/libraries/axios)

[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

[HTML Input Tag)(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)

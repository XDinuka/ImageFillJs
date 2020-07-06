# ImageFill.js

Dynemicallying change all your img.src values with 4 simple steps.

1. Add ImageFill.js or ImageFill.min.js to your html file.
1. Add data-imagefill attribute to your image tags. This is used to identify which image gets assigned to which img tag.
1. Serve json object from your server with the values you used for data-imagefill as keys and image url as the value.
1. call `ImageFill.fill("url_to_json");`

That's it.
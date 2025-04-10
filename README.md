# Vanilla and page

[githubpagesのlink](https://nasudaai.github.io/vanilla-and-page/)

## 心意気
- 典型的な,htmlとcss,JavaScriptを書く.

- 一つのディレクトリに6つまで.
githubのpin止めが6だし.

- 使うpageのlinkを都度貼りましょか.

## next steps

- `textarea`を足す.
- `alerm()`を消す`button`を足す.

## big issues
  - markdown change!

## links

- [esbuild livereload](https://esbuild.github.io/api/#live-reload)
- [textarea mdn](https://developer.mozilla.org/ja/docs/Web/HTML/Element/textarea)
- [input mdn](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input)
- [css idselector](https://developer.mozilla.org/ja/docs/Web/CSS/ID_selectors)
- [css border style](https://developer.mozilla.org/ja/docs/Web/CSS/border-style)
  
- [\<a> tag](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a) 
## memo
- markdownのnestはspace or tab で表現する.
- [cssの読み込みmdn](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Styling_basics/Getting_started)

`<link rel="stylesheet" href="styles.css" />
`
- [html basic](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)

```
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>

```

- build
  esbuildのlivereloadのためのコードを消す
  `sed 1d src/dev.js > ./dist/index.js`

- [label css mdn](https://developer.mozilla.org/ja/docs/Web/HTML/Element/label)

- objectのkeyに"-"は使わないほうが良いらしい。dot記法でプロパティを取得できない。
  ```
  const prop = obj["prop"]
  ```
  取得するなら上記のように。だが基本的に"-"を使わないように。

## JavaScript

- [change css js](https://developer.mozilla.org/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

例
`const elm = document.querySelector("h1")
elm.style.color = "blue"`


- Date
  - `Date.now()`
  
- Math
  - `Math.random()`

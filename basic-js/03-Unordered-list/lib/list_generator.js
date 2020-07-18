listItem = (content) => {
const output = `<li class="list-group-item">${content}</li>`
  // TODO: return the proper <li> HTML tag with its content (as a string)
;

return output;
}

unorderedList = (items) => {
  let code = []
  for (let i = 0; i < items.length; i++){
    code = `${code}
    ${listItem(items[i])}`
  }

  return `<ul class="list-group">
  ${code}
  </ul>`

  // TODO: return the proper <ul> markup (as a string)
}



'use strict'
const traverse = (node, func) => {
  func(node)
  for (var key in node) {
    if (node.hasOwnProperty(key)) {
      var child = node[key]
      if (typeof child === 'object' && child !== null) {
        if (Array.isArray(child)) child.forEach((node) => {
          traverse(node, func)
        })
        else traverse(child, func)
      }
    }
  }
}

module.exports = traverse

export function getContentDocument(embeddingElement: any) {
    if (embeddingElement.contentDocument) {
      return embeddingElement.contentDocument
    }
    try {
      return embeddingElement.getSVGDocument()
    } catch (e) {}
    return null
}

export function htmlToElement(html: string) {
  var template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}
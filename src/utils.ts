export function getContentDocument(embeddingElement: any) {
    if (embeddingElement.contentDocument) {
      return embeddingElement.contentDocument;
    }
    try {
      return embeddingElement.getSVGDocument();
    } catch (e) {}
    return null;
  }
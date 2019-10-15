module.exports.stripTags = function(html = "") {
  // <b> or </b> => "" ""
  if(typeof html !== "string") return html
  const text = html.replace(/<[^>]+>/gi, "")
  return text
}
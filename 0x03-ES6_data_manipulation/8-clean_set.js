export default function cleanSet(set, startString) {
  let text = '';
  if (!startString || !startString.length) return text;
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      text += `${el.slice(startString.length)}-`;
    }
  }
  return text.slice(0, text.length - 1);
}

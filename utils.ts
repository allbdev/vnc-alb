export function getLang() {
  let language = navigator.language;
  if (navigator.languages !== undefined) {
    language = navigator.languages[0];
  }
  return language.split("-")[0];
}

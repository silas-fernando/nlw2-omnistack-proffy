/*export default function showOrHideContentInput(name) {
  let input = document.querySelector("#" + name);
  if (input) {
    if (input.getAttribute("type") == "text")
      input.setAttribute("type", "password");
    else if (input.getAttribute("type") == "password")
      input.setAttribute("type", "text");
  }
}*/
export default function showOrHideContentInput(name, span) {
  let input = document.querySelector("#" + name);
  if (input) {
    if (input.getAttribute("type") == "text") {
      span.style.backgroundImage = "url(/static/media/open-eye.047af183.svg)";
      input.setAttribute("type", "password");
    } else if (input.getAttribute("type") == "password") {
      span.style.backgroundImage = "url(/static/media/closed-eye.871ea0ae.svg)";
      input.setAttribute("type", "text");
    }
  }
}

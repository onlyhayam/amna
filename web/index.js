const homeName = document.getElementById("name");
homeName.textContent = "Hayam";

const b1 = document.getElementById(b1);
const edit = document.getElementById(edit);

edit.onclick = () => {
  const B1W = document.createElement("div");
  B1W.className = "B1W";
  B1W.contentEditable = true;
  B1W.textContent = "Type Here ...";

  b1.prepend(B1W);
  B1W.focus();
};

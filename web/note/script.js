const note = document.getElementById("note");

// Load saved note on page load
note.value = localStorage.getItem("savedNote") || "";

// Save on every keystroke
note.addEventListener("input", () => {
  localStorage.setItem("savedNote", note.value);
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const text = document.getElementById("note").value;
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "note.txt";
  a.click();
});

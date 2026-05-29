const pageTitle = document.getElementById("account");
pageTitle.innerHTML = `<img src=/img/account.svg alt=account> ACCOUNT  <a class="mode" id="theme-toggle"> </a>`;

const [age, note, weeklyGoal, monthlyGoal, yearlyGoal, PFP] = [
  "age",
  "note",
  "weeklyGoal",
  "monthlyGoal",
  "yearlyGoal",
  "PFP",
].map((id) => document.getElementById(id));

age.textContent = "18";
note.textContent =
  "This is my first ever project and I shall complete. No exception can be taken.";
weeklyGoal.textContent = "Gotta make home page pseudo responsive with JS";
monthlyGoal.textContent = "Make this app fully responsive";
yearlyGoal.textContent = "Make this app great and polished enough ";
PFP.style.backgroundImage = "URL('/sample/sample.png')";

/*.............
Alt (by claude)
...............


const data = {
  name: "Hayam A.",
  age: "18",
  note: "Stay consistent",
  weeklyGoal: "5 workouts"
};

Object.entries(data).forEach(([id, value]) => {
  document.getElementById(id).textContent = value;
});
*/

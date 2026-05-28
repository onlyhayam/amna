const [name, age, note, weeklyGoal, monthlyGoal, yearlyGoal, PFP] = [
  "name",
  "age",
  "note",
  "weeklyGoal",
  "monthlyGoal",
  "yearlyGoal",
  "PFP",
].map((id) => document.getElementById(id));

name.textContent = "Hayam A.";
age.textContent = "18";
note.textContent =
  "This is my first ever project and I shall complete. No exception can be taken.";
weeklyGoal.textContent = "Gotta make home page pseudo responsive with JS";
monthlyGoal.textContent = "Make this app fully responsive";
yearlyGoal.textContent = "Make this app great and polished enough ";
PFP.src = "/sample/sample.png";

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

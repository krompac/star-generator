// Import stylesheets
import "./style.css";

var goldColor = "#ffd11a";
var grayColor = "#f2f2f2";

var generator = document.getElementById("generator");
var clear = document.getElementById("clear");
var starField = document.getElementById("star-field");
var grade = document.getElementById("number");

function generateStar(starType, percentage) {
  var generateFilling = color => {
    return `<i class="fa fa-star fa-stack-2x" style="color: ${
      color === "gold" ? goldColor : grayColor
    }"/>`;
  };

  var star = document.createElement("span");
  star.className = "fa-stack";
  star.style = "font-size:80px";

  if (starType !== "partial") {
    star.innerHTML = generateFilling(starType);
  } else {
    star.innerHTML = generateFilling("gray");
    star.innerHTML += generateFilling("gold");

    star.lastChild.style["clip-path"] = `inset(0 ${100 - percentage}% 0 0)`;
  }

  return star;
}

clear.addEventListener("click", () => (starField.innerHTML = ""));

generator.addEventListener("click", () => {
  var numberOfGoldStars = Math.floor(grade.value);
  var numberOfGrayStars = 4 - numberOfGoldStars;
  starField.innerHTML = "";

  for (var i = 0; i < numberOfGoldStars; i++) {
    starField.appendChild(generateStar("gold"));
  }

  if (numberOfGrayStars >= 0) {
    starField.appendChild(generateStar("partial", (grade.value % 1) * 100));
  }

  for (var i = 0; i < numberOfGrayStars; i++) {
    starField.appendChild(generateStar("gray"));
  }
});

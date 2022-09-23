var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// MY CARREER EFECTS
var clickCount = 0;
function checkClick() {
  if (clickCount % 2 == 0) {
    document.getElementsByClassName("scrollexperienceone");
    document.getElementById("elementone").className = "hidden";
    document.getElementById("elementtwo").className = "show";
  } else if (clickCount % 2 == 1) {
    document.getElementsByClassName("scrollexperiencetwo");
    document.getElementById("elementtwo").className = "hidden";
    document.getElementById("elementthree").className = "show";
  } else {
    document.getElementsByClassName("scrollexperiencethree");
    document.getElementById("elementthree").className = "hidden";
    document.getElementById("elementone").className = "show";
  }

  clickCount = 3;
}

function checkClickLeft() {
  document.getElementsByClassName("scrollexperienceone");
  document.getElementsByClassName("scrollexperiencetwo");
  document.getElementsByClassName("scrollexperiencethree");
  document.getElementById("elementone").className = "show";
  document.getElementById("elementtwo").className = "hidden";
  document.getElementById("elementthree").className = "hidden";

  clickCount = 0;
}

function curtain() {
  return (
    <div id="componentone" class="skillscomponent one">
      <div class="skillcard">
        <p
          class="subskills sub txt-rotate"
          data-period="2000"
          data-rotate='["HTML", "Hyper Text Markup Language"]'
        >
          HTML
        </p>
      </div>
    </div>
  );
}

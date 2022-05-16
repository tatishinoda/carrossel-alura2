var span = document.getElementsByClassName("play");
var div = document.getElementsByClassName("card");
var pos = 0;

// Previous
span[0].onclick = () => {
  pos--;
  for (var i of div) {
    if (pos == 0) {
      i.style.left = "0px";
    }
    if (pos == 1) {
      i.style.left = "-740px";
    }
    if (pos == 2) {
      i.style.left = "-1420px";
    }
    if (pos == 3) {
      i.style.left = "-2080px";
    }
    if (pos > 3) {
      pos = 3;
    }
  }
};

// Next
span[1].onclick = () => {
  pos++;
  for (var i of div) {
    if (pos == 0) {
      i.style.left = "0px";
    }
    if (pos == 1) {
      i.style.left = "-740px";
    }
    if (pos == 2) {
      i.style.left = "-1420px";
    }
    if (pos == 3) {
      i.style.left = "-2080px";
    }
    if (pos > 3) {
      pos = 3;
    }
  }
};

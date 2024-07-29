function Bubble() {
  // Setting Time Complixties
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";
  //   Setting the Space Complixity
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(divs[j], div_sizes[j], "yellow"); //Color Update;

      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(divs[j], div_sizes[j], "red"); //Color update
        div_update(divs[j + 1], div_sizes[j + 1], "red"); //Color update

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        div_update(divs[j], div_sizes[j], "red"); //Height update
        div_update(divs[j + 1], div_sizes[j + 1], "red"); //Height update
      }
      div_update(divs[j], div_sizes[j], "rgb(253, 170, 44)"); //Color update
    }
    div_update(divs[j], div_sizes[j], "green"); //Color update
  }
  div_update(divs[0], div_sizes[0], "green"); //Color update

  enable_button();
}

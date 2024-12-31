const plus = document.querySelectorAll(".plus");
    const minus = document.querySelectorAll(".minus-hidden);
    const hidden = document.querySelectorAll(".hidden");

    for (let i = 0; i < plus.length; i++) {
      plus[i].addEventListener("click",function () {
        plus[i].classlist.toggle("hidden");
        minus[i].classlist.toggle("hidden");
        hidden[i].classlist.toggle("hidden");

      });
    }

    for (let i = 0;i < hidden.length;i++) {
      hidden[i].addEventListener("click",function () {
        plus[i].classlist.toggle("hidden");
        minus[i].classlist.toggle("hidden");
        hidden[i].classlist.toggle("hidden");

      });
    }

    
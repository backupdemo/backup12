window.onscroll = function () {
    myFunction();
 myFunctionHeader();
 hidediv();

  };

  var header = document.getElementById("fadein");
  function myFunction() {
   
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
      header.classList.add("hidediv");
      // $("#fadein").fadeOut(10);
    } else {
      header.classList.remove("hidediv");
      // $("#fadein").fadeIn(500);
    }
  }
  
  var header1 = document.getElementById("myHeader");
  var extra = document.getElementById("");


  function myFunctionHeader() {
   
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      header1.classList.add("bg-dark1");
      extra.classList.remove("extra");
    } else {
      header1.classList.remove("bg-dark1");
      extra.classList.remove("extra");

    }

  var hidehover = document.getElementsByClassName("hovereffect");
    // function hidediv(){
    //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    //     hidediv.classList.add("hidediv");
    //   } else {
    //     hidediv.classList.remove("hovereffect");
    //   }
    // }
  }

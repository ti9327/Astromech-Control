//KnightRider stuff
var checkedItemsKnightRider = new Array();
var imgArrayKnightRider = [];

function ldptoggleKnightRider() {
  let tmp = document.querySelector('#LDPKnightRider');
  tmp.classList.toggle('active');
  if (tmp.classList.contains('active')) {
  }

  getCheckedElementKnightRider();
};

function cointoggleKnightRider() {
  let tmp = document.querySelector('#CoinKnightRider');
  tmp.classList.toggle('active');
  if (tmp.classList.contains('active')) {
  }

  getCheckedElementKnightRider();
};

function mainttoggleKnightRider() {
 let tmp = document.querySelector('#MaintKnightRider');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementKnightRider()
};

function verticaltoggleKnightRider() {
 let tmp = document.querySelector('#VerticalBarstKnightRider');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementKnightRider()
};

function frontHPtoggleKnightRider() {
 let tmp = document.querySelector('#FrontHPKnightRider');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementKnightRider()
};

function topHPtoggleKnightRider() {
  let tmp = document.querySelector('#TopHPKnightRider');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementKnightRider()
};
function rearHPtoggleKnightRider() {
   let tmp = document.querySelector('#RearHPKnightRider');
   tmp.classList.toggle('active');
   if (tmp.classList.contains('active')) {
   }
    getCheckedElementKnightRider()
};

function getCheckedElementKnightRider() {
  var imgArrayKnightRider = document.getElementsByName('stripSelectorKnightRider');
  checkedItemsKnightRider.length = 0;
  for (var i = 0; i < imgArrayKnightRider.length; i++) {
    var tmp = imgArrayKnightRider[i].classList.toString();
    if (tmp.indexOf('active') != -1) {
      checkedItemsKnightRider.push(imgArrayKnightRider[i].id.toString());
    }

    }
  };


 function selectALLStripsKnightRider(){
   document.getElementById("LDPKnightRider").src = "./Images/Body/LDPGreen.png";
   document.getElementById("CoinKnightRider").src = "Images/Body/CoinSlotsGreen.png";
   document.getElementById("MaintKnightRider").src = "Images/Body/SkirtGreen.png";
   document.getElementById("VerticalBarstKnightRider").src = "Images/Body/DataPanelVerticalGreen.png";
   document.getElementById("FrontHPKnightRider").src = "Images/Dome/FrontHPGreen.png";
   document.getElementById("TopHPKnightRider").src = "Images/Dome/TopHPGreen.png";
   document.getElementById("RearHPKnightRider").src = "Images/Dome/RearHPGreen.png";
   document.getElementById("checkmarkallKnightRider").src = "Images/checkmark.png";
   setTimeout('document.getElementById("checkmarkallKnightRider").src = "Images/blankcheckmark.png"', 2000);

  let ldptemp = document.querySelector('#LDPKnightRider');
  ldptemp.classList.add('active');
  let cointemp = document.querySelector('#CoinKnightRider');
  cointemp.classList.add('active');
  let mainttemp = document.querySelector('#MaintKnightRider');
  mainttemp.classList.add('active');
  let vutemp = document.querySelector('#VerticalBarstKnightRider');
  vutemp.classList.add('active');
  let frontHPtemp = document.querySelector('#FrontHPKnightRider');
  frontHPtemp.classList.add('active');
  let topHPtemp = document.querySelector('#TopHPKnightRider');
  topHPtemp.classList.add('active');
  let rearHPtemp = document.querySelector('#RearHPKnightRider');
  rearHPtemp.classList.add('active');

  getCheckedElementKnightRider()
 }


 function selectNoneStripsKnightRider(){
   document.getElementById("LDPKnightRider").src = "./Images/Body/LDPBlue.png";
   document.getElementById("CoinKnightRider").src = "Images/Body/CoinSlotsBlue.png";
   document.getElementById("MaintKnightRider").src = "Images/Body/SkirtBlue.png";
   document.getElementById("VerticalBarstKnightRider").src = "Images/Body/DataPanelVerticalBlue.png";
   document.getElementById("FrontHPKnightRider").src = "Images/Dome/FrontHPBlue.png";
   document.getElementById("TopHPKnightRider").src = "Images/Dome/TopHPBlue.png";
   document.getElementById("RearHPKnightRider").src = "Images/Dome/RearHPBLue.png";
   document.getElementById("checkmarknoneKnightRider").src = "Images/checkmark.png";
   setTimeout('document.getElementById("checkmarknoneKnightRider").src = "Images/blankcheckmark.png"', 2000);


   let ldptemp = document.querySelector('#LDPKnightRider');
   ldptemp.classList.remove('active');
   let cointemp = document.querySelector('#CoinKnightRider');
   cointemp.classList.remove('active');
   let mainttemp = document.querySelector('#MaintKnightRider');
   mainttemp.classList.remove('active');
   let vutemp = document.querySelector('#VerticalBarstKnightRider');
   vutemp.classList.remove('active');
   let frontHPtemp = document.querySelector('#FrontHPKnightRider');
   frontHPtemp.classList.remove('active');
   let topHPtemp = document.querySelector('#TopHPKnightRider');
   topHPtemp.classList.remove('active');
   let rearHPtemp = document.querySelector('#RearHPKnightRider');
   rearHPtemp.classList.remove('active');

   getCheckedElementKnightRider()
 }
  function changeImageLDPKnightRider() {

                if (document.getElementById("LDPKnightRider").src.match("LDPBlue.png"))
                {
                    document.getElementById("LDPKnightRider").src = "./Images/Body/LDPGreen.png";
                    // console.log("Changed to Green");
                } else {
                    document.getElementById("LDPKnightRider").src = "Images/Body/LDPBlue.png";
                    // console.log("Change to Blue");
                }
                ldptoggleKnightRider()
            };

function changeImageCoinKnightRider() {

              if (document.getElementById("CoinKnightRider").src.match("CoinSLotsBlue.png"))
              {
                  document.getElementById("CoinKnightRider").src = "Images/Body/CoinSlotsGreen.png";
                  // console.log("Changed to Green");
              } else {
                  document.getElementById("CoinKnightRider").src = "Images/Body/CoinSLotsBlue.png";
                  // console.log("Change to Blue");
              }
              cointoggleKnightRider()
          };
function changeImageMaintKnightRider() {

          if (document.getElementById("MaintKnightRider").src.match("SkirtBlue.png"))
          {
              document.getElementById("MaintKnightRider").src = "Images/Body/SkirtGreen.png";
              // console.log("Changed to Green");
          } else {
              document.getElementById("MaintKnightRider").src = "Images/Body/SkirtBlue.png";
              // console.log("Change to Blue");
          }
          mainttoggleKnightRider()
      };
function changeImageVerticalBarsKnightRider() {

        if (document.getElementById("VerticalBarstKnightRider").src.match("DataPanelVerticalBlue.png"))
        {
            document.getElementById("VerticalBarstKnightRider").src = "Images/Body/DataPanelVerticalGreen.png";
            // console.log("Changed to Green");
        } else {
            document.getElementById("VerticalBarstKnightRider").src = "Images/Body/DataPanelVerticalBlue.png";
            // console.log("Change to Blue");
        }
        verticaltoggleKnightRider()
    };

  function changeImageFrontHPKnightRider() {

            if (document.getElementById("FrontHPKnightRider").src.match("FrontHPBlue.png"))
            {
                document.getElementById("FrontHPKnightRider").src = "Images/Dome/FrontHPGreen.png";
                // console.log("Changed to Green");
            } else {
                document.getElementById("FrontHPKnightRider").src = "Images/Dome/FrontHPBlue.png";
                // console.log("Change to Blue");
            }
            frontHPtoggleKnightRider()
        };
    function changeImageTopHPKnightRider() {

              if (document.getElementById("TopHPKnightRider").src.match("TopHPBlue.png"))
              {
                  document.getElementById("TopHPKnightRider").src = "Images/Dome/TopHPGreen.png";
                  // console.log("Changed to Green");
              } else {
                  document.getElementById("TopHPKnightRider").src = "Images/Dome/TopHPBlue.png";
                  // console.log("Change to Blue");
              }
              topHPtoggleKnightRider()
          };
    function changeImageRearHPKnightRider() {

              if (document.getElementById("RearHPKnightRider").src.match("RearHPBlue.png"))
              {
                  document.getElementById("RearHPKnightRider").src = "Images/Dome/RearHPGreen.png";
                  // console.log("Changed to Green");
              } else {
                  document.getElementById("RearHPKnightRider").src = "Images/Dome/RearHPBlue.png";
                  // console.log("Change to Blue");
              }
              rearHPtoggleKnightRider()
          };
function changeapply(u){
  document.getElementById(u).src = "Images/blankcheckmark.png";

}

function commandNoOptionsKnightRider( y, t, u) {
  // var bodyLEDi2cdest = "BL"
  let tmp = u;
  document.getElementById(u).src = "Images/checkmark.png";
  // setTimeout(changeapply(), 2000, u);
  setTimeout(function(){  document.getElementById(u).src = "Images/blankcheckmark.png";}, 2000)



  for (var i = 0; i < checkedItemsKnightRider.length; i++) {
    if (checkedItemsKnightRider[i] === "LDPKnightRider") {
      // console.log("L selected");
      var ldpcommandstring = "L" + y + t;

      console.log(ldpcommandstring);
    };

    if (checkedItemsKnightRider[i] === "CoinKnightRider") {
      // console.log("C selected");
      var coincommandstring = "C" + y + t;
      console.log(coincommandstring);
    };

    if (checkedItemsKnightRider[i] === "VerticalBarstKnightRider") {
      // console.log("V selected");
      var vucommandstring = "V" + y + t;
      console.log(vucommandstring);
    };

    if (checkedItemsKnightRider[i] === "MaintKnightRider") {
      // console.log("M selected");
      var mcommandstring = "M" + y + t;
      console.log(mcommandstring);
    };
    if (checkedItemsKnightRider[i] === "D") {
      // console.log("M selected");
      var dcommandstring = checkedItems[i] + y + t;
      console.log(dcommandstring);
    };
    if (checkedItemsKnightRider[i] === "I") {
      // console.log("M selected");
      var icommandstring = checkedItems[i] + y + t;
      console.log(icommandstring);
    };
    if (checkedItemsKnightRider[i] === "FrontHPKnightRider") {
      // console.log("M selected");
      var hpfcommandstring = "F007";
      console.log(hpfcommandstring);
    };
    if (checkedItemsKnightRider[i] === "TopHPKnightRider") {
      // console.log("M selected");
      var hptcommandstring = "T007";
      console.log(hptcommandstring);
    };
    if (checkedItemsKnightRider[i] === "RearHPKnightRider") {
      // console.log("M selected");
      var hprcommandstring = "R007";
      console.log(hprcommandstring);
    };
  };


  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    // ldpi2cdest: bodyLEDi2cdest,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring,
    dcommandstring: dcommandstring,
    icommandstring: icommandstring,
    hpfcommandstring: hpfcommandstring,
    hptcommandstring: hptcommandstring,
    hprcommandstring: hprcommandstring
  });


};




//Rainbow stuff
var checkedItemsRainbow = new Array();
var imgArrayRainbow = [];

function ldptoggleRainbow() {
  let tmp = document.querySelector('#LDPRainbow');
  tmp.classList.toggle('active');
  if (tmp.classList.contains('active')) {
  }

  getCheckedElementRainbow();
};

function cointoggleRainbow() {
  let tmp = document.querySelector('#CoinRainbow');
  tmp.classList.toggle('active');
  if (tmp.classList.contains('active')) {
  }

  getCheckedElementRainbow();
};

function mainttoggleRainbow() {
 let tmp = document.querySelector('#MaintRainbow');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementRainbow()
};

function verticaltoggleRainbow() {
 let tmp = document.querySelector('#VerticalBarstRainbow');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementRainbow()
};

function frontHPtoggleRainbow() {
 let tmp = document.querySelector('#FrontHPRainbow');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementRainbow()
};

function topHPtoggleRainbow() {
 let tmp = document.querySelector('#TopHPRainbow');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementRainbow()
};
function rearHPtoggleRainbow() {
 let tmp = document.querySelector('#RearHPRainbow');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElementRainbow()
};

function getCheckedElementRainbow() {
  var imgArrayRainbow = document.getElementsByName('stripSelectorRainbow');
  checkedItemsRainbow.length = 0;
  for (var i = 0; i < imgArrayRainbow.length; i++) {
    var tmp = imgArrayRainbow[i].classList.toString();
    if (tmp.indexOf('active') != -1) {
      checkedItemsRainbow.push(imgArrayRainbow[i].id.toString());
    }

    }
  };


 function selectALLStripsRainbow(){
   document.getElementById("LDPRainbow").src = "./Images/Body/LDPGreen.png";
   document.getElementById("CoinRainbow").src = "Images/Body/CoinSlotsGreen.png";
   document.getElementById("MaintRainbow").src = "Images/Body/SkirtGreen.png";
   document.getElementById("VerticalBarstRainbow").src = "Images/Body/DataPanelVerticalGreen.png";
   document.getElementById("FrontHPRainbow").src = "Images/Dome/FrontHPGreen.png";
   document.getElementById("TopHPRainbow").src = "Images/Dome/TopHPGreen.png";
   document.getElementById("RearHPRainbow").src = "Images/Dome/RearHPGreen.png";
   document.getElementById("checkmarkallRainbow").src = "Images/checkmark.png";
   setTimeout('document.getElementById("checkmarkallRainbow").src = "Images/blankcheckmark.png"', 2000);

  let ldptemp = document.querySelector('#LDPRainbow');
  ldptemp.classList.add('active');
  let cointemp = document.querySelector('#CoinRainbow');
  cointemp.classList.add('active');
  let mainttemp = document.querySelector('#MaintRainbow');
  mainttemp.classList.add('active');
  let vutemp = document.querySelector('#VerticalBarstRainbow');
  vutemp.classList.add('active');
  let frontHPtemp = document.querySelector('#FrontHPRainbow');
  frontHPtemp.classList.add('active');
  let topHPtemp = document.querySelector('#TopHPRainbow');
  topHPtemp.classList.add('active');
  let rearHPtemp = document.querySelector('#RearHPRainbow');
  rearHPtemp.classList.add('active');

  getCheckedElementRainbow()
 }


 function selectNoneStripsRainbow(){
   document.getElementById("LDPRainbow").src = "./Images/Body/LDPBlue.png";
   document.getElementById("CoinRainbow").src = "Images/Body/CoinSlotsBlue.png";
   document.getElementById("MaintRainbow").src = "Images/Body/SkirtBlue.png";
   document.getElementById("VerticalBarstRainbow").src = "Images/Body/DataPanelVerticalBlue.png";
   document.getElementById("FrontHPRainbow").src = "Images/Dome/FrontHPBlue.png";
   document.getElementById("TopHPRainbow").src = "Images/Dome/TopHPBlue.png";
   document.getElementById("RearHPRainbow").src = "Images/Dome/RearHPBLue.png";
   document.getElementById("checkmarknoneRainbow").src = "Images/checkmark.png";
   setTimeout('document.getElementById("checkmarknoneRainbow").src = "Images/blankcheckmark.png"', 2000);


   let ldptemp = document.querySelector('#LDPRainbow');
   ldptemp.classList.remove('active');
   let cointemp = document.querySelector('#CoinRainbow');
   cointemp.classList.remove('active');
   let mainttemp = document.querySelector('#MaintRainbow');
   mainttemp.classList.remove('active');
   let vutemp = document.querySelector('#VerticalBarstRainbow');
   vutemp.classList.remove('active');
   let frontHPtemp = document.querySelector('#FrontHPRainbow');
   frontHPtemp.classList.remove('active');
   let topHPtemp = document.querySelector('#TopHPRainbow');
   topHPtemp.classList.remove('active');
   let rearHPtemp = document.querySelector('#RearHPRainbow');
   rearHPtemp.classList.remove('active');

   getCheckedElementRainbow()
 }
  function changeImageLDPRainbow() {

                if (document.getElementById("LDPRainbow").src.match("LDPBlue.png"))
                {
                    document.getElementById("LDPRainbow").src = "./Images/Body/LDPGreen.png";
                    // console.log("Changed to Green");
                } else {
                    document.getElementById("LDPRainbow").src = "Images/Body/LDPBlue.png";
                    // console.log("Change to Blue");
                }
                ldptoggleRainbow()
            };

function changeImageCoinRainbow() {

              if (document.getElementById("CoinRainbow").src.match("CoinSLotsBlue.png"))
              {
                  document.getElementById("CoinRainbow").src = "Images/Body/CoinSlotsGreen.png";
                  // console.log("Changed to Green");
              } else {
                  document.getElementById("CoinRainbow").src = "Images/Body/CoinSLotsBlue.png";
                  // console.log("Change to Blue");
              }
              cointoggleRainbow()
          };
function changeImageMaintRainbow() {

          if (document.getElementById("MaintRainbow").src.match("SkirtBlue.png"))
          {
              document.getElementById("MaintRainbow").src = "Images/Body/SkirtGreen.png";
              // console.log("Changed to Green");
          } else {
              document.getElementById("MaintRainbow").src = "Images/Body/SkirtBlue.png";
              // console.log("Change to Blue");
          }
          mainttoggleRainbow()
      };
function changeImageVerticalBarsRainbow() {

        if (document.getElementById("VerticalBarstRainbow").src.match("DataPanelVerticalBlue.png"))
        {
            document.getElementById("VerticalBarstRainbow").src = "Images/Body/DataPanelVerticalGreen.png";
            // console.log("Changed to Green");
        } else {
            document.getElementById("VerticalBarstRainbow").src = "Images/Body/DataPanelVerticalBlue.png";
            // console.log("Change to Blue");
        }
        verticaltoggleRainbow()
    };

  function changeImageFrontHPRainbow() {

            if (document.getElementById("FrontHPRainbow").src.match("FrontHPBlue.png"))
            {
                document.getElementById("FrontHPRainbow").src = "Images/Dome/FrontHPGreen.png";
                // console.log("Changed to Green");
            } else {
                document.getElementById("FrontHPRainbow").src = "Images/Dome/FrontHPBlue.png";
                // console.log("Change to Blue");
            }
            frontHPtoggleRainbow()
        };
    function changeImageTopHPRainbow() {

              if (document.getElementById("TopHPRainbow").src.match("TopHPBlue.png"))
              {
                  document.getElementById("TopHPRainbow").src = "Images/Dome/TopHPGreen.png";
                  // console.log("Changed to Green");
              } else {
                  document.getElementById("TopHPRainbow").src = "Images/Dome/TopHPBlue.png";
                  // console.log("Change to Blue");
              }
              topHPtoggleRainbow()
          };
    function changeImageRearHPRainbow() {

              if (document.getElementById("RearHPRainbow").src.match("RearHPBlue.png"))
              {
                  document.getElementById("RearHPRainbow").src = "Images/Dome/RearHPGreen.png";
                  // console.log("Changed to Green");
              } else {
                  document.getElementById("RearHPRainbow").src = "Images/Dome/RearHPBlue.png";
                  // console.log("Change to Blue");
              }
              rearHPtoggleRainbow()
          };
function changeapply(u){
  document.getElementById(u).src = "Images/blankcheckmark.png";

}

function commandNoOptionsRainbow( y, t, u) {
  // var bodyLEDi2cdest = "BL"
  let tmp = u;
  document.getElementById(u).src = "Images/checkmark.png";
  // setTimeout(changeapply(), 2000, u);
  setTimeout(function(){  document.getElementById(u).src = "Images/blankcheckmark.png";}, 2000)



  for (var i = 0; i < checkedItemsRainbow.length; i++) {
    if (checkedItemsRainbow[i] === "LDPRainbow") {
      // console.log("L selected");
      var ldpcommandstring = "L" + y + t;

      console.log(ldpcommandstring);
    };

    if (checkedItemsRainbow[i] === "CoinRainbow") {
      // console.log("C selected");
      var coincommandstring = "C" + y + t;
      console.log(coincommandstring);
    };

    if (checkedItemsRainbow[i] === "VerticalBarstRainbow") {
      // console.log("V selected");
      var vucommandstring = "V" + y + t;
      console.log(vucommandstring);
    };

    if (checkedItemsRainbow[i] === "MaintRainbow") {
      // console.log("M selected");
      var mcommandstring = "M" + y + t;
      console.log(mcommandstring);
    };
    if (checkedItemsRainbow[i] === "D") {
      // console.log("M selected");
      var dcommandstring = checkedItems[i] + y + t;
      console.log(dcommandstring);
    };
    if (checkedItemsRainbow[i] === "I") {
      // console.log("M selected");
      var icommandstring = checkedItems[i] + y + t;
      console.log(icommandstring);
    };
    if (checkedItemsRainbow[i] === "FrontHPRainbow") {
      // console.log("M selected");
      var hpfcommandstring = "F007";
      console.log(hpfcommandstring);
    };
    if (checkedItemsRainbow[i] === "TopHPRainbow") {
      // console.log("M selected");
      var hptcommandstring = "T007";
      console.log(hptcommandstring);
    };
    if (checkedItemsRainbow[i] === "RearHPRainbow") {
      // console.log("M selected");
      var hprcommandstring = "R007";
      console.log(hprcommandstring);
    };
  };


  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    // ldpi2cdest: bodyLEDi2cdest,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring,
    dcommandstring: dcommandstring,
    icommandstring: icommandstring,
    hpfcommandstring: hpfcommandstring,
    hptcommandstring: hptcommandstring,
    hprcommandstring: hprcommandstring
  });


};







//Uses this section to determine which led strips to use











var checkedItems = new Array();
var servoCheckedItems = new Array();

function ldptoggle() {
 let tmp = document.querySelector('#L');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements2()
};
function cointoggle() {
 let tmp = document.querySelector('#C');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements2()
};

function vutoggle() {
 let tmp = document.querySelector('#V');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements2()
};

function mainttoggle() {
 let tmp = document.querySelector('#M');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements2()
};

function dptoggle(a) {
 let tmp = document.querySelector('#D');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements2()
};

function cbitoggle() {
 let tmp = document.querySelector('#I');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements2()
};

function Doortoggle(a) {
  let st = "#" + a
 let tmp = document.querySelector(st);
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements3()
};


function LeftDoortoggle() {
 let tmp = document.querySelector('#LD');
 tmp.classList.toggle('active');
 if (tmp.classList.contains('active')) {
 }
  getCheckedElements3()
  console.log(servoArray)
};

var imgArray = [];
var servoArray = [];

function getCheckedElements2() {
  var imgArray = document.getElementsByName('stripSelector');
  checkedItems.length = 0;
  for (var i = 0; i < imgArray.length; i++) {
    var tmp = imgArray[i].classList.toString();
    if (tmp.indexOf('active') != -1) {
      checkedItems.push(imgArray[i].id.toString());
    }

    }
  };

function getCheckedElements3() {
  var servoArray = document.getElementsByName('ServoSelector');
  servoCheckedItems.length = 0;
  for (var i = 0; i < servoArray.length; i++) {
    var tmp = servoArray[i].classList.toString();
    if (tmp.indexOf('active') != -1) {
      servoCheckedItems.push(servoArray[i].id.toString());
    }

    }
  };








function changeImageLDP() {

          if (document.getElementById("L").src.match("LDPBlue.png"))
          {
              document.getElementById("L").src = "Images/Body/LDPGreen.png";
              // console.log("Changed to Green");
          } else {
              document.getElementById("L").src = "Images/Body/LDPBlue.png";
              // console.log("Change to Blue");
          }
          ldptoggle()
      };

function changeImageCoinSlots() {

      if (document.getElementById("C").src.match("CoinSLotsBlue.png"))
      {
          document.getElementById("C").src = "Images/Body/CoinSlotsGreen.png";
          // console.log("Changed to Green");
      } else {
          document.getElementById("C").src = "Images/Body/CoinSLotsBlue.png";
          // console.log("Change to Blue");
      }
      cointoggle()
  }

  function changeImageMaint() {

        if (document.getElementById("M").src.match("SkirtBlue.png"))
        {
            document.getElementById("M").src = "Images/Body/SkirtGreen.png";
            // console.log("Changed to Green");
        } else {
            document.getElementById("M").src = "Images/Body/SkirtBlue.png";
            // console.log("Change to Blue");
        }
        mainttoggle()
    }

    function changeImageDataPanelVerticalBars() {

          if (document.getElementById("V").src.match("DataPanelVerticalBlue.png"))
          {
              document.getElementById("V").src = "Images/Body/DataPanelVerticalGreen.png";
              // console.log("Changed to Green");
          } else {
              document.getElementById("V").src = "Images/Body/DataPanelVerticalBlue.png";
              // console.log("Change to Blue");
          }
          vutoggle()
      }










function getSliderValue(t) {
  var slider1 = document.getElementById(t).value;
  return slider1;
}

function getcolor1(z) {
  var color = document.getElementById(z)

  var colorValue = (color.options[color.selectedIndex].value);
  // alert(colorValue);
  return colorValue;
};

function getcolor2(s) {
  var color2 = document.getElementById(s)

  var colorValue2 = (color2.options[color2.selectedIndex].value);
  // alert(colorValue);
  return colorValue2;
};

function geti2CDevice(g) {
  var i2cdevice1 = document.getElementById(g)

  var i2cdevice1Value = (i2cdevice1.options[i2cdevice1.selectedIndex].value);
  // alert(colorValue);
  return i2cdevice1Value;
};


function getStripName (){

for (var i = 0; i < checkedItems.length; i++) {

  if (checkedItems[i] === "L") {
    console.log("L selected");
      return checkedItems[i];
  };
  if (checkedItems[i] === "LDPRainbow") {
    console.log("L selected");
      return checkedItems[i];
  };
  if (checkedItems[i] === "C") {
    console.log("C selected");
      return checkedItems[i];
  };
  if (checkedItems[i] === "V") {
    console.log("V selected");
      return checkedItems[i];
  };
  if (checkedItems[i] === "M") {
    console.log("M selected");
      return checkedItems[i];
  };
  if (checkedItems[i] === "I") {
    console.log("I selected");
      return checkedItems[i];
  };
  if (checkedItems[i] === "D") {
    console.log("D selected");
      return checkedItems[i];
  };
};
};
//var socket = io.connect('http://astromech.local:5000');
// var socket = io();
var socket = io.connect ();
// var socket1 = io.connect('http://astromech.local:5000');
// var socket2 = io.connect('10.0.0.40:5000');
// var socket = io.connect('127.0.0.1:3000');

function commandSingleColor(x, y, t, z) {
  // let LEDSelector = getStripName();
  let colorValues = getcolor1(z);

  for (var i = 0; i < checkedItems.length; i++) {
    if (checkedItems[i] === "L") {
      // console.log("L selected");
      var ldpcommandstring = "L" + y + t + colorValues;
      console.log(ldpcommandstring);
    }
    if (checkedItems[i] === "C") {
      // console.log("C selected");
      var coincommandstring = checkedItems[i] + y + t + colorValues;
      console.log(coincommandstring);
    };

    if (checkedItems[i] === "V") {
      // console.log("V selected");
      var vucommandstring = checkedItems[i] + y + t + colorValues;
      console.log(vucommandstring);
    };

    if (checkedItems[i] === "M") {
      // console.log("M selected");
      var mcommandstring = checkedItems[i] + y + t + colorValues;
      console.log(mcommandstring);
    };
  };

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring
  });
};



function commandNoOptions(x, y, t, z) {

  for (var i = 0; i < checkedItems.length; i++) {
    if (checkedItems[i] === "L") {
      // console.log("L selected");
      var ldpcommandstring = checkedItems[i] + y + t;
      console.log(ldpcommandstring);
    }
    if (checkedItems[i] === "C") {
      // console.log("C selected");
      var coincommandstring = checkedItems[i] + y + t;
      console.log(coincommandstring);
    };

    if (checkedItems[i] === "V") {
      // console.log("V selected");
      var vucommandstring = checkedItems[i] + y + t;
      console.log(vucommandstring);
    };

    if (checkedItems[i] === "M") {
      // console.log("M selected");
      var mcommandstring = checkedItems[i] + y + t;
      console.log(mcommandstring);
    };
    if (checkedItems[i] === "D") {
      // console.log("M selected");
      var dcommandstring = checkedItems[i] + y + t;
      console.log(dcommandstring);
    };
    if (checkedItems[i] === "I") {
      // console.log("M selected");
      var icommandstring = checkedItems[i] + y + t;
      console.log(icommandstring);
    };
  };

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring,
    dcommandstring: dcommandstring,
    icommandstring: icommandstring
  });
  // socket1.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket2.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket3.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
};








function commandTwoColors(x, y, t, z, s) {
  let LEDSelector = getStripName(x);
  let sliderValue = getSliderValue(t);
  let colorValues1 = getcolor1(z);
  let colorValues2 = getcolor2(s);
  for (var i = 0; i < checkedItems.length; i++) {
    if (checkedItems[i] === "L") {
      // console.log("L selected");
      var ldpcommandstring = checkedItems[i] + y + sliderValue + colorValues1 + colorValues2;
      console.log(ldpcommandstring);
    };

    if (checkedItems[i] === "C") {
      // console.log("C selected");
      var coincommandstring = checkedItems[i] + y + sliderValue + colorValues1 + colorValues2;
      console.log(coincommandstring);
    };

    if (checkedItems[i] === "V") {
      // console.log("V selected");
      var vucommandstring = checkedItems[i] + y + sliderValue + colorValues1 + colorValues2;
      console.log(vucommandstring);
    };

    if (checkedItems[i] === "M") {
      // console.log("M selected");
      var mcommandstring = checkedItems[i] + y + sliderValue + colorValues1 + colorValues2;
      console.log(mcommandstring);
    };
  };

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring
  });
  // socket1.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket2.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket3.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
};


function commandTwoColorsNoSlider( y, t, z, s) {
  let colorValues1 = getcolor1(z);
  let colorValues2 = getcolor2(s);
  for (var i = 0; i < checkedItems.length; i++) {
    if (checkedItems[i] === "L") {
      // console.log("L selected");
      var ldpcommandstring = checkedItems[i] + y + t + colorValues1 + colorValues2;
      console.log(ldpcommandstring);
    };

    if (checkedItems[i] === "C") {
      // console.log("C selected");
      var coincommandstring = checkedItems[i] + y + t + colorValues1 + colorValues2;
      console.log(coincommandstring);
    };

    if (checkedItems[i] === "V") {
      // console.log("V selected");
      var vucommandstring = checkedItems[i] + y + t + colorValues1 + colorValues2;
      console.log(vucommandstring);
    };

    if (checkedItems[i] === "M") {
      // console.log("M selected");
      var mcommandstring = checkedItems[i] + y  + t + colorValues1 + colorValues2;
      console.log(mcommandstring);
    };
  };

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring
  });
  // socket1.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket2.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket3.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
};


function commandOneColorAndSpeed(x, y, t, z) {
  let LEDSelector = getStripName(x);
  let sliderValue = getSliderValue(t);
  let colorValues1 = getcolor1(z);
  for (var i = 0; i < checkedItems.length; i++) {
    if (checkedItems[i] === "L") {
      // console.log("L selected");
      var ldpcommandstring = checkedItems[i] + y + sliderValue + colorValues1;
      console.log(ldpcommandstring);
    };

    if (checkedItems[i] === "C") {
      // console.log("C selected");
      var coincommandstring = checkedItems[i] + y + sliderValue + colorValues1;
      console.log(coincommandstring);
    };

    if (checkedItems[i] === "V") {
      // console.log("V selected");
      var vucommandstring = checkedItems[i] + y + sliderValue + colorValues1;
      console.log(vucommandstring);
    };

    if (checkedItems[i] === "M") {
      // console.log("M selected");
      var mcommandstring = checkedItems[i] + y + sliderValue + colorValues1;
      console.log(mcommandstring);
    };
  };

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring
  });
  // socket1.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket2.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket3.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
};



function commandStripOff(x,) {
  let LEDSelector = getStripName(x);

  for (var i = 0; i < checkedItems.length; i++) {
    if (checkedItems[i] === "L") {
      // console.log("L selected");
      var ldpcommandstring = checkedItems[i] + '98';
      console.log(ldpcommandstring);
    };

    if (checkedItems[i] === "C") {
      // console.log("C selected");
      var coincommandstring = checkedItems[i] + '98';
      console.log(coincommandstring);
    };

    if (checkedItems[i] === "V") {
      // console.log("V selected");
      var vucommandstring = checkedItems[i] + '98';
      console.log(vucommandstring);
    };

    if (checkedItems[i] === "M") {
      // console.log("M selected");
      var mcommandstring = checkedItems[i] + '98';
      console.log(mcommandstring);
    };
    if (checkedItems[i] === "D") {
      // console.log("M selected");
      var dcommandstring = checkedItems[i] + '98';
      console.log(mcommandstring);
    };
    if (checkedItems[i] === "I") {
      // console.log("M selected");
      var icommandstring = checkedItems[i] + '98';
      console.log(mcommandstring);
    };
  };

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring,
    dcommandstring: dcommandstring,
    icommandstring: icommandstring
  });
  // socket1.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket2.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket3.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
};

function commandStripAllOff() {
  var ldpcommandstring = 'A98';
  var coincommandstring = 'L98';
  var vucommandstring = 'L98';
  var mcommandstring = 'L98';

  socket.emit('command', {
    ldpcommandstring: ldpcommandstring,
    coincommandstring: coincommandstring,
    vucommandstring: vucommandstring,
    mcommandstring: mcommandstring
  });
  // socket1.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket2.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
  // socket3.emit('command', {
  //   ldpcommandstring: ldpcommandstring,
  //   coincommandstring: coincommandstring,
  //   vucommandstring: vucommandstring,
  //   mcommandstring: mcommandstring
  // });
};

function sendSerialCommand(x) {
  let command = document.getElementById(x).value;
  let commandUpper = command.toUpperCase();
  console.log(commandUpper);
  socket.emit('command', {
    serialcommandstring: commandUpper,

  });
};
function sendi2CCommand(b, x) {
  let i2Ccommand = document.getElementById(x).value;
  let i2CcommandUpper = i2Ccommand.toUpperCase();
  let i2cDevice = geti2CDevice(b);
   // console.log(commandUpper);
  socket.emit('command', {
    i2Ccommandstring: i2CcommandUpper,
    i2cCommandDevice: i2cDevice,

  });
};

// Varialbles for the selection of the LED selector buttons
var ldpImageClicked = '/Images/Buttons/Button-LED-Selector-LDP-Yellowv5.png';
var ldpImageUnclicked = '/Images/Buttons/Button-LED-Selector-LDP-Whitev5.png';
var ldpState ;

var maintImageClicked = '/Images/Buttons/Button-LED-Selector-Maint-Yellow.png';
var maintImageUnclicked = '/Images/Buttons/Button-LED-Selector-Maint-White.png';
var maintState = false;

var coinImageClicked = '/Images/Buttons/Button-LED-Selector-Coin-Yellowv5.png';
var coinImageUnclicked = '/Images/Buttons/Button-LED-Selector-Coin-Whitev5.png';
var coinState = false;

var vuImageClicked = '/Images/Buttons/Button-LED-Selector-VU-Yellow.png';
var vuImageUnclicked = '/Images/Buttons/Button-LED-Selector-VU-White.png';
var vuState = false;

var checkedItems = new Array();

function swapImageLDP(imgID) {

  let theldpImage = document.getElementById(imgID);
  let theldpState = theldpImage.src;

  if (theldpState.indexOf(ldpImageUnclicked) != -1) {
    theldpImage.src = ldpImageClicked;
    ldpState = true;
    // console.log('changed to Clicked');
  } else {
    theldpImage.src = ldpImageUnclicked;
    ldpState = false;

    // console.log('changed to Unclicked');
  }

  getCheckedElements();
};

function swapImageMaint(imgID) {

  let themaintImage = document.getElementById(imgID);
  let themaintState = themaintImage.src;

  if (themaintState.indexOf(maintImageUnclicked) != -1) {
    themaintImage.src = maintImageClicked;
    // console.log('changed to Clicked');
  } else {
    themaintImage.src = maintImageUnclicked;
    // console.log('changed to Unclicked');
  }
  getCheckedElements();
};

function swapImageCoin(imgID) {

  let thecoinImage = document.getElementById(imgID);
  let thecoinState = thecoinImage.src;

  if (thecoinState.indexOf(coinImageUnclicked) != -1) {
    thecoinImage.src = coinImageClicked;
    // console.log('changed to Clicked');
  } else {
    thecoinImage.src = coinImageUnclicked;
    // console.log('changed to Unclicked');
  }
  getCheckedElements();
};

function swapImageVU(imgID) {

  let thevuImage = document.getElementById(imgID);
  let thevuState = thevuImage.src;

  if (thevuState.indexOf(vuImageUnclicked) != -1) {
    thevuImage.src = vuImageClicked;
    // console.log('changed to Clicked');
  } else {
    thevuImage.src = vuImageUnclicked;
    // console.log('changed to Unclicked');
  }
  getCheckedElements();
};
var imgArray = [];

function getCheckedElements() {
 var imgArray = document.getElementsByName('checkboximg');
  checkedItems.length = 0;
  for (var i = 0; i < imgArray.length; i++) {
    var tmp = imgArray[i].src.toString();
    if (tmp.indexOf(ldpImageClicked) != -1) {
      checkedItems.push(imgArray[i].id.toString());
    }
    if (tmp.indexOf(maintImageClicked) != -1) {
      checkedItems.push(imgArray[i].id.toString());
    }
    if (tmp.indexOf(coinImageClicked) != -1) {
      checkedItems.push(imgArray[i].id.toString());
    }
    if (tmp.indexOf(vuImageClicked) != -1) {
      checkedItems.push(imgArray[i].id.toString());
    }
  }
}

// const blankBorderLDP = document.querySelector('.blankBorderLDP');
// const ldp = document.querySelector('#ldp12');
// const coin = document.getElementById('coin');
// const vu = document.getElementById('vu');
// const maint = document.getElementById('maint');
//
// ldp.addEventListener('click' => () {
//   // blankBorderLDP.classList.toggle('active');
//   alert("ldp clicked");
//
// });



function preloadImages() {
  for (var i = 0; i < arguments.length; i++) {
    var tmp = new Image();
    tmp.src = arguments[i];
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};


// function displayState(imgID) {
//   let theldpImage = document.getElementById(imgID);
//   let theldpState = theldpImage.src;
//
//   if (theldpState.indexOf(ldpImageUnclicked) != -1) {
//     // theldpImage.src = ldpImageClicked;
//     ldpState = true;
//     // console.log('changed to Clicked');
//   } else {
//     // theldpImage.src = ldpImageUnclicked;
//     ldpState = false;
//
//     // console.log('changed to Unclicked');
//   }
//
// }

//Sets the little icon in the tab
function setFavicons(favImg){
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('/Images/r2-d2.ico')
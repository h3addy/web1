$(document).ready(function(){

  

  //moving to particular div
    $("#proj, #tech, #work, #cont").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });

  //scroll back to top
    var btn = $("#top-scroll");
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) { 
          btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop:0
        }, 
        '300');
    });
      
    //accordion
    /*$("#panels").accordion({
      collapsible: true,
      event: "click",
      active: false,
      heightStyle: true,
      icons: {header:"ui-icon-plus", activeHeader:"ui-icon-minus"},
    }); */

    var accordions = document.getElementsByClassName("accordion");
    for (var i=0;i<accordions.length;i++){
      accordions[i].onmouseenter = function(){
        this.classList.toggle('is-open');
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          //accordion is open
          content.style.maxHeight = null;
          content.style.border = null;
        }else{
          //accordion is close
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.border = "1px solid black";
        }
      }
      accordions[i].onmouseleave = function(){
        this.classList.toggle('is-open');
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          //accordion is open
          content.style.maxHeight = null;
          content.style.border = null;
        }else{
          //accordion is close
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.border = "1px solid black";
        }
      }
      
    }

    //moving circles
    var ID1 = 0;
    var ID2 = 0;
    var ID3 = 0;
    var ID10 = 0;
    ID1 = window.setInterval(trig1,500);
    ID2 = window.setInterval(trig2,500);
    ID3 = window.setInterval(trig3,500);
    ID10 = window.setInterval(trig10,500);
    function trig1(){
      verticalAnimation(document.getElementById('col1'),document.getElementById('circle1'));
    }
    function trig2(){
      verticalAnimation(document.getElementById('col1'),document.getElementById('circle2'));
    }
    function trig3(){
      verticalAnimation(document.getElementById('col1'),document.getElementById('circle3'));
    }
    function trig10(){
      verticalAnimation(document.getElementById('col1'),document.getElementById('circle10'));
    }
    var ID4 = 0;
    var ID5 = 0;
    var ID6 = 0;
    ID4 = window.setInterval(trig4,500);
    ID5 = window.setInterval(trig5,500);
    ID6 = window.setInterval(trig6,500);
    function trig4(){
      verticalAnimation(document.getElementById('col3'),document.getElementById('circle4'));
    }
    function trig5(){
      verticalAnimation(document.getElementById('col3'),document.getElementById('circle5'));
    }
    function trig6(){
      verticalAnimation(document.getElementById('col3'),document.getElementById('circle6'));
    }

    var ID7 = 0;
    var ID8 = 0;
    var ID9 = 0;
    ID7 = window.setInterval(trig7,500);
    ID8 = window.setInterval(trig8,500);
    ID9 = window.setInterval(trig9,500);
    function trig7(){
      verticalAnimation(document.getElementById('col2'),document.getElementById('circle7'));
    }
    function trig8(){
      verticalAnimation(document.getElementById('col2'),document.getElementById('circle8'));
    }
    function trig9(){
      verticalAnimation(document.getElementById('col2'),document.getElementById('circle9'));
    }

    function verticalAnimation(cV, eV)  {
      var boxCont = cV;
      var computedStyle = window.getComputedStyle(boxCont);
      var w = computedStyle.getPropertyValue('width').replace("px","");
      var h = computedStyle.getPropertyValue('height').replace("px","");
      w = Number(w);
      h = Number(h);
      
      var boxOne = eV;
      var computedStyle = window.getComputedStyle(boxOne);
      var ml = computedStyle.getPropertyValue('margin-left').replace("px","");
      var mt = computedStyle.getPropertyValue('margin-top').replace("px","");
      ml = Number(ml);
      mt = Number(mt);
      var lm = 0;
      var tm = 0;
      var r1 = 0;
      var rand = generateRand(1, 10, 10);
      var dl = generateRand(0, 1, 10);
      if(rand%2==0){
        if(dl==1){
          r1 = generateRand(400, 900, 1000);
          lm = ml + r1;
          if(lm > w)
            lm = w/2;
          boxOne.style.marginLeft = (lm).toString() + "px";
        }
        else {
          r1 = generateRand(400, 900, 1000);
          lm = ml - r1;
          if(lm < 0)
            lm = 0;
          boxOne.style.marginLeft = (lm).toString() + "px";
        }
      }
      else{
      if(dl==0){
          r1 = generateRand(200, 500, 1000);
          tm = mt + r1;
          if(tm > h)
            tm = h/2;
          boxOne.style.marginTop = (tm).toString() + "px";
        }
        else {
          r1 = generateRand(200, 500, 1000);
          tm = mt - r1;
          if(tm < 0)
            tm = 0;
          boxOne.style.marginTop = (tm).toString() + "px";
        }
      }
      
      boxOne.classList.add('horizTranslate');
      
    }
    function generateRand(min1, max1, xv1){
      //let min1 = min;
      //let max1 = max;
      //let xv1 = xv;
      var r = Math.floor((Math.random() * xv1));
      if (r >= min1 && r <= max1){
        return r;
        }
      return generateRand(min1, max1, xv1);
    }

    /*---Work Container dragging and dropping---*/
dragElement(document.getElementById("school-lyf"));
dragElement(document.getElementById("work-lyf"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0,
    l = 0,
    lw = 0,
    iT = 0,
    iL = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    iT = elmnt.offsetTop;
    //console.log("down"+iT);
    iL = elmnt.offsetLeft;
    elmnt.onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // calculate the new cursor position:
    //console.log("X"+e.clientX);
    //console.log("Y"+e.clientY);
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    //console.log("p1"+pos1);
    //console.log("p2"+pos2);
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    //console.log(elmnt.offsetTop - pos2);
    console.log(elmnt.offsetLeft - pos1);

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

  }

  function closeDragElement() {
    var mt = document.getElementById("college-lyf").offsetTop;
    var ml = document.getElementById("college-lyf").offsetLeft;
    //alert(mt+" "+ml);
    var f1 = false;
    var f2 = false;
    //console.log(elmnt.id);
    if (elmnt.id == "school-lyf") {
      f1 = elmnt.offsetTop - pos1 >= 50 && elmnt.offsetTop - pos1 <= 150;
      f2 = elmnt.offsetLeft - pos1 >= 540 && elmnt.offsetLeft - pos1 <= 700;
    }
    if (elmnt.id == "work-lyf") {
      f1 = elmnt.offsetTop - pos1 >= 50 && elmnt.offsetTop - pos1 <= 150;
      f2 = elmnt.offsetLeft - pos1 >= 540 && elmnt.offsetLeft - pos1 <= 700;
    }
    //console.log(f1 + " " + f2);
    if (f1 && f2) {
      var t1 = document.getElementById("college-lyf").innerHTML;
      document.getElementById("college-lyf").innerHTML = elmnt.innerHTML;
      elmnt.innerHTML = t1;

    }
    elmnt.style.top = iT + "px";
    elmnt.style.left = iL + "px";
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

    
});
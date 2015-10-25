var monthsArray = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
var weekDaysArray = ["pon", "wt", "śr", "czw", "pt", "sob", "nie"];

var cars = [
  {
    name: "Chevrolet Spark",
    id: 1
  },
  {
    name: "Chevrolet Spark",
    id: 2
  },
  {
    name: "Chevrolet Spark",
    id: 3
  },
  {
    name: "Fiat Panda",
    id: 4
  },
  {
    name: "Fiat Panda",
    id: 5
  },
  {
    name: "Fiat Panda",
    id: 6
  }
];

var rents = [
  {
    name: "Jan Kowalski",
    dateStart: {
      year: 2015,
      month: 7,
      day: 24
    },
    dateEnd: {
      year: 2015,
      month: 7,
      day: 26
    },
    carId: 3
  },
  {
    name: "Jan Kowalski",
    dateStart: {
      year: 2015,
      month: 10,
      day: 24
    },
    dateEnd: {
      year: 2015,
      month: 10,
      day: 26
    },
    carId: 3
  },
  {
    name: "Jan Nowak",
    dateStart: {
      year: 2015,
      month: 10,
      day: 27
    },
    dateEnd: {
      year: 2015,
      month: 10,
      day: 28
    },
    carId: 3
  },
  {
    name: "Paweł Kowalski",
    dateStart: {
      year: 2015,
      month: 10,
      day: 23
    },
    dateEnd: {
      year: 2015,
      month: 10,
      day: 25
    },
    carId: 2
  },
  {
    name: "Zbigniew Boniek",
    dateStart: {
      year: 2015,
      month: 10,
      day: 22
    },
    dateEnd: {
      year: 2015,
      month: 10,
      day: 29
    },
    carId: 1
  }
];



$(function() {
  var draw = function () {
    context.clearRect(0, 0, cCanvas.width, cCanvas.height);

    for (var x = 0-canvasOffsetX; x < cWidth; x += cellWidth) {
      context.moveTo(x, 0);
      context.lineTo(x, cHeight);
    }

    for (var y = 0; y < 110; y += 37) {
      context.moveTo(0, y);
      context.lineTo(cWidth, y);
    }

    for (var y = 110-canvasOffsetY; y < cHeight; y += cellHeight) {
      context.moveTo(0, y);
      context.lineTo(cWidth, y);
    }


    context.strokeStyle = "#dbdbdb";
    context.stroke();

    context.beginPath();

    var d = new Date();

    var startDate = new Date(firstYear, firstMonth, 1);
    var endDate = new Date(lastYear, lastMonth, 1);
    endDate.setMonth(endDate.getMonth() + 1);

    var month = startDate.getMonth();
    var monthDays = 0;
    var monthStartDrawing = 336-canvasOffsetX;
    var dayStartDrawing = 336-canvasOffsetX;
    var dd;

    for (dd = startDate; dd < endDate; dd.setDate(dd.getDate() + 1)) {
      context.fillStyle = "#fafafa";
      context.fillRect(parseInt(dayStartDrawing+1), 38, cellWidth-1, 36);
      context.fillRect(parseInt(dayStartDrawing+1), 75, cellWidth-1, 34);

      context.font = "18px Arial";
      if (dd.getDay()==6)
        context.fillStyle = "#ff0000";
      else
        context.fillStyle = "#000000";
      context.textAlign = "center";
      context.fillText(dd.getDate(), (dayStartDrawing+parseInt(cellWidth/2)), 64);
      context.fillText(weekDaysArray[dd.getDay()], (dayStartDrawing+parseInt(cellWidth/2)), 97);

      if (dd.getMonth() != month) {
        context.fillStyle = "#fafafa";
        context.fillRect(parseInt(monthStartDrawing+1), 0, parseInt(monthDays*cellWidth-1), 36);
        
        context.font = "18px Arial";
        context.fillStyle = "#000000";
        context.textAlign = "center";
        context.fillText(monthsArray[dd.getMonth()], parseInt(monthStartDrawing+1+parseInt(monthDays*(cellWidth-1)/2)), 26);

        monthStartDrawing = parseInt(monthStartDrawing + monthDays*cellWidth);
        month = dd.getMonth();
        monthDays=0;
      } 
      monthDays++;
      dayStartDrawing = parseInt(dayStartDrawing+cellWidth);
    }
    if (dd.getMonth() != month) {
      context.fillStyle = "#fafafa";
      context.fillRect(parseInt(monthStartDrawing+1), 0, parseInt(monthDays*cellWidth-1), 36);
      context.font = "18px Arial";
      context.fillStyle = "#000000";
      context.textAlign = "center";
      context.fillText(monthsArray[dd.getMonth()], parseInt(monthStartDrawing+(monthDays*(cellWidth-1)/2)), 26);


      monthStartDrawing = parseInt(monthStartDrawing + monthDays*cellWidth);
      month = dd.getMonth();
      monthDays=0;
    }

    context.font = "18px Arial";
    context.textAlign = "left";

    $.each(cars, function(i, obj) {
      context.fillStyle = "#fafafa";
      context.fillRect(1, parseInt(111-canvasOffsetY + i*cellHeight), 335, cellHeight-1);
      context.fillStyle = "#000";
      context.fillText(obj.name, 5, parseInt(111-canvasOffsetY + i*cellHeight)+30);
    });

    context.moveTo(0, 0);
    context.fillStyle = "#fafafa";
    context.fillRect(1, 0, 335, 109);
  };

  var cWidth = parseInt($(window).width());
  var cHeight = parseInt($(window).height() - 150);
  $('#context')
    .attr('width', cWidth)
    .attr('height', cHeight);

  var cellWidth = 56;
  var cellHeight = 48;

  var verticalLines = parseInt(cWidth / cWidth);
  var horizontalLines = parseInt(cHeight / cellHeight);

  var cCanvas = document.getElementById("context");
  var context = cCanvas.getContext("2d");

  // draw();
  context.lineWidth = 1;


  var firstMonth = 6;
  var firstYear = 2015;

  var lastMonth = 11;
  var lastYear = 2015;

  // var allDaysOnSheet = Math.round(((new Date(lastYear, lastMonth, 1))-(new Date(firstYear, firstMonth, 1)))/(1000*60*60*24));;


  var d = new Date();
  // d.setDate(1);
  d.setMonth(d.getMonth()-1);

  // var nowDaysOnSheet = Math.round(((new Date(lastYear, lastMonth, 1))-(d))/(1000*60*60*24));

  var offsetDays =  Math.round(((new Date(firstYear, firstMonth, 1))-d)/(1000*60*60*24));

  var minOffsetX = parseInt((offsetDays+1)*cellWidth);
  
  var canvasOffsetX = parseInt((offsetDays+1)*cellWidth*(-1));
  var canvasOffsetY = 0;

  draw();



  var offset,x,y,moving,lastPosition = {},deltaX,deltaY;
  $("#context").mousedown(function(event) {
    offset = $(this).offset();
    x = event.pageX - offset.left;
    y = event.pageY - offset.top;

    // if (x <= 337)
    //   return false;


    moving = true;
  });

  $("#context").mouseup(function(event) {
    lastPosition = {};
    moving = false;
  });

  $("#context").mousemove(function(event) {
    if (moving == true) {
      //check to make sure there is data to compare against
      if (typeof(lastPosition.x) != 'undefined') {

        //get the change from last position to this position
        deltaX = lastPosition.x - event.clientX,
        deltaY = lastPosition.y - event.clientY;

        //check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
          canvasOffsetX += deltaX;
        } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
          canvasOffsetX += deltaX;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
          canvasOffsetY += deltaY;
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
          canvasOffsetY += deltaY;
        }

        if (canvasOffsetY < 0) canvasOffsetY = 0;
        if (canvasOffsetX < 0) canvasOffsetX = 0;


      }


      draw();
      //set the new last position to the current for next time
      lastPosition = {
          x : event.clientX,
          y : event.clientY
      };
    } else return false;
  });




});
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
      year: 2014,
      month: 4,
      day: 24
    },
    dateEnd: {
      year: 2014,
      month: 5,
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
  context.lineWidth = 1;

  for (var x = 0; x < cWidth; x += cellWidth) {
    context.moveTo(x, 0);
    context.lineTo(x, cHeight);
  }

  for (var y = 0; y < 110; y += 37) {
    context.moveTo(0, y);
    context.lineTo(cWidth, y);
  }

  for (var y = 110; y < cHeight; y += cellHeight) {
    context.moveTo(0, y);
    context.lineTo(cWidth, y);
  }


  context.strokeStyle = "#dbdbdb";
  context.stroke();

  context.beginPath();
  context.moveTo(0, 0);
  context.fillStyle = "#fafafa";
  context.fillRect(1, 0, 335, 109);

  $.each(cars, function(i, obj) {
    context.fillRect(1, parseInt(111 + i*cellHeight), 335, cellHeight-1);
  });

  var firstMonth = 4;
  var firstYear = 2014;

  var lastMonth = 11;
  var lastYear = 2015;

  // var countMonths = (((lastYear - firstYear) * 12) + (lastMonth - firstMonth));

  // console.log(countMonths);

  var allDaysOnSheet = Math.round(((new Date(lastYear, lastMonth, 1))-(new Date(firstYear, firstMonth, 1)))/(1000*60*60*24));;

  // console.log(allDaysOnSheet);

  var d = new Date();

  var nowDaysOnSheet = Math.round(((new Date(lastYear, lastMonth, 1))-(d))/(1000*60*60*24));;

  var startDate = d;
  var endDate = new Date(lastYear, lastMonth, 1);

  var month = startDate.getMonth();
  var monthDays = 0;
  var monthStartDrawing = 336;
  var dayStartDrawing = 336;
  var dd;
  for (dd = startDate; dd < endDate; dd.setDate(d.getDate() + 1)) {
    context.fillRect(parseInt(dayStartDrawing+1), 38, cellWidth-1, 36);
    context.fillRect(parseInt(dayStartDrawing+1), 75, cellWidth-1, 34);
    dayStartDrawing = parseInt(dayStartDrawing+cellWidth);
    if (d.getMonth() != month) {
      context.fillRect(parseInt(monthStartDrawing+1), 0, parseInt(monthDays*cellWidth-1), 36);
      monthStartDrawing = parseInt(monthStartDrawing + monthDays*cellWidth);
      month = dd.getMonth();
      monthDays=0;
    }
    monthDays++;
  }
  if (d.getMonth() != month) {
    context.fillRect(parseInt(monthStartDrawing+1), 0, parseInt(monthDays*cellWidth-1), 36);
    monthStartDrawing = parseInt(monthStartDrawing + monthDays*cellWidth);
    month = dd.getMonth();
    monthDays=0;
  }





});
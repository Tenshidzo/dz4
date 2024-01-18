var monthsColors = {
    'січень': 'lightsteelblue',
    'лютий': 'azure',
    'березень': 'seagreen',
    'квітень': 'limegreen',
    'травень': 'mediumseagreen',
    'червень': 'skyblue',
    'липень': 'lightsalmon',
    'серпень': 'gold',
    'вересень': 'tomato',
    'жовтень': 'darkorange',
    'листопад': 'indianred',
    'грудень': 'slateblue'
  };

  for (var month in monthsColors) {
    document.write('<div class="month-div" style="background-color: ' + monthsColors[month] + ';">' + month + '</div>');
  }
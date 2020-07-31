google.charts.load('current', {'packages':['calendar', 'timeline']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  const freqData = new google.visualization.DataTable();
  const timelineData = new google.visualization.DataTable();
  fetch('/suggested-cal').
    then((response) => response.json()).
    then((myObject) => {
      // update freqData datatable
      // update timelineData datatable
    });
  drawFrequencyChart(freqData);
  drawTimelineChart(timelineData);
}

function drawFrequencyChart(freqData) {
  const options = {
    'title': 'Expected Application Heat Map'
  }
  const chart = new google.visualization.Calendar(document.getElementById('calendar-freq-map'));
  chart.draw(freqData, options);
}

function drawTimelineChart(timelineData) {
  const options = {
    'title': 'Suggested Application Timeline'
  }
  const chart = new google.visualization.Timeline(document.getElementById('timeline-chart'));
  chart.draw(timelineData, options);
}

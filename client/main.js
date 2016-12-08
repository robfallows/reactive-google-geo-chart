import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { Countries } from '/imports/both/Countries';
import './main.html';

Template.showChart.onCreated(function () {
  this.subscribe('countries');
  this.chartsReady = new ReactiveVar();
  google.charts.load('upcoming', { 'packages': ['geochart'] });
  google.charts.setOnLoadCallback(() => {
    this.chartsReady.set(true);
  });
});

Template.showChart.onRendered(function () {
  this.autorun(() => {
    if (this.chartsReady.get()) {
      const chart = new google.visualization.GeoChart(document.getElementById('chart'));
      const options = {};

      Tracker.autorun(() => {
        const popularity = [];
        popularity.push(['Country', 'Popularity']);
        Countries.find().forEach(doc => {
          popularity.push([doc.country, doc.popularity]);
        });

        const data = google.visualization.arrayToDataTable(popularity);

        chart.draw(data, options);
      });
    }
  });
});

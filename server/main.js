import { Meteor } from 'meteor/meteor';
import { Countries } from '/imports/both/Countries';

Meteor.startup(() => {
  Countries.remove({});

  [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ].forEach(arr => {
    Countries.insert({country: arr[0], popularity: arr[1]});
  });
});

Meteor.publish('countries', function() {
  return Countries.find();
});

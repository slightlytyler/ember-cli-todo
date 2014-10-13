import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://scorching-fire-3230.firebaseio.com/')
});

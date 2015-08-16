Matches = new Mongo.Collection('matches');
Picks = new Mongo.Collection('picks');

if (Meteor.isServer) {
	Meteor.publish('picks', function () {
		return Picks.find();
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('picks');
}
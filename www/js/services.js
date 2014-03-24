angular.module('starter.services', [])

.factory('ProjectService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var projects = [
    { id: 0, title: 'Pangea', description: 'Saving the world, one starving country at a time.' },
    { id: 1, title: 'BroHacks', description: 'Brohacking all over the world!' },
    { id: 2, title: 'RocketU', description: 'Bootcamp for bros who wanna step up there game' },
    { id: 3, title: 'Uber', description: 'Distrupting the taxi industry to help people who travel a lot.' },
    { id: 4, title: 'Uber', description: 'Distrupting the taxi industry to help people who travel a lot.' },
    { id: 5, title: 'Uber', description: 'Distrupting the taxi industry to help people who travel a lot.' },
    { id: 6, title: 'Uber', description: 'Distrupting the taxi industry to help people who travel a lot.' },
    { id: 7, title: 'Uber', description: 'Distrupting the taxi industry to help people who travel a lot.' },
    { id: 8, title: 'Uber', description: 'Distrupting the taxi industry to help people who travel a lot.' }
  ];

  return {
    all: function() {
      return projects;
    },
    get: function(projectsId) {
      return projects[projectsId];
    }
  }
});


'use strict';

/**
 * @ngdoc overview
 * @name nashaLeptaApp
 * @description
 * # nashaLeptaApp
 *
 * Main module of the application.
 */
angular
  .module('nashaLeptaApp', [
    'ngResource',
    'ngRoute',
    'firebase',
    'ngCkeditor',
    'angularPicasa',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'ngSocial',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    for (var template in appRootRoutes.views){
      $routeProvider
        .when(
        '/' + appRootRoutes.views[template].url, {
          template: '<nl-article data="'+appRootRoutes.views[template].url+'" auth="auth"></nl-article>'
        }
      );
    }
    $routeProvider
      .when('/', {
        redirectTo: '/news2016'
      })
      .when('/contacts', {
          templateUrl: 'templates/pages/contacts.html'
      })
      .when('/auth', {
        templateUrl: 'templates/pages/auth.html',
        controller: 'AuthCtrl'
      })
      .when('/articles', {
        templateUrl: 'templates/pages/articles/list.html',
        controller: 'ArticlesListCtrl'
      })
      .when('/articles/new', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesCreateCtrl'
      })
      .when('/articles/:id', {
        templateUrl: 'templates/pages/articles/show.html',
        controller: 'ArticlesShowCtrl'
      })
      .when('/articles/:id/edit', {
        templateUrl: 'templates/pages/articles/edit.html',
        controller: 'ArticlesUpdateCtrl'
      })
      .when('/albums', {
        templateUrl: 'templates/pages/albums/list.html',
        controller: 'AlbumsListCtrl'
      })
      .when('/albums/new', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsCreateCtrl'
      })
      .when('/albums/:id', {
        templateUrl: 'templates/pages/albums/show.html',
        controller: 'AlbumsShowCtrl'
      })
      .when('/albums/:id/edit', {
        templateUrl: 'templates/pages/albums/edit.html',
        controller: 'AlbumsUpdateCtrl'
      })
      .when('/news', {
        templateUrl: 'templates/pages/news/list.html',
        controller: 'NewsListCtrl'
      })
      .when('/news/new', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsCreateCtrl'
      })
      .when('/news/:id', {
        templateUrl: 'templates/pages/news/show.html',
        controller: 'NewsShowCtrl'
      })
      .when('/news/:id/edit', {
        templateUrl: 'templates/pages/news/edit.html',
        controller: 'NewsUpdateCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  })
  .config(function (LightboxProvider) {
    LightboxProvider.getImageUrl = function (imageUrl) {
      console.log('typeof imageUrl === String' + (typeof imageUrl === 'string'));
      if(typeof imageUrl === 'string'){
        return imageUrl;
      }
      console.log(imageUrl);
      return imageUrl.url;
    };
    LightboxProvider.templateUrl = 'templates/vendor/lightbox/pop-up-template.html';
  });
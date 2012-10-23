define([
    "jquery", 
    "backbone", 
], function($, Backbone) {

    var Router = Backbone.Router.extend({

        initialize: function(){
            Backbone.history.start();
        },

        routes: {
            "": "home"
        },

        home: function() {
            if (typeof console == "undefined") {
                console = {log: function() {}};
            }
            
            console.log("Initiating app in desktopRouter.js");
        }

    });

    return Router;

});

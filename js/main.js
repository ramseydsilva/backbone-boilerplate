require.config({
    paths: {
        "modernizr": "libs/modernizr/modernizr",
        'jquery': 'libs/jquery/jquery',
        "bootstrap": "plugins/bootstrap",
        'underscore': 'libs/underscore/lodash',
        'backbone': 'libs/backbone/backbone',
        'backbone-relational': 'libs/backbone/backbone-relational',
        'backbone.validateAll': 'plugins/Backbone.validateAll',
        'text': 'plugins/text',
    	'jqueryui': 'libs/jquery/jquery-ui-1.8.23.custom.min',
	    'jqueryui.button': 'libs/jquery/ui/ui/jquery.ui.button',
        'today': 'plugins/today'
    },
    shim: {
        // Twitter Bootstrap jQuery plugins
        "bootstrap": ["jquery"],
        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"  //attaches "Backbone" to the window object
        },
        'backbone-relational': ['backbone'],
        "underscore": ["jquery"],
        "jquerui": ["jquery"],
        "jqueryui.button": ["jquery"],
        "backbone.validateAll": ["backbone"]
    }
});


require(['modernizr', 'jquery', 'backbone', 'routers/desktopRouter', 'today', 'bootstrap', 'backbone.validateAll', 'jqueryui', 'jqueryui.button'], function(Modernizr, $, Backbone, Desktop, today) {

    this.router = new Desktop();

    //Wait for dom ready before setting up widgets.
    $(function () {

    });

if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(needle) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === needle) {
                return i;
            }
        }
        return -1;
    };
}
    
});

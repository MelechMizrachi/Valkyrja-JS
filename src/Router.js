/**
 * @class Router
 *
 * Valkyrja Library Router Class
 */
var Router = {};

(function ()
{
    /**
     * Application routes
     *
     * @type {{}}
     */
    Router.routes = {};

    /**
     * Application controllers
     *
     * @type {{}}
     */
    Router.Controllers = {};

    /**
     * Previous route controller
     *
     * @type {function}
     */
    Router.prevController = null;

    /**
     * Set a route
     *
     * @param path
     * @param templateId
     * @param controller
     * @param params
     */
    Router.route = function route(path, templateId, controller, params)
    {
        if (!params) {
            params = false;
        }

        controller = controller.split('@');

        this.routes[path] = {
            templateId     : templateId,
            controllerName : controller[0],
            actionName     : controller[1],
            params         : params
        };
    };

    /**
     * Handle routing
     */
    Router.router = function ()
    {
        var url = location.hash.slice(1) || '/';

        url = url.split('&');

        if (url[0].indexOf('=') !== -1) {
            url[1] = url[0];
            url[0] = '/';
        }

        var route        = this.routes[url[0]];
        var params       = [];
        var param        = null;
        var actionParams = [];

        if (!route) {
            return this.error(404);
        }

        var controller = this.Controllers[route.controllerName] ? new this.Controllers[route.controllerName] : false;
        var action     = controller ? controller[route.actionName] : false;

        if (!Dom.elems.main || !is.func(action)) {
            return this.error(404);
        }

        // If the route defined params to use and the url has params
        if (route.params && url.length > 1) {
            // Go through the params
            for (var i = 1; i < url.length; i++) {
                if (!is.string(url[i])) {
                    continue;
                }

                param = url[i].split('=');

                if (Array.contains(route.params, param[0])) {
                    params[param[0]] = param[1];
                }
            }

            // To ensure we only send params that the route requests and in the order requested
            // Iterate through the params and only set ones that match
            for (var j = 0; j < route.params.length; j++) {
                actionParams[j] = params[route.params[j]];
            }
        }

        if (Router.prevController && Router.prevController.remove) {
            Router.prevController.remove();
        }

        controller.template = Handlebars.compile(
            Dom('#' + route.templateId).html()
        );
        action.apply(controller, actionParams);
        controller.render();

        Router.prevController = controller;
    };

    /**
     * Error template rendering
     *
     * @param type
     */
    Router.error = function (type)
    {
        var source   = Dom('#errorTemplate').html();
        var template = Handlebars.compile(source);
        var html     = template({type : type});

        Dom.elems.main.html(html);
    };

    window.addEventListener('hashchange', Router.router);
    window.addEventListener('load', Router.router);
})();

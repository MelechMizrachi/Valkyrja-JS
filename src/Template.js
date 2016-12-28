/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Templates for view events, topics, and models
 *
 \**********************************************************************************************************************/

/**
 * @class Template
 *
 * Valkyrja Library Template Class
 *
 * @param objToMerge {object}
 *  The object to merge
 *
 * @returns {object}
 *  The extended object
 */
var Template = function (objToMerge)
{
    return new Template.Init(objToMerge);
};

(function TemplateMethods()
{
    /**
     * @constructor
     *
     * Template initializer
     *
     * @param objToMerge {object}
     *  The object to merge
     *
     * @returns {Template}
     *  The Template object
     */
    Template.Init = function (objToMerge)
    {
        return this.extend(objToMerge);
    };

    /**
     * @author MelechMizrachi
     *
     * Set the Init prototype as Template's prototype
     *
     * @type {Object|Function}
     */
    Template.Init.prototype = Template.prototype;

    /**
     * @constructor
     */
    Template.prototype.constructor = Template;
})();

(function TemplatePrototype()
{
    /**
     * @method
     *
     * Render a template for a ui component/element/node
     *
     * @param [options] {object}
     *  Any custom options for this view
     *
     * @returns void
     */
    Template.prototype.render = function (options)
    {
        // Set options
        this.__setOptions.apply(this, arguments);

        // Make sure we have a real element
        this.__ensureElement();

        // Initialize View
        this.initialize.apply(this, arguments);

        // Create Events
        this.handleEvents(this.events);
    };

    /**
     * @namespace
     *
     * The Template ID
     *
     * @type {string}
     */
    Template.prototype.sID = '';

    /**
     * @namespace
     *
     * The Template ID
     *
     * @type {Dom}
     */
    Template.prototype.elem = '';

    /**
     * @namespace
     *
     * The element tag name
     *
     * @type {string}
     */
    Template.prototype.tagName = 'div';

    /**
     * @namespace
     *
     * The element class name
     *
     * @type {string}
     */
    Template.prototype.className = '';

    /**
     * @namespace
     *
     * The template to use
     *
     * @type {string}
     */
    Template.prototype.template = '';

    /**
     * @namespace
     *
     * The element attributes
     *
     * @type {object}
     */
    Template.prototype.attributes = {};

    /**
     * @namespace
     *
     * The events for this template
     *
     * @type {object}
     */
    Template.prototype.events = {};

    /**
     * @namespace
     *
     * The accepted options for the template
     *
     * @type {array}
     */
    Template.prototype.__options = [
        'Model'
        , 'Collection'
        , 'elem'
        , 'sID'
        , 'attributes'
        , 'className'
        , 'tagName'
        , 'events'
    ];

    /**
     * @namespace
     *
     * What to split event strings with
     *
     * @type {string}
     */
    Template.prototype.EVENT_SPLIT = ' ';

    /**
     * @method
     *
     * Initialize Template
     *
     * @returns {Template}
     */
    Template.prototype.initialize = function ()
    {
        // Overwrite this function for custom initialization of View

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * Return a dom element under elem
     *
     * @param [selector] {string}
     *  The selector to use to find the elem's child
     *
     * @returns {Dom}
     *  The child of elem
     */
    Template.prototype.Dom = function (selector)
    {
        // Make sure the selector is a valid string
        if (!selector) {
            // Otherwise simply return elem
            return this.elem;
        }

        // Return the sub element
        return this.elem.find(selector);
    };

    /**
     * @method
     *
     * Set the View element
     *
     * @param element {object|string}
     *  The element to set
     * @param [delegateEvents] {boolean}
     *  Whether to delegate events
     *  (Default) true
     *
     * @returns {object}
     *  The view
     */
    Template.prototype.setElement = function (element, delegateEvents)
    {
        // If an element is already set
        if (this.elem instanceof Dom) {
            // Undelegate all event handles for the old element
            this.undelegateEvents();
            // Set the elem
            this.elem = element;
        }
        else {
            // Set the elem
            this.elem = Dom(element);
        }

        // If the optional boolean is not false
        if (delegateEvents !== false) {
            // Delegate events for this view
            this.handleEvents(this.events);
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * Remove View - Remove element from DOM
     *
     * @returns {object}
     *  The view
     */
    Template.prototype.remove = function ()
    {
        // Undelegate all event handlers
        this.undelegateEvents();

        // Remove the element from the dom
        this.elem.remove();

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * Delegate/Undelegate an event handler
     *
     * @param event {string}
     *  The event string
     * @param callbackMethod {function|string}
     *  The callback method
     * @param [scope] {object}
     *  The callback scope
     * @param [removeEvent] {boolean}
     *  Whether to delete the event or not
     *
     * @returns {object}
     *  The component
     */
    Template.prototype.handleEvent = function (event, callbackMethod, scope, removeEvent)
    {
        // Sanity checks
        if (!event || !callbackMethod) {
            Logger.error('event or callback method not specified', event, callbackMethod);
            // The parameters aren't correct
            return false;
        }

        var
            eventSplit    = event.split(this.EVENT_SPLIT)
            , eventName   = eventSplit[0]
            , selector    = eventSplit[1]
            , typeOfEvent = ( removeEvent === true )
                ? 'off'
                : 'on'
            , self        = this
            , elem        = self.elem
            ;

        // If no scope was provided
        if (!scope || !scope[callbackMethod]) {
            // Set scope to this
            scope = self;
        }

        // If the callbackMethod is a string
        if (is.string(callbackMethod)) {
            // Check that this function exists in this view
            if (!is.func(scope[callbackMethod])) {
                Logger.error('callback method is not a function', scope[callbackMethod]);
                // If not return false, get out of here
                return false;
            }

            // Set the callback method to the function
            callbackMethod = scope[callbackMethod].bind(scope);
        }

        // Create/Delete the event
        elem[typeOfEvent](
            eventName
            , selector
            , callbackMethod
        );

        // Return the view
        return self;
    };

    /**
     * @method
     *
     * Trigger an event handler
     *
     * @param event {string}
     *  The event to trigger
     *
     * @returns {object}
     *  The component
     */
    Template.prototype.triggerEvent = function (event)
    {
        // Make sure the parameter is a string
        if (!event) {
            // If it's not a string return false
            return false;
        }

        if (String.contains(event, this.EVENT_SPLIT)) {

            var
                eventSplit  = event.split(this.EVENT_SPLIT)
                , eventName = eventSplit[0]
                , selector  = eventSplit[1]
                ;

            // Trigger the event
            // [this.Dom does the check for this.elem or sub element]
            this.Dom(selector).trigger(eventName);
        }
        else {
            this.elem.trigger(event);
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * Delegate/Undelegate event handlers given an object of events
     *
     * @param events {object}
     *  The events to create
     * @param [removeEvent] {string}
     *  Whether to add/remove the event
     *
     * @returns {Template}
     *  The template
     */
    Template.prototype.handleEvents = function (events, removeEvent)
    {
        // Determine validity of events object
        if (!events) {
            Logger.error('No events provided', events);
            // Events object is invalid
            return false;
        }

        // Loop through events object
        for (var event in events) {
            // If this is a property of the object
            if (events.hasOwnProperty(event)) {
                // Create event
                this.handleEvent(
                    // The event string
                    event
                    // The callback method
                    , events[event]
                    // Whether to add/remove the event
                    , removeEvent
                );
            }
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * Undelegate all event handlers
     *
     * @returns {object}
     */
    Template.prototype.undelegateEvents = function ()
    {
        // Remove all events attached to this element
        this.elem.off('.viewEvents' + this.sID);

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * Ensure the view element exists
     *
     * @returns void
     */
    Template.prototype.__ensureElement = function ()
    {
        // Check if element is an element exists
        if (!this.elem) {
            // Set the elem to document
            this.elem = Dom(document);
        }

        // Set the element
        this.setElement(this.elem, false);
    };

    /**
     * @method
     *
     * Set component options
     *
     * @param options {object}
     *  Options passed to the Template
     *
     * @returns {Template}
     */
    Template.prototype.__setOptions = function (options)
    {
        // Determine validity of options object
        if (is.object.empty(options)) {
            // Options object is invalid
            return false;
        }

        var
            newOptions = {}
            , name
            ;

        // Iterate through objects
        for (name in options) {
            // Check if this option is one that is accepted
            if (options.hasOwnProperty(name) && this.__options.contains(name)) {
                // If it's one of the accepted set it to the new options object
                newOptions[name] = options[name];
            }
        }

        // Extend the component with the accepted options
        this.extend(
            newOptions
        );

        // Return the component
        return this;
    };
})();
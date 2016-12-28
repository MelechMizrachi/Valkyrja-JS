/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Configs
 *
 \**********************************************************************************************************************/

/**
 * @class Config
 *
 * Valkyrja Library Config Class
 */
var Config = {};

(function ()
{
    /**
     * @namespace
     *
     * Ensure we have a namespace set for Globals
     * In the case one does not exist
     */
    Config.GLOBALS = window.GLOBALS = window.GLOBALS || {};

    /**
     * @constant
     *
     * The version of Valkyrja Library
     *
     * @type {string}
     */
    Config.VERSION = '2.0.0. alpha';

    /**
     * @constant
     *
     * Whether to run debug within the library
     *
     * @type {boolean}
     */
    Config.DEBUG = Config.GLOBALS.DEBUG || Config.GLOBALS.IS_DEV || false;

    /**
     * @namespace
     *
     * The parent (window)
     *
     * @type {object}
     */
    Config.global = window;
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library is checks
 *
 \**********************************************************************************************************************/

/**
 * @class is
 *
 * Valkyrja Library is class
 */
var is = {};

(function ()
{
    /**
     * @method
     *
     * Determine if a variable is of a type
     *
     * @param toTest {*}
     *  The variable to test
     * @param type {string}
     *  The type to test
     *
     * @returns {boolean}
     */
    is.typeOf = function (toTest, type)
    {
        return typeof toTest === type;
    };

    /**
     * @method
     *
     * Is this a modern browser
     *
     * @type {boolean}
     */
    is.modernBrowser = (
        'querySelector' in document
        && 'addEventListener' in window
        && 'localStorage' in window
        && 'sessionStorage' in window
        && 'bind' in Function
        && (
            ('XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest())
            || 'XDomainRequest' in window
        )
    );

    /**
     * @method
     *
     * Determine if a variable is a boolean
     *
     * @param bool {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.bool = function (bool)
    {
        return is.typeOf(bool, 'boolean');
    };

    /**
     * @method
     *
     * @borrows Array.isArray
     */
    is.array = Array.isArray;

    /**
     * @method
     *
     * Determine if a variable is a object
     *
     * @param obj {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.object = function (obj)
    {
        return is.typeOf(obj, 'object');
    };

    /**
     * @method
     *
     * Determine if a variable is the document
     *
     * @param doc {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.document = function (doc)
    {
        return doc === document;
    };

    /**
     * @method
     *
     * Determine if a variable is a the window variable to avoid endless loops
     *
     * @param win {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.window = function (win)
    {
        return win === win.window;
    };

    /**
     * @method
     *
     * Determine if a param is an HTML Element
     *
     * @param elem {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.element = function (elem)
    {
        return ( elem instanceof HTMLElement );
    };

    /**
     * @method
     *
     * Determine if a variable is a node list
     *
     * @param nodeList {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.nodeList = function (nodeList)
    {
        return Object.prototype.toString.call(nodeList) === '[object NodeList]';
    };

    /**
     * @method
     *
     * Determine if a variable is an HTML collection
     *
     * @param htmlCollection {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.htmlCollection = function (htmlCollection)
    {
        return Object.prototype.toString.call(htmlCollection) === '[object HTMLCollection]';
    };

    /**
     * @method
     *
     * Determine if a variable is a node list or an HTML collection
     *
     * @param htmlList {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.htmlList = function (htmlList)
    {
        return ( is.nodeList(htmlList) || is.htmlCollection(htmlList) );
    };

    /**
     * @method
     *
     * Determine if a variable is a string
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.string = function (toTest)
    {
        return is.typeOf(toTest, 'string');
    };

    /**
     * @method
     *
     * Determine if a variable is a number
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.numeric = function (toTest)
    {
        return ( toTest - parseFloat(toTest) >= 0 );
    };

    /**
     * @method
     *
     * Determine if a variable is an instance of Dom
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.$ = function (toTest)
    {
        return toTest instanceof Dom;
    };

    /**
     * @method
     *
     * Determine if a variable is a boolean
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.bool = function (toTest)
    {
        return is.typeOf(toTest, 'boolean');
    };

    /**
     * @method
     *
     * Determine if a variable is a function
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.func = function (toTest)
    {
        return is.typeOf(toTest, 'function');
    };

    /**
     * @method
     *
     * Determine if a variable is null/undefined/etc
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.invalid = function (toTest)
    {
        return is.undefined(toTest)
            || toTest === null
            || !toTest
            ;
    };

    /**
     * @method
     *
     * Determine if a variable is undefined
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.undefined = function (toTest)
    {
        return is.typeOf(toTest, 'undefined');
    };

    /**
     * @method
     *
     * Determine if an array is empty
     *
     * @param arr {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.array.empty = function (arr)
    {
        return ( arr.length == 0 );
    };

    /**
     * @method
     *
     * Determine if an object is empty
     *
     * @param obj {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.object.empty = function (obj)
    {
        // Iterate through the object
        for (var index in obj) {
            // Ensure this is a property of the object
            if (Object.prototype.hasOwnProperty.call(obj, index)) {
                // If all is true return false since this is a filled object
                return false;
            }
        }

        // Always assume the object is empty
        return true;
    };

    /**
     * @method
     *
     * Determine if a string is empty
     *
     * @param toTest {*}
     *  The variable to test
     *
     * @returns {boolean}
     */
    is.string.empty = function (toTest)
    {
        return ( !toTest );
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Console Logging
 *
 \**********************************************************************************************************************/

/**
 * @class Logger
 *
 * Valkyrja Library Logger Class
 */
var Logger = {};

(function ()
{
    /**
     * @method
     *
     * Log variables to the console
     */
    Logger.log = function ()
    {
        if (Config.DEBUG) {
            console.log.apply(console, arguments);
        }
    };

    /**
     * @method
     *
     * Set some info to the console
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.info = function ()
    {
        if (Config.DEBUG) {
            console.info.apply(console, arguments);
        }
    };

    /**
     * @method
     *
     * Console a warning
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    Logger.warn = function ()
    {
        if (Config.DEBUG) {
            console.warn.apply(console, arguments);
        }
    };

    /**
     * @method
     *
     * Debug variables to the console
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.debug = function ()
    {
        if (Config.DEBUG) {
            console.debug.apply(console, arguments);
        }
    };

    /**
     * @method
     *
     * Console errors
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.error = function ()
    {
        if (Config.DEBUG) {
            console.error.apply(console, arguments);
        }
    };

    /**
     * @method
     *
     * Console time
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.time = function ()
    {
        if (Config.DEBUG) {
            console.time.apply(console, arguments);
        }
    };

    /**
     * @method
     *
     * Console timeEnd
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.timeEnd = function ()
    {
        if (Config.DEBUG) {
            console.timeEnd.apply(console, arguments);
        }
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Global Utilities
 *
 \**********************************************************************************************************************/

/**
 * @class Utils
 *
 * Valkyrja Library Utils class
 */
var Utils = {};

(function ()
{
    /**
     * @method
     *
     * Clone a given object or array
     *
     * @param toClone {object|array}
     *  The object or array to clone
     * @param [isArr] {boolean}
     *  Is this an array to clone?
     *
     * @returns {object|array}
     */
    Utils.clone = function (toClone, isArr)
    {
        isArr = isArr ? [] : {};
        // Is the object or array valid?
        if (!is.empty.object(toClone) || !is.empty.array(toClone)) {
            // It is a valid object so return the cloned object
            return Utils.extend(
                isArr
                , toClone
            );
        }

        // Always assume object is invalid so return new empty object
        return isArr;
    };

    /**
     * @method
     *
     * Iterate through an object || array
     *
     * @param items {object|array}
     *  The items to loop through
     * @param callback {function}
     *  The callback for each item
     *
     * @returns void
     */
    Utils.each = function (items, callback)
    {
        // Sanity checks
        if (( is.object(items) || !is.empty.array(items) ) && is.func(callback)) {
            var index;

            // Iterate through the items
            for (index in items) {
                // Check that items has this index as a property
                if (items.hasOwnProperty(index)) {
                    // Call the callback function
                    callback(
                        // @type string
                        // @param index
                        index
                        // @type object/array/string/etc
                        // @param items
                        , items[index]
                    );
                }
            }
        }
    };

    /**
     * @method
     *
     * Extend object
     *
     * @params  {...}
     *
     * @returns {object}
     *  The extended object
     */
    Utils.extend = function (obj, source)
    {
        if (source) {
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    obj[prop] = source[prop];
                }
            }
        }

        return obj;
    };

    /**
     * @method
     *
     * Extend Class
     *
     * @params  {...}
     *
     * @returns {object}
     *  The extended class
     */
    Utils.extendClass = function (classToExtend)
    {
        var obj = function ()
        {
            classToExtend.call(this);
        };

        obj.prototype = Object.create(classToExtend.prototype);

        obj.prototype.constructor = obj;

        return obj;
    };

    /**
     * @method
     *
     * Merge two objects
     *
     * @param mergeInto {object}
     *  The object to merge into
     * @param mergeThis {object}
     *  The object to merge into
     *
     * @returns {object}
     */
    Utils.merge = function (mergeInto, mergeThis)
    {
        // TODO: Work on this
        return mergeInto && mergeThis;
    };
})();

/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Array Extensions
 *
 \**********************************************************************************************************************/

(function ()
{
    /**
     * @method
     *
     * Clone a given array
     *
     * @param toClone {array}
     *  The array to clone
     *
     * @returns {array}
     */
    Array.clone = function (toClone)
    {
        return Utils.clone(toClone, true);
    };

    /**
     * @method
     *
     * Does an array contain a value
     *
     * @param arr {array}
     *  The array to test
     * @param value {string}
     *  The value to test for
     *
     * @returns {boolean}
     */
    Array.contains = function (arr, value)
    {
        return Array.prototype.indexOf.call(arr, value) != -1;
    };

    /**
     * @method
     *
     * Does an array contain a value
     *
     * @param arr {Array}
     *  The array to test
     * @param value {string}
     *  The value to test for
     *
     * @returns void
     */
    Array.insert = function (arr, value)
    {
        if (!Array.contains(arr, value)) {
            arr.push(value);
        }
    };

    Object.defineProperties(
        Array.prototype
        , {
            'clone'      : {
                value    : function ()
                {
                    return Array.clone(this);
                },
                writable : true
            }
            , 'contains' : {
                value    : function (value)
                {
                    return Array.contains(this, value);
                },
                writable : true
            }
            , 'insert'   : {
                value    : function (value)
                {
                    return Array.insert(this, value);
                },
                writable : true
            }
        }
    );
})();

/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Object Extensions
 *
 \**********************************************************************************************************************/

(function ()
{
    /**
     * @method
     *
     * Validate a given object
     *
     * @param toTest {object}
     *  The object to validate
     *
     * @returns {object}
     */
    Object.validate = function (toTest)
    {
        // Is the object valid?
        if (!is.empty.object(toTest)) {
            // It is a valid object so return it
            return toTest;
        }

        // Always assume object is invalid so return new empty object
        return {};
    };

    /**
     * @method
     *
     * Get the first property in a given object
     *
     * @param obj {object|array}
     *  The object
     *
     * @returns {*}
     */
    Object.first = function (obj)
    {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return obj[prop];
            }
        }
    };

    // Define prototype properties
    Object.defineProperties(
        Object
        , {
            'clone'    : {
                value    : Utils.clone,
                writable : true
            }
            , 'each'   : {
                value    : Utils.each,
                writable : true
            }
            , 'extend' : {
                value    : Utils.extend,
                writable : true
            }
        }
    );

    // Define prototype properties
    Object.defineProperties(
        Object.prototype
        , {
            'length'     : {
                value    : function ()
                {
                    var size = 0, key;
                    for (key in this) {
                        if (this.hasOwnProperty(key)) {
                            size++;
                        }
                    }

                    return size;
                },
                writable : true
            }
            ,
            'clone'      : {
                value    : function ()
                {
                    return Object.clone(this);
                },
                writable : true
            }
            , 'each'     : {
                value    : function (callback)
                {
                    return Object.each(this, callback);
                },
                writable : true
            }
            , 'extend'   : {
                value    : function (source)
                {
                    return Object.extend(this, source);
                },
                writable : true
            }
            , 'first'    : {
                value    : function ()
                {
                    return Object.first(this);
                },
                writable : true
            }
            , 'validate' : {
                value    : function ()
                {
                    return Object.validate(this);
                },
                writable : true
            }
        }
    );
})();

/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library String Extensions
 *
 \**********************************************************************************************************************/

(function ()
{
    /**
     * @method
     *
     * Convert parameter to a string
     *
     * @param value {*}
     *  The string to make safe
     *
     * @returns {string}
     */
    String.makeSafe = function (value)
    {
        return ( !value )
            ? ''
            : String(value)
            ;
    };

    /**
     * @method
     *
     * Does a string contain a value
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @returns {boolean}
     */
    String.contains = function (toTest, value)
    {
        if (!toTest || !value) {
            return false;
        }

        return String.prototype.indexOf.call(toTest, value) !== -1;
    };

    /**
     * @method
     *
     * Case insensitive of
     *
     * @link String.contains
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @returns {boolean}
     */
    String.containsInsensitive = function (toTest, value)
    {
        if (!toTest || !value) {
            return false;
        }

        return String.contains(toTest.toLowerCase(), value.toLowerCase());
    };

    /**
     * @method
     *
     * Compare to strings to see if they match
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @returns {boolean}
     */
    String.compare = function (toTest, value)
    {
        return toTest === value;
    };

    /**
     * @method
     *
     * Case insensitive of
     *
     * @link String.compare
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @returns {boolean}
     */
    String.compareInsensitive = function (toTest, value)
    {
        if (!toTest || !value) {
            return false;
        }

        return toTest.toLowerCase() === value.toLowerCase();
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Http Requests
 *
 \**********************************************************************************************************************/

/**
 * @class Http
 *
 * Valkyrja Library Http Class
 *
 * @param url {string|object}
 *  The xhr url
 * @param [options] {object}
 *  The options for the ajax request
 *
 * @returns {object}
 *  The xhr call
 */
var Http = function (url, options)
{
    return new Http.Init(url, options);
};

(function ()
{
    /**
     * @constant
     *
     * Default ajax request url
     *
     * @type {string}
     */
    Http.BASE_URL = GLOBALS.AJAX_URL || '';

    /**
     * @method
     *
     * Http/XHR request
     *
     * @param url {string|object}
     *  The xhr url
     * @param [options] {object}
     *  The options for the ajax request
     *
     * @returns {Http}
     *  The xhr call
     */
    Http.Init = function (url, options)
    {
        // If the url is not valid
        if (is.string.empty(url)) {
            //  If 'url' is an object
            if (is.object(url)) {
                // Then only the options were sent
                // To use the default ajax url
                // So set options to url
                options = url;
            }

            // If the url is set in options
            if (is.string(options.url)) {
                // Use it
                url = options.url;
            }
            // Otherwise
            else {
                // Return false because no url was provided at all
                return false;
            }
        }

        /**
         * @name    options
         */
        /**     @name   options#accept
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#async
         *      @propertyOf options
         *      @type   {boolean}
         */
        /**     @name   options#contentType
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#data
         *      @propertyOf options
         *      @type   {object}
         */
        /**     @name   options#headers
         *      @propertyOf options
         *      @type   {object}
         */
        /**     @name   options#dataString
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#method
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#success
         *      @propertyOf options
         *      @type   {function}
         */
        /**     @name   options#error
         *      @propertyOf options
         *      @type   {function}
         */
        /**     @name   options#complete
         *      @propertyOf options
         *      @type   {function}
         */
        options = options || {};

        var
            XHR           = new XMLHttpRequest()
            , method      = ( is.string(options.method) )
                ? options.method
                : 'GET'
            , accept      = ( is.string(options.accept) )
                ? options.accept
                : 'application/json, text/javascript, */*'
            , async       = ( is.bool(options.async) )
                ? options.async
                : true
            , contentType = ( is.string(options.contentType) )
                ? options.contentType
                : 'application/x-www-form-urlencoded; charset=UTF-8'
            , data        = ( is.object(options.data) )
                ? options.data
                : {}
            , headers     = ( is.object(options.headers) )
                ? options.headers
                : {}
            , dataString  = ( is.string(options.dataString) )
                ? options.dataString
                : ''
            , dataIndex   = 0
            , header
            , onreadystatechange
            , response
            ;

        // Open the XHR connection
        XHR.open(
            method
            , url
            , async
        );

        // Set the Accept header
        XHR.setRequestHeader(
            'Accept'
            , accept
        );

        // Set the content type header
        XHR.setRequestHeader(
            'Content-Type'
            , contentType
        );

        // Set the requested with header
        XHR.setRequestHeader(
            'X-Requested-With'
            , 'XMLHttpRequest'
        );

        // Iterate through all the headers provided
        for (header in headers) {
            // Ensure they are properties of headers
            if (headers.hasOwnProperty(header)) {
                // Set these headers
                XHR.setRequestHeader(
                    header
                    , headers[header]
                );
            }
        }

        // On ready state change
        onreadystatechange = function ()
        {
            // When the XHR call is done
            if (XHR.readyState === 4 || async === false) {
                // Response from XHR call
                response = XHR.responseText;

                // On Failure
                if (XHR.status != 200) {
                    // Console the error
                    Logger.error('XHR Error: Begin');
                    Logger.error('Response: ', response);
                    Logger.error('status', XHR.status);
                    Logger.error('XHR Error: End');

                    // If an error handler was set
                    if (is.func(options.error)) {
                        // Call error function
                        options.error(response);
                    }
                }
                // On success
                else {
                    // Console the response as info
                    Logger.info('Http Success');

                    // If a success handler was set
                    if (is.func(options.success)) {
                        // Call success function
                        options.success(response);
                    }
                }

                // On complete (regardless of error)
                if (is.func(options.complete)) {
                    // Call complete function
                    options.complete(response);
                }
            }
        };

        // If this is an async call
        if (async === true) {
            // Set the onreadystatechange xhr function to the above created
            XHR.onreadystatechange = onreadystatechange;
        }

        // Iterate through each data item to create a query string
        data.each(
            function (index, item)
            {
                // If this is not the first item
                if (dataIndex > 0) {
                    // Append an ampersand
                    dataString += '&';
                }

                // Append this data value and attribute
                dataString += index + '=' + item;

                // Increment the count
                dataIndex++;
            }
        );

        // Send the XHR Request
        XHR.send(dataString);

        // If this is an sync call
        if (async === false) {
            // Call the function with our success/fail logic
            onreadystatechange();
        }

        // Return the executed XHR
        return XHR;
    };

    /**
     * @author MelechMizrachi
     *
     * Set the Init prototype as Dom's prototype
     *
     * @type {Object|Function}
     */
    Http.Init.prototype = Http.prototype;

    /**
     * @constructor
     */
    Http.prototype.constructor = Http;

    /**
     * @method
     *
     * Easy method for setting options.method for ajax calls
     *
     * @param url {string|object}
     * @param options {object}
     * @param method {string}
     *
     * @returns {Http}
     */
    Http.method = function (url, options, method)
    {
        if (is.object(url)) {
            options = url;
        }

        options = options || {};

        options.extend(
            {
                method : method
            }
        );

        return new Http.Init(url, options);
    };

    /**
     * @method
     *
     * Http post method so as to not have to define options.method
     *
     * @param url {string|object}
     * @param options {object}
     *
     * @returns {Http}
     */
    Http.post = function (url, options)
    {
        return Http.method(url, options, 'POST');
    };

    /**
     * @method
     *
     * Http update method so as to not have to define options.method
     *
     * @param url {string|object}
     * @param options {object}
     *
     * @returns {Http}
     */
    Http.update = function (url, options)
    {
        return Http.method(url, options, 'UPDATE');
    };

    /**
     * @method
     *
     * Http delete method so as to not have to define options.method
     *
     * @param url {string|object}
     * @param options {object}
     *
     * @returns {Http}
     */
    Http.del = function (url, options)
    {
        return Http.method(url, options, 'DELETE');
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Authentication for signed in user
 *
 \**********************************************************************************************************************/

/**
 * @class Auth
 *
 * Valkyrja Library Auth Class
 */
var Auth = function ()
{

};

(function ()
{

})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Cache
 *
 \**********************************************************************************************************************/

/**
 * @class Cache
 *
 * Valkyrja Library Cache Class
 */
var Cache = {};

(function ()
{
    /**
     * @method
     *
     * Get a cached item
     *
     * @param key {string}
     *  The key to retrieve
     *
     * @returns {*}
     */
    Cache.get = function (key)
    {
        return JSON.parse(localStorage.getItem(key));
    };

    /**
     * @method
     *
     * Set a cached item
     *
     * @param key {string}
     *  The key to set
     * @param value {*}
     *  The value to set
     *
     * @returns {*}
     */
    Cache.set = function (key, value)
    {
        return localStorage.setItem(key, JSON.stringify(value));
    };

    /**
     * @method
     *
     * Get the amount of items cached
     *
     * @returns {number}
     */
    Cache.len = function ()
    {
        return localStorage.length;
    };

    /**
     * @method
     *
     * Delete a cached item
     *
     * @param key {string}
     *  The key to delete
     *
     * @returns {*}
     */
    Cache.del = function (key)
    {
        return localStorage.removeItem(key);
    };

    /**
     * @method
     *
     * Clear all cached items
     *
     * @returns {*}
     */
    Cache.clear = function ()
    {
        return localStorage.clear();
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Cookies Management [Set, Get, Delete]
 *
 \**********************************************************************************************************************/

/**
 * @class Cookies
 *
 * Valkyrja Library Cookies Class
 */
var Cookies = {};

(function ()
{
    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * Get a cookie
     *
     * @param key {string}
     *  The cookie key
     *
     * @returns {*}
     *  The cookie value
     */
    Cookies.get = function (key)
    {
        return decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        "(?:(?:^|.*;)\\s*"
                        + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&")
                        + "\\s*\\=\\s*([^;]*).*$)|^.*$"
                    )
                    , "$1"
                )
            )
            ||
            null
            ;
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * Set a cookie
     *
     * @param key {string}
     *  The cookie key
     * @param value {string}
     *  The cookie key
     * @param [expires] {string}
     *  The cookie key
     * @param [path] {string}
     *  The cookie key
     * @param [domain] {string}
     *  The cookie key
     * @param [isSecure] {string}
     *  The cookie key
     *
     * @returns {boolean}
     *  Whether the cookie was set or not
     */
    Cookies.set = function (key, value, expires, path, domain, isSecure)
    {
        if (
            !key
            ||
            /^(?:expires|max\-age|path|domain|secure)$/i.test(key)
        ) {
            return false;
        }

        var expiration = '';

        if (expires) {
            switch (expires.constructor) {
                // Constructor is a number
                case Number:
                    // Set the expiration
                    expiration = ( expires === Infinity )
                        ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
                        : '; max-age=' + expires
                    ;

                    // Break as we've found our case
                    break;
                // Constructor is a string
                case String:
                    expiration = '; expires=' + expires;

                    // Break as we've found our case
                    break;
                // Constructor is a date
                case Date:
                    expiration = '; expires=' + expires.toUTCString();

                    // Break as we've found our case
                    break;
            }
        }

        // Set the cookie
        document.cookie = encodeURIComponent(key)
            + "="
            + encodeURIComponent(value)
            + expiration
            + ( domain
                    ? '; domain=' + domain
                    : ''
            )
            + ( path
                    ? '; path=' + path
                    : ''
            )
            + ( isSecure
                    ? '; secure'
                    : ''
            )
        ;

        // Return true
        return true;
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * Remove a cookie
     *
     * @param key {string}
     *  The cookie key
     * @param [path] {string}
     *  The cookie path
     * @param [domain] {string}
     *  The cookie domain
     *
     * @returns {boolean}
     *  Whether the cookie was removed or not
     */
    Cookies.remove = function (key, path, domain)
    {
        // Sanity checks
        if (!key || !Cookies.has(key)) {
            // Return false since there is either no key or the cookie doesn't exist
            return false;
        }

        // Remove the requested cookie by setting the expiration to the past
        document.cookie = encodeURIComponent(key)
            + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
            + ( domain
                    ? '; domain=' + domain
                    : ''
            )
            + ( path
                    ? '; path=' + path
                    : ''
            )
        ;

        // Return true
        return true;
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * Determine if a cookie exists
     *
     * @param key {string}
     *  The cookie key
     *
     * @returns {boolean}
     *  Whether the cookie exists or not
     */
    Cookies.has = function (key)
    {
        return (
            new RegExp(
                "(?:^|;\\s*)"
                + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&")
                + "\\s*\\="
            )
        ).test(document.cookie);
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * Get a list of the cookie keys
     *
     * @returns {array}
     *  The keys
     */
    Cookies.keys = function ()
    {
        var
            // The keys
            keys    = document.cookie.replace(
                /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, ""
            ).split(/\s*(?:\=[^;]*)?;\s*/)

            // Index to use for iteration
            , index = 0
            ;

        // Iterate through all the keys
        for (; index < keys.length; index++) {
            // Decode the keys
            keys[index] = decodeURIComponent(keys[index]);
        }

        // Return the keys
        return keys;
    };

    /**
     * @method
     *
     * Get a list of the cookies
     *
     * @returns {object}
     *  The cookies
     */
    Cookies.getAll = function ()
    {
        var
            // Split the cookies string into an array
            cookies         = document.cookie.split(';')
            // The returned object
            , cookiesObject = {}
            // The for loop index
            , i             = 0
            // How many cookies are there
            , length        = cookies.length
            // Quick cookie reference inside of for loop
            , cookie
            // Quick cookie index reference inside for loop
            , cookieIndex
            // Quick cookie value reference inside for loop
            , cookieVal
            ;

        // Iterate through the cookies
        for (; i < length; i++) {
            // Set the cookie; split the cookie into [index, value]
            cookie      = cookies[i].split('=');
            // Set the index
            cookieIndex = decodeURIComponent(cookie[0].trim());
            // Set the value
            cookieVal   = decodeURIComponent(cookie[1]);

            // Set the return object
            cookiesObject[cookieIndex] = cookieVal;
        }

        // Return the cookies
        return cookiesObject;
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Dom Manipulation
 *
 \**********************************************************************************************************************/

/**
 * @class Dom
 *
 * Valkyrja Library Dom Class
 *
 * @param selector {string|HTMLDocument|HTMLElement|Node|NodeList}
 *  The event string
 * @param [context] {object}
 *  The context to use
 *
 * @returns Dom.Init
 */
var Dom = function (selector, context)
{
    return new Dom.Init(selector, context);
};

(function DomPrototype()
{
    /**
     * @constructor
     *
     * Dom.$ initializer
     *
     * @param selector {string|HTMLDocument|HTMLElement|Node|NodeList}
     *  The event string
     * @param [context] {object}
     *  The context to use
     *
     * @returns {Dom}
     *  The Dom.$ object
     */
    Dom.Init = function (selector, context)
    {
        // If the selector is not a string
        if (!is.string(selector) || !selector) {
            // Set the elem as the selector
            this.elem = selector || this.elem;

            // Return this
            return this;
        }

        // Set the selector to what was passed, for future reference
        this.selector = selector;

        // If the context was set, and it is a dom element
        if (context) {
            if (context.elem) {
                // Set elem as the context
                this.elem    = context.elem;
                // Set the context to the context elem
                this.context = context.elem;
            }
            else {
                // Set elem as the context
                this.elem    = context;
                // Set the context to what was passed, for future reference
                this.context = context;
            }
        }

        // Get the element
        this.elem = this.getElements(this.elem, selector);

        // If elem is a node list and there is only one element in node list
        if (is.nodeList(this.elem) && this.elem.length === 1) {
            // Set elem as the individual element
            this.elem = this.elem[0];
        }

        // Return the new object
        return this;
    };

    /**
     * @author MelechMizrachi
     *
     * Set the Init prototype as Dom's prototype
     *
     * @type {Object|Function}
     */
    Dom.Init.prototype = Dom.prototype;

    /**
     * @constructor
     */
    Dom.prototype.constructor = Dom;

    /**
     * @namespace
     *
     * The HTML element
     *
     * @type {HTMLDocument|HTMLElement|Node|NodeList}
     */
    Dom.prototype.elem = null;

    /**
     * @namespace
     *
     * The context used to get this element
     *
     * @type {HTMLDocument|HTMLElement|Node|NodeList}
     */
    Dom.prototype.context = document;

    /**
     * @namespace
     *
     * The selector used
     *
     * @type {string|HTMLDocument|HTMLElement|Node|NodeList}
     */
    Dom.prototype.selector = '';

    /**
     * @constant
     *
     * How to split the strings within the class
     *
     * @type {string}
     */
    Dom.prototype.SPACE_SPLIT = ' ';

    /**
     * @method
     *
     * Get an element using a parent and a string selector
     *
     * @param parent {HTMLDocument|HTMLElement|Node|NodeList}
     *  The parent element to use
     * @param selector {string}
     *  The event string
     *
     * @returns {HTMLDocument|HTMLElement|Node|NodeList|object}
     *  The element
     */
    Dom.prototype.getElements = function (parent, selector)
    {
        // If the parent is invalid
        if (!parent) {
            // Use document as the parent
            parent = document;
        }
        // Trim the selector
        selector = selector.trim();

        // Create local variables
        var
            selectorIndexOf = String.contains(selector, this.SPACE_SPLIT)
            , domGetType    = 'getElementById'
            , firstChar     = selector.charAt(0)
            , isID          = firstChar === '#'
            ;

        // If this is an #id AND there is only one selector
        if (isID) {
            // Set the selector to the current item and replace the id hash
            selector = selector.substr(1);

            // Set parent to document since it's the alone owns getElementById
            parent = document;

            // Set the method as getElementById
            //            domGetType = 'getElementById';
        }
        // If this is a .class AND there is only one selector
        else if (!selectorIndexOf && firstChar === '.') {
            // Set the selector to the current item and replace the class period
            selector = selector.substr(1);

            // Set the method as getElementsByClassName
            domGetType = 'getElementsByClassName';
        }
        // If there was only one selector given, and it wasn't an #id or .class
        // Then it must be a tag
        else if (!selectorIndexOf) {
            // Set the method as getElementsByTagName
            domGetType = 'getElementsByTagName';
        }
        // Otherwise this was a complex query; let the browser deal with it
        else {
            // Set the method as querySelectorAll
            domGetType = 'querySelectorAll';
        }

        // Get the element
        parent = parent[domGetType](
            ( isID && selectorIndexOf )
                ? selector.substr(0, selector.indexOf(this.SPACE_SPLIT))
                : selector
        );

        // If the selector started with an ID and there was more than one elem
        if (isID && selectorIndexOf) {
            // Get the element with the new elem and selector
            parent = this.getElements(parent, selector.replace(parent.id, ''));
        }

        // Return the elem
        return parent;
    };

    /**
     * @method
     *
     * Find a child element
     *
     * @param selector {string}
     *  The selector to use
     *
     * @returns {Dom}
     *  The requested child
     */
    Dom.prototype.find = function (selector)
    {
        return Dom(this.getElements(this.elem, selector));
    };

    /**
     * @method
     *
     * Get the elem parent
     *
     * @returns {Dom}
     *  The parent
     */
    Dom.prototype.parent = function ()
    {
        return Dom(this.get(0).parentNode);
    };

    /**
     * @method
     *
     * Find a child element
     *
     * @param index {number}
     *  The elem index to get
     *
     * @returns {object}
     */
    Dom.prototype.get = function (index)
    {
        // If the elem is a nodeList AND the index is numeric
        if (this.getLength() > 0 && this.elem[index]) {
            // Return the requested element
            return this.elem[index];
        }

        // Return this item
        return this.elem;
    };

    /**
     * @method
     *
     * Find the closest parent with a given selector
     *
     * @param selector {string}
     *  The selector to use
     * @param [element] {HTMLDocument|HTMLElement|Node}
     *  The element to use
     *  The type to use
     *
     * @returns {object}
     */
    Dom.prototype.closest = function (selector, element)
    {
        // If a selector was provided
        // Find the closest parent element
        if (selector) {

            var
                elem            = ( element ) ? element : this.get(0)
                , type          = 'className'
                , failsFilter   = true
                , filter
                , stringCompare = 'contains'
                ;

            // The selector is an ID
            if (String.contains(selector, '#')) {
                // Set the type as id
                type     = 'id';
                // Replace the id signifier in the selector
                selector = selector.substr(1);
            }
            // If the selector is a class
            else if (String.contains(selector, '.')) {
                // Replace the class signifier in the selector
                selector = selector.substr(1);
            }
            // Otherwise the selector is a tag
            else {
                // Set the type as tagName
                type          = 'tagName';
                stringCompare = 'compare';
            }

            // Set the filter to use
            filter = elem[type];

            // If the filter is tagName
            if (type === 'tagName') {
                // Set the filter to lowercase
                filter = filter.toLowerCase();
            }

            // If the filter failed and the elem is a dom element
            while (failsFilter === true && is.element(elem)) {

                // Set the filter to use
                filter = elem[type];
                // If the filter is tagName
                if (type === 'tagName') {
                    // Set the filter to lowercase
                    filter = filter.toLowerCase();
                }

                // Test the filter
                failsFilter = !String[stringCompare](' ' + filter + ' ', ' ' + selector + ' ');
                // If the filter fails
                if (failsFilter) {
                    // Set the elem as the parent node to continue testing up the dom
                    elem = elem.parentNode;
                }
            }

            // If the filter didn't fail
            if (!failsFilter) {
                // Return the found closest parent item
                return Dom(elem);
            }
        }

        // Return the parent
        return Dom('');
    };

    /**
     * @method
     *
     * Get elem length
     *
     * @returns {number}
     */
    Dom.prototype.getLength = function ()
    {
        // If the elem has a length
        if (this.elem && ( this.elem.length || this.elem.length === 0 )) {
            // Return the elem length
            return this.elem.length;
        }

        // Return 1 or 0
        return this.elem ? 1 : 0;
    };

    /**
     * @method
     *
     * Handle event for element
     *
     * @param type {string}
     *  The type of event to handle
     * @param eventType {string}
     *  The type of event to handle
     * @param selector {string|object}
     *  The child node to attach event to
     * @param [callback] {function}
     *  The callback method
     *
     * @returns {object}
     */
    Dom.prototype.handleEvent = function (type, eventType, selector, callback)
    {
        // Ensure we have a valid event type
        // Ensure we have a valid callback
        //      Testing for selector because if there are only three params
        //      The third (selector) would be the callback
        if (!type || !eventType || !( selector || callback )) {
            Logger.error('type, eventType, selector or callback was not provided', arguments);
            // Return this for chaining
            return this;
        }

        var
            elem            = this.elem
            , elemI
            , i             = 0
            , length        = elem.length
            , args
            , dEvent
            , finalCallback = callback
            , self          = this
            ;

        // If the selector is the callback
        if (is.func(selector)) {
            // Set the callback as the selector
            callback = selector;
            // Set the selector to null
            selector = null;

            finalCallback = callback;
        }
        // There is a selector
        else if (!is.string.empty(selector)) {

            // Create the callback function
            finalCallback = function (event)
            {
                // Set a custom target for the selector since target can be a child
                event.selectorTarget = self.closest(selector, event.target).elem;

                // Check that the target matches the selector
                if (event.selectorTarget) {
                    // Set the target to the requested clicked event when delegated
                    event.selector = event.selectorTarget;
                    // If it does apply the event
                    callback.apply(callback, arguments);
                }
            };
        }

        // If this is a trigger
        if (type === 'dispatchEvent') {
            // Create a new event with the event type specified
            dEvent = new CustomEvent(eventType);
            // Set the arguments to apply
            args   = [dEvent];
            // Otherwise we're adding/removing an event
        }
        else {
            // Set the arguments to apply
            args = [eventType, finalCallback, false]
        }

        // If the elem has the type method
        if (elem[type]) {
            // Handle the event
            elem[type].apply(elem, args);
        }
        // Otherwise it must be a nodeList or HTMLCollection
        else {
            // Iterate through the nodeList
            for (; i < length; i++) {
                // Set a quick ref var for this elem item
                elemI = elem[i];
                // Check to make sure this elem has this function
                if (elemI && elemI[type]) {
                    // Handle the event
                    elemI[type].apply(elemI, args);
                }
            }
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Add an event
     *
     * @param eventType {string}
     *  The type of event to handle
     * @param selector {string|object}
     *  The child node to attach event to
     * @param [callback] {function}
     *  The callback method
     *
     * @returns {object}
     */
    Dom.prototype.on = function (eventType, selector, callback)
    {
        return this.handleEvent(
            'addEventListener'
            , eventType
            , selector
            , callback
        );
    };

    /**
     * @method
     *
     * Remove an event
     *
     * @param [eventType] {string}
     *  The type of event to handle
     * @param [selector] {string|object}
     *  The child node to attach event to
     * @param [callback] {function}
     *  The callback method
     *
     * @returns {object}
     */
    Dom.prototype.off = function (eventType, selector, callback)
    {
        // If no params have been provided
        if (!eventType) {
            // Remove all event listeners by
            this.elem.parentNode.replaceChild(
                // Cloning the elem
                this.elem.cloneNode(true)
                // And replacing the elem in the parent
                , this.elem
            );

            // Return this for chaining
            return this;
        }

        return this.handleEvent(
            'removeEventListener'
            , eventType
            , selector
            , callback
        );
    };

    /**
     * @method
     *
     * Trigger an event
     *
     * @param eventType {string}
     *  The type of event to handle
     * @param [selector] {string|object}
     *  The child node to attach event to
     *
     * @returns {object}
     */
    Dom.prototype.trigger = function (eventType, selector)
    {
        return this.handleEvent(
            'dispatchEvent'
            , eventType
            , selector
        );
    };

    /**
     * @method
     *
     * Overwrite, or get, the element's value
     *
     * @param [value] {string}
     *  The value to overwrite with
     *
     * @returns {object|string}
     */
    Dom.prototype.val = function (value)
    {
        // If a value was given to override with
        if (value) {
            var
                i     = 0
                , len = this.getLength()
                ;

            // If this elem is a node list
            if (!this.elem.value) {
                // Iterate through the node list
                for (; i < len; i++) {
                    // Build the array
                    this.elem[i].value = value;
                }

                // Return this for chaining
                return this;
            }

            // Set the value for the single elem
            this.elem.value = value;

            // Return this for chaining
            return this;
        }

        // Return this for chaining
        return this.html(value, 'value');
    };

    /**
     * @method
     *
     * Overwrite, or get, the element's text
     *  NOTE: For use with single node elem
     *
     * @param [text] {string}
     *  The text to overwrite with
     *
     * @returns {object|string}
     */
    Dom.prototype.text = function (text)
    {
        // Return this for chaining
        return this.html(text, 'text');
    };

    /**
     * @method
     *
     * Overwrite, or get, the element's html
     *  NOTE: For use with single node elem
     *
     * @param [html] {string|Node|NodeList}
     *  The html to overwrite with
     * @param [type] {string}
     *  The type of manipulation [text|html]
     *  (Default) html
     *
     * @returns {object|html}
     */
    Dom.prototype.html = function (html, type)
    {
        // If no text was given
        if (!html) {
            var
                func       = 'innerHTML'
                , i        = 0
                , len      = this.getLength()
                , retArray = []
                ;

            // If the type is text
            if (type === 'text') {
                // Set the function to textContent
                func = 'textContent';
            }

            // If the type is value
            if (type === 'value') {
                // Set the function to value
                func = 'value';
            }

            // If the elem is a node list
            if (!this.elem[func]) {

                // Iterate through the node list
                for (; i < len; i++) {
                    // Build the array
                    retArray[i] = this.elem[i][func];
                }

                // Return the array
                return retArray;
            }

            // Return the textContent for the elem
            return this.elem[func];
        }

        // Html the html
        return this.handleHTML('html', html);
    };

    /**
     * @method
     *
     * Append html to this element
     *
     * @param html {string|Node|NodeList}
     *  The html to overwrite with
     *
     * @returns {object|html}
     */
    Dom.prototype.append = function (html)
    {
        // Prepend the html
        return this.handleHTML('append', html);
    };

    /**
     * @method
     *
     * Prepend html to this element
     *
     * @param html {string|Node|NodeList}
     *  The html to overwrite with
     *
     * @returns {object|html}
     */
    Dom.prototype.prepend = function (html)
    {
        // Prepend the html
        return this.handleHTML('prepend', html);
    };

    /**
     * @method
     *
     * Prepend html to this element
     *
     * @param type {string}
     *  The type of pend to use
     *  [append|prepend|html]
     * @param html {string|Node|NodeList}
     *  The html to overwrite with
     *
     * @returns {object|html}
     */
    Dom.prototype.handleHTML = function (type, html)
    {
        var
            elem  = this.elem
            , i   = 0
            , len = elem.length
            , tempDiv
            ;

        // If html is a string
        if (is.string(html)) {

            // Create a temporary div
            tempDiv = document.createElement('div');

            // Set it's html
            tempDiv.innerHTML = html;

            // Set the html as the firstChild of the temp div
            html = tempDiv.childNodes;
        }

        // If the elem is a node list
        if (!is.element(elem)) {
            // Iterate through the node list
            for (; i < len; i++) {
                // [app/pre]end the child
                this.handlePend(type, html, elem[i]);
            }
        }
        else {
            // [app/pre]end the child
            this.handlePend(type, html);
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Prepend html to this element
     *
     * @param type {string}
     *  The type of pend to use
     *  [append|prepend]
     * @param nodes {NodeList|Node|Array}
     *  The node to [app/pre]pend
     * @param [elem] {HTMLElement|Node|NodeList}
     *  The elem to use
     *
     * @returns {object|html}
     */
    Dom.prototype.handlePend = function (type, nodes, elem)
    {
        // If no elem is set use this.elem
        elem = elem || this.elem;

        var
            i = 0
            , len
            , node
            ;

        // If this is an html
        if (type === 'html') {
            // Empty the element
            this.empty(elem);
        }

        // If this is a single node
        if (!nodes.length) {
            // Create an array with the node
            nodes = [nodes];
        }

        // Set the length to use in the for loop
        len = nodes.length;

        // Iterate through the node list
        for (; i < len; i++) {
            // Create a quick reference for the node
            // Clone the node to avoid deleting it from the node list
            node = nodes[i].cloneNode(true);

            // Ensure we have a node and an element
            if (node && elem) {
                // If the type is prepend
                if (type === 'prepend') {
                    // Prepend the node
                    elem.insertBefore(node, elem.firstChild);
                    // Otherwise append the child node
                }
                else {
                    // Append the node
                    elem.appendChild(node);
                }
            }
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Remove elem child nodes
     *
     * @param [elem] {HTMLDocument|HTMLElement|Node}
     *  The elem to use
     *
     * @returns {object}
     */
    Dom.prototype.empty = function (elem)
    {
        // If no elem is set use this.elem
        elem = elem || this.elem;

        // Set the innerHTML to null
        // Thus removing all child nodes
        elem.innerHTML = '';

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Remove elem from the dom
     *
     * @param [elem] {HTMLDocument}
     *  The elem to use
     *
     * @returns {object}
     */
    Dom.prototype.remove = function (elem)
    {
        // If no elem is set use this.elem
        elem = elem || this.elem;

        var
            i     = 0
            , len = elem.length
            ;

        // If the elem is a node list
        if (len) {
            // Iterate through the node list
            for (; i < len; i++) {
                // Remove the elem
                this.remove(elem[i]);
            }
        }
        else {
            // Remove the element
            elem.parentNode.removeChild(elem);
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Handle class for element
     *
     * @param className {string}
     *  The class or classes to add
     * @param type {string}
     *  The type of class manipulation to do
     *
     * @returns {object}
     */
    Dom.prototype.handleClass = function (className, type)
    {
        // Sanity checks
        if (!className || !type) {
            // Return this to avoid breaking chains
            return this;
        }

        var
            classes
            , length
            , len       = this.getLength()
            , i         = 0
            , j         = 0
            , classList = this.elem.classList
            ;

        // Check if there are more than one classes to add
        if (String.contains(className, this.SPACE_SPLIT)) {

            // Split the className up by the space splitter
            classes = className.split(this.SPACE_SPLIT);
            // Set the length of the classes
            length  = classes.length;

            // If the elem is a single node
            if (is.element(this.elem)) {
                // Iterate through the classes
                for (; i < length; i++) {
                    // Do the type for the class to the elem
                    classList[type](classes[i]);
                }
            }
            // This is a node list
            else {
                // Iterate through each item
                for (; j < len; j++) {
                    // Iterate through the classes
                    for (; i < length; i++) {
                        // Do the type for the class to each individual element
                        this.elem[j].classList[type](classes[i]);
                    }
                }
            }
        }
        // There is only one class to add
        else {
            // Check
            if (is.element(this.elem)) {
                // Do the type for the class to the elem
                classList[type](className);
            }
            // This is a node list
            else {
                // Iterate through each item
                for (; i < len; i++) {
                    // Do the type for the class to each individual element
                    this.elem[i].classList[type](className);
                }
            }
        }

        // Return the new object
        return this;
    };

    /**
     * @method
     *
     * Add class to element
     *
     * @param className {string}
     *  The class or classes to add
     *
     * @returns {object}
     */
    Dom.prototype.addClass = function (className)
    {
        return this.handleClass(className, 'add');
    };

    /**
     * @method
     *
     * Remove class from element
     *
     * @param className {string}
     *  The class or classes to remove
     *
     * @returns {object}
     */
    Dom.prototype.removeClass = function (className)
    {
        return this.handleClass(className, 'remove');
    };

    /**
     * @method
     *
     * Add or remove class or classes depending on whether the
     *  elem has them or not
     *
     * @param className {string}
     *  The class or classes to check for
     *
     * @returns {object}
     */
    Dom.prototype.toggleClass = function (className)
    {
        return this.handleClass(className, 'toggle');
    };

    /**
     * @method
     *
     * Determines if elem has the class or classes specified
     *  NOTE: For use with single node elem
     *
     * @param className {string}
     *  The class or classes to check for
     *
     * @returns {boolean|object}
     */
    Dom.prototype.hasClass = function (className)
    {
        if (!className) {
            return this;
        }

        var elem = this.elem;

        if (!is.element(this.elem)) {
            elem = this.get(0);
        }

        // If there are more than one classes added
        if (String.contains(className, this.SPACE_SPLIT)) {
            // Just use the first item
            className = className.split(this.SPACE_SPLIT)[0];
        }

        // Return the new object
        return elem.classList.contains(className);
    };

    /**
     * @method
     *
     * Get an attribute value
     *
     * @param attr {string}
     *  The attribute to get
     *
     * @returns {string|boolean}
     */
    Dom.prototype.attrGet = function (attr)
    {
        // If no attribute was provided
        if (!attr) {
            // Return false
            return false;
        }

        // Return this for chaining
        return this.get(0).getAttribute(attr);
    };

    /**
     * @method
     *
     * Adds attribute to elem
     *
     * @param attr {string}
     *  The attribute to add to
     * @param value {*}
     *  The attribute to add to
     *
     * @returns {Dom}
     */
    Dom.prototype.attrSet = function (attr, value)
    {
        // If no attribute or value were provided
        if (!attr || !value) {
            // Return this for chaining
            return this;
        }

        // If the element is a dom element and not a list
        if (is.element(this.elem)) {
            // Set the element's attribute
            this.elem.setAttribute(attr, value);
        }

        var
            i     = 0
            , len = this.getLength()
            ;

        // Iterate through the node list
        for (; i < len; i++) {
            // Set the attribute to the value specified
            this.elem[i].setAttribute(attr, value);
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Removes an attribute from elem
     *
     * @param attr {string}
     *  The attribute to remove
     *
     * @returns {Dom}
     */
    Dom.prototype.attrRemove = function (attr)
    {
        // If no attribute was provided
        if (!attr) {
            // Return this for chaining
            return this;
        }

        // If the element is a dom element and not a list
        if (is.element(this.elem)) {
            // Remove the element's attribute
            this.elem.removeAttribute(attr);
        }

        var
            i     = 0
            , len = this.getLength()
            ;

        // Iterate through the node list
        for (; i < len; i++) {
            // Remove the attribute specified
            this.elem[i].removeAttribute(attr);
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Get a data attribute value
     *
     * @param data {string}
     *  The data attribute to get
     *
     * @returns {string|boolean}
     */
    Dom.prototype.dataGet = function (data)
    {
        // If no data attribute was provided
        if (!data) {
            // Return false
            return false;
        }

        return this.attrGet('data-' + data);
    };

    /**
     * @method
     *
     * Adds a data attribute to elem
     *
     * @param data
     *  The data to add to
     * @type    {string}
     * @param value {*}
     *  The attribute to add to
     *
     * @returns {object}
     */
    Dom.prototype.dataSet = function (data, value)
    {
        // If no data attribute or value were provided
        if (!data || !value) {
            // Return this for chaining
            return this;
        }

        return this.attrSet('data-' + data, value);
    };

    /**
     * @method
     *
     * Removes a data attribute from elem
     *
     * @param data {string}
     *  The data to remove
     *
     * @returns {object}
     */
    Dom.prototype.dataRemove = function (data)
    {
        // If no data attribute was provided
        if (!data) {
            // Return this for chaining
            return this;
        }

        return this.self.attrRemove('data-' + data);
    };
})();

(function DomMethods()
{
    /**
     * @method
     *
     * Get the document variable
     *
     * @returns {object}
     */
    Dom.getDocument = function ()
    {
        return document;
    };

    /**
     * @method
     *
     * Get the window variable
     *
     * @returns {object}
     */
    Dom.getWindow = function ()
    {
        return window;
    };

    /**
     * @method
     *
     * Get the window width
     *
     * @returns {number}
     */
    Dom.windowWidth = function ()
    {
        return window.innerWidth;
    };

    /**
     * @method
     *
     * Get the window height
     *
     * @returns {number}
     */
    Dom.windowHeight = function ()
    {
        return window.innerHeight;
    };

    /**
     * @method
     *
     * Get the amount scrolled
     *
     * @returns {number}
     */
    Dom.scrollTop = function ()
    {
        return window.scrollY;
    };

    /**
     * @method
     *
     * Get the document's total width
     *
     * @returns {number}
     */
    Dom.documentWidth = function ()
    {
        return document.documentElement.scrollWidth;
    };

    /**
     * @method
     *
     * Get the document's total height
     *
     * @returns {number}
     */
    Dom.documentHeight = function ()
    {
        return document.documentElement.scrollHeight;
    };

    /**
     * @method
     *
     * Get the document's total height
     *
     * @param html {string}
     *  The HTML string to parse
     *
     * @returns {HTMLDocument}
     */
    Dom.parseHTML = function (html)
    {
        var
            doc    = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null)
            , body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body')
            , div  = document.createElement('div')
            , i    = 0
            , node
            , len
            ;

        // Append the created body to the created document
        doc.documentElement.appendChild(body);
        // Set the div's innerHTML to the provided html
        div.innerHTML = html;
        // Set the length for the for loop
        len           = div.childNodes.length;

        // Iterate through all the children of the div
        for (; i < len; i++) {
            // Create a quick reference for the node
            node = div.childNodes[i].cloneNode(true);
            // Append the div's first child (the provided html) to the document body
            body.appendChild(node);
        }

        // Return the created document
        return doc;
    };
})();

(function DomElems()
{

    /**
     * @namespace
     *
     * Global elements
     *
     * @type {object}
     */
    Dom.elems = {};

    /**
     * @namespace
     *
     * Create a new instance of Dom for document
     *
     * @type {Dom}
     */
    Dom.elems.document = Dom(document);

    /**
     * @namespace
     *
     * Create a new instance of Dom for window
     *
     * @type {Dom}
     */
    Dom.elems.window = Dom(window);

    /**
     * @namespace
     *
     * Create new instance of Dom for html
     *
     * @type {Dom}
     */
    Dom.elems.html = Dom('html');

    /**
     * @namespace
     *
     * Create new instance of Dom for body
     *
     * @type {Dom}
     */
    Dom.elems.body = Dom('body');

    /**
     * @namespace
     *
     * Create new instance of Dom for #header
     *
     * @type {Dom}
     */
    Dom.elems.header = Dom('#header');

    /**
     * @namespace
     *
     * Create new instance of Dom for #main
     *
     * @type {Dom}
     */
    Dom.elems.main = Dom('#main');

    /**
     * @namespace
     *
     * Create new instance of Dom for #footer
     *
     * @type {Dom}
     */
    Dom.elems.footer = Dom('#footer');
})();
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
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library Topics
 *
 \**********************************************************************************************************************/

/**
 * @class
 *
 * Handles topic callbacks for this component
 *
 * @param topicName {string}
 *  The topic name
 *
 * @returns {object}
 *  The topic
 */
var Topics = function (topicName)
{
    var
        topic  = topicName && Topics._topics[topicName]
        , self = Topics
        ;

    // If there is no topic already created
    if (!topic) {
        // Create the topic
        topic = {
            // Trigger a topic to fire it's callbacks
            trigger          : self.triggerTopic
            // Add a callback to a topic
            , subscribe      : self.subscribeToTopic
            // Remove a callback from a topic
            , unSubscribe    : self.unSubscribeFromTopic
            // Remove all callbacks from a topic
            , unSubscribeAll : self.unSubscribeAllFromTopic
            // Storage for topic callbacks
            , _callbacks     : []
            // The default scope of things
            , scope          : self
        };

        // If the topic name is passed
        if (!is.string.empty(topicName)) {
            // Create the topic in the component's topics array
            self._topics[topicName] = topic;
        }
    }

    // Return the topic
    return topic;
};

(function ()
{
    /**
     * @namespace
     *
     * The subscribed topics
     *
     * @type {object}
     */
    Topics._topics = {};

    /**
     * @method
     *
     * Subscribe a callback method to a topic
     *
     * @param callback {string}
     *  The callback method
     * @param [scope] {object}
     *  The scope
     *
     * @returns {object}
     *  The topic
     */
    Topics.subscribeToTopic = function (callback, scope)
    {
        // Determine if scope is a valid object
        if (!scope) {
            // Set it to this topic's scope
            scope = this.scope;
        }

        // Sanity checks
        if (!is.func(scope[callback])) {
            Logger.error('Scope or Callback incorrect.');
            // Parameter is incorrect so return false
            return false;
        }

        var
            i     = 0
            , len = this._callbacks.length
            ;

        // Iterate through the callbacks for this topic
        for (; i < len; i++) {
            // If we match the callback with the topic's callback
            if (this._callbacks[i].callback === callback && this._callbacks[i].scope === scope) {
                // No need to add it so return false
                return false;
            }
        }

        // Push this new callback to the topics array
        this._callbacks.push(
            {
                callback : callback
                , scope  : scope
            }
        );

        // Return the topic
        return this;
    };

    /**
     * @method
     *
     * Subscribe a callback method to a topic
     *
     * @param callback {string}
     *  The callback method
     * @param [scope] {object}
     *  The scope
     *
     * @returns {object}
     *  The topic
     */
    Topics.unSubscribeFromTopic = function (callback, scope)
    {
        // If the callback is not a string
        if (!is.string(callback)) {
            return false;
        }

        var
            i     = 0
            , len = this._callbacks.length
            ;

        // Determine if scope is a valid object
        if (!scope) {
            // Set it to this topic's scope
            scope = this.scope;
        }

        // Iterate through the callbacks for this topic
        for (; i < len; i++) {
            // If we match the callback with the topic's callback
            if (this._callbacks[i].callback === callback && this._callbacks[i].scope === scope) {
                // Remove this topic callback
                this._callbacks.splice(i, 1);

                // We found the topic to remove so no need to continue
                break;
            }
        }

        // Return the topic
        return this;
    };

    /**
     * @method
     *
     * Trigger a topic's callback methods to fire
     *
     * @returns {object}
     *  The topic
     */
    Topics.triggerTopic = function ()
    {
        var
            i     = 0
            , len = this._callbacks.length
            , callbackItem
            ;

        // Iterate through the callbacks
        for (; i < len; i++) {
            // Quick reference
            callbackItem = this._callbacks[i];

            // Call the callback method
            callbackItem.scope[callbackItem.callback]
                .apply(callbackItem.scope, arguments)
            ;
        }

        // Return the topic
        return this;
    };

    /**
     * @method
     *
     * Unsubscribe all callback methods from a topic
     *
     * @returns {object}
     *  The topic
     */
    Topics.unSubscribeAllFromTopic = function ()
    {
        // Re-set topics to empty array
        this._callbacks = [];

        // Return the topic
        return this;
    };

    /**
     * @method
     *
     * Unsubscribe all callback methods from a topic
     *
     * @param topics {object}
     *  The topics to create
     * @param [remove] {boolean}
     *  Whether to remove the topics or not
     *
     * @returns {object}
     *  The topic
     */
    Topics.handleTopics = function (topics, remove)
    {
        // Determine if topics is a valid object
        if (is.object.empty(topics)) {
            // Topics is not valid
            return false;
        }

        var
            self          = this
            , topic
            , topicItem
            // Subscribe or unsubscribe?
            , topicMethod = ( typeof remove === true )
                ? 'unsubscribe'
                : 'subscribe'
            , sTopic
            , i           = 0
            , len
            ;

        // Iterate through topics
        for (sTopic in topics) {
            // If this is a property of the object
            if (topics.hasOwnProperty(sTopic)) {
                // Easy reference for topic
                topic = topics[sTopic];
                len   = topic.length;

                // Iterate through topic's items
                for (; i < len; i++) {
                    // Easy reference for topic item
                    topicItem = topic[i];

                    // If the scope is not an object
                    if (is.object.empty(topicItem.scope)) {
                        // Set it to this topic's scope
                        topicItem.scope = self;
                    }

                    // Subscribe/Unsubscribe from topic
                    self.Topic(sTopic)[topicMethod](topicItem.callback, topicItem.scope);
                }
            }
        }

        // Return component
        return this;
    };

    /**
     * @method
     *
     * Remove all topics
     *
     * @params
     *********
     *
     * @returns {object}
     *  The topic
     */
    Topics.removeTopics = function ()
    {
        // Re-set topic objects to empty object
        this._topics = {};
        this.topics  = {};

        // Return the topic
        return this;
    };
})();
/**********************************************************************************************************************\
 *
 *  @author                             Melech Mizrachi
 *  @desc                               Valkyrja Library User Agent Detections
 *
 \**********************************************************************************************************************/

/**
 * @class UserAgent
 *
 * Valkyrja Library User Agent Class
 */
var UserAgent = {};

(function ()
{
    /**
     * @constant
     *
     * User Agent string
     *
     * @type {string}
     */
    UserAgent.UA = navigator.userAgent;

    /**
     * @method
     *
     * Determine if the user agent has a value
     *
     * @param value {string}
     *  The value to test if userAgent contains it
     *
     * @returns {boolean}
     */
    UserAgent.contains = function (value)
    {
        return String.contains(UserAgent.UA, value);
    };

    /**
     * @constant
     *
     * Determine if the user's browser is IE
     *
     * @type {boolean}
     */
    UserAgent.IE = (
        UserAgent.contains('MSIE')
    );

    /**
     * @constant
     *
     * Determine if the user's browser is FireFox
     *
     * @type {boolean}
     */
    UserAgent.FIREFOX = (
        UserAgent.contains('Firefox')
    );

    /**
     * @constant
     *
     * Determine if the user's browser is Chrome
     *
     * @type {boolean}
     */
    UserAgent.CHROME = (
        UserAgent.contains('Chrome')
    );

    /**
     * @constant
     *
     * Determine if the user's browser is Safari
     *
     * @type {boolean}
     */
    UserAgent.SAFARI = (
        UserAgent.contains('Safari') && !UserAgent.CHROME
    );

    /**
     * @constant
     *
     * Determine if the user's device is iPhone
     *
     * @type {boolean}
     */
    UserAgent.IPHONE = (
        UserAgent.contains('iPhone')
    );

    /**
     * @constant
     *
     * Determine if the user's device is iPad
     *
     * @type {boolean}
     */
    UserAgent.IPAD = (
        UserAgent.contains('iPad')
    );

    /**
     * @constant
     *
     * Determine if the user's OS is Android
     *
     * @type {boolean}
     */
    UserAgent.ANDROID = (
        UserAgent.contains('Android')
    );

    /**
     * @constant
     *
     * Determine if the user's OS is iOS
     *
     * @type {boolean}
     */
    UserAgent.IOS = UserAgent.IPHONE || UserAgent.IPAD;

    /**
     * @constant
     *
     * Determine if the user's OS is Windows Phone
     *
     * @type {boolean}
     */
    UserAgent.WINDOWS_PHONE = (
        UserAgent.contains('Windows Phone')
    );

    /**
     * @constant
     *
     * Determine if the user's device is a mobile device
     *
     * @type {boolean}
     */
    UserAgent.MOBILE = UserAgent.IOS || UserAgent.WINDOWS_PHONE || UserAgent.ANDROID;

    /**
     * @constant
     *
     * Determine if the user's OS is Windows
     *
     * @type {boolean}
     */
    UserAgent.WINDOWS = (
        UserAgent.contains('Windows NT')
    );

    /**
     * @constant
     *
     * Determine if the user's OS is Mac
     *
     * @type {boolean}
     */
    UserAgent.MAC = (
        UserAgent.contains('Macintosh')
    );

    /**
     * @constant
     *
     * Determine if the user's OS is Linux
     *
     * @type {boolean}
     */
    UserAgent.LINUX = (
        UserAgent.contains('Linux')
    );

    /**
     * @constant
     *
     * Determine if the user's device is a desktop
     *
     * @type {boolean}
     */
    UserAgent.DESKTOP = !UserAgent.MOBILE;
})();
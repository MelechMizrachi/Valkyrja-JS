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
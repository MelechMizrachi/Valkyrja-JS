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

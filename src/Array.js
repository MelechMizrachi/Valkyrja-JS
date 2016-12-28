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

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

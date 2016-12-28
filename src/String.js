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
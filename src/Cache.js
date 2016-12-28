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
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
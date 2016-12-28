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
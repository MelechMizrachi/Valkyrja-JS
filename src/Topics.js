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
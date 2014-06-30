/**
 * Parse options from data attribute.
 *
 * https://github.com/zurb/foundation/blob/master/js/foundation/foundation.js
 * (window.Foundation.lib_methods.data_options)
 *
 * <span data-options="testing:true; test1:123; test2:hello"></span>
 *   { testing : true, test1 : 123, test2 : "hello" }
 */
;(function($) {
    'use strict';

    function isNumber(o) {
        return ! isNaN (o-0) && o !== null && o !== '' && o !== false && o !== true;
    }

    function trim(str) {
        if (typeof str === 'string') return $.trim(str);
        return str;
    }

    /**
     * Function for parsing the attribute value.
     * @param j String|Object Can be a css selector (for use with jQuery) or a jQuery object
     * @param a (optional) String The attribute to be parsed.
     */
    $.parseOptions = function(j, a) {
        if (typeof a === 'undefined') a = 'data-options';

        var el = (typeof j === 'string') ? $(j) : j,
            opts = {}, ii, p,
            opts_arr = (el.attr(a) || ':').split(';'),
            opts_len = opts_arr.length;

        // parse options
        for (ii = opts_len - 1; ii >= 0; ii--) {
            p = opts_arr[ii].split(':');

            if (/true/i.test(p[1])) p[1] = true;
            if (/false/i.test(p[1])) p[1] = false;
            if (isNumber(p[1])) p[1] = parseFloat(p[1]);

            if (p.length === 2 && p[0].length > 0) {
                opts[trim(p[0])] = trim(p[1]);
            }
        }

        return opts;
    };

})(jQuery);
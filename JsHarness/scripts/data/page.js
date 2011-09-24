﻿(function ($) {

    $.extend($.data, {

        page: {
            retrieve: function (pageShortName) {
                var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
                var responseEnvelope = jg.http.get({url: location, overrideCallback: overrideCallback});
                return responseEnvelope
            },
            exists: function (pageShortName) {
                var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
                var responseEnvelope = jg.http.get({url: location, overrideCallback: overrideCallback});
                return responseEnvelope.httpStatus != 404;
            }
        }
    });

} (jQuery));

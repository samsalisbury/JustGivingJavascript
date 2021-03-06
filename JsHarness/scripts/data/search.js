﻿(function ($) {

    $.extend($.data, {

        search: {
            charitySearch: function (searchTerms, pageNumber, pageSize, overrideCallback) {
                var location = jg.utils.buildApiLocation("charity/search/?q=" + searchTerms + "&pageNumber=" + pageNumber + "&pageSize=" + pageSize);
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));

var CM = {};

(function (parent, undefined) {

    parent.rest = (function() {

        var request = function (){ console.log('hello module') };
        var get = function(){ request() };

        return {
            get: get
        };
    })();

})(CM);

CM.rest.request();
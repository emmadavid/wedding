this["Castacencio"] = this["Castacencio"] || {};

this["Castacencio"]["gallery-item-bio-template"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<h3>' +
((__t = ( data.title )) == null ? '' : __t) +
'</h3>\n<img src="' +
((__t = ( data.clickthroughUrl )) == null ? '' : __t) +
'" width="250" height="250"/>\n' +
((__t = ( data.body )) == null ? '' : __t) +
'\n';
return __p
};

this["Castacencio"]["gallery-item-template"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<a href="#">\n\t<div class="overlay">\n\t\t<h3>\n\t\t\t' +
((__t = ( data.title )) == null ? '' : __t) +
'\n\t\t\t<p>' +
((__t = ( data.tags[0] )) == null ? '' : __t) +
'</p>\n\t\t</h3>\n\t</div>\n\t<img src="' +
((__t = ( data.assetUrl )) == null ? '' : __t) +
'?format=500w" />\n</a>\n';
return __p
};

this["Castacencio"]["instagram-image-template"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<a href="' +
((__t = ( data.link )) == null ? '' : __t) +
'" style="background-image: url(' +
((__t = ( data.imgSrc )) == null ? '' : __t) +
')" target="_blank"></a>\n';
return __p
};
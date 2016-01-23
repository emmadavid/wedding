this["Castacencio"] = this["Castacencio"] || {};

this["Castacencio"]["gallery-item-template"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<figure>\n\t<img src="' +
((__t = ( data.assetUrl )) == null ? '' : __t) +
'?format=1000w" alt="' +
((__t = ( data.title )) == null ? '' : __t) +
'"/>\n\t<figcaption>\n\t\t<h2>' +
((__t = ( data.title )) == null ? '' : __t) +
'</h2>\n\t\t<p>' +
((__t = ( data.tags[0] )) == null ? '' : __t) +
'</p>\n\t\t<a href="#">View more</a>\n\t</figcaption>\n</figure>\n';
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

this["Castacencio"]["modal-template"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class="md-content">\n    <h3>' +
((__t = ( data.title )) == null ? '' : __t) +
'</h3>\n    <div>\n        <img src="' +
((__t = ( data.clickthroughUrl )) == null ? '' : __t) +
'" width="250" height="250"/>\n        ' +
((__t = ( data.body )) == null ? '' : __t) +
'\n        <a href="#" class="md-close">Close me!</a>\n    </div>\n</div>\n';
return __p
};
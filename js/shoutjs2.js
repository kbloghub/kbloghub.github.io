//<![CDATA[
/*GLOBAL SETTINGS, USER CAN CHANGE*/
var tyOptions = {
    monthFormat: [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    noThumbnail: "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",
    postperPage: 8,
    labelResults: 8,
    followByEmailText: "Subscribe for free and get the latest news and offers.",
    shareText: "Share:",
    relatedTitleText: "You Might Also Like",
    cmmTitleText: "Post a Comment"
};

// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();


// Main Scripts - "NOTE" (Encrypt in free version)

$(document)['ready'](function() {
    selectnav('nav')
});
$(document)['ready'](function(_0x78a9x2) {
    _0x78a9x2('#menu')['each'](function() {
        var _0x78a9x3 = _0x78a9x2('#menu .LinkList .widget-content ul')['children']('li')['children']('a');
        var _0x78a9x4 = _0x78a9x3['length'];
        var _0x78a9x5, _0x78a9x6, _0x78a9x7, _0x78a9x8, _0x78a9x9;
        for (var _0x78a9xa = 0; _0x78a9xa < _0x78a9x4; _0x78a9xa++) {
            _0x78a9x5 = _0x78a9x3['eq'](_0x78a9xa);
            _0x78a9x7 = _0x78a9x5['text']();
            if (_0x78a9x7['charAt'](0) !== '_') {
                _0x78a9x6 = _0x78a9x3['eq'](_0x78a9xa + 1);
                _0x78a9x8 = _0x78a9x6['text']();
                if (_0x78a9x8['charAt'](0) === '_') {
                    _0x78a9x9 = _0x78a9x5['parent']();
                    _0x78a9x9['append']('<ul class="sub-menu"/>')
                }
            };
            if (_0x78a9x7['charAt'](0) === '_') {
                _0x78a9x5['text'](_0x78a9x7['replace']('_', ''));
                _0x78a9x5['parent']()['appendTo'](_0x78a9x9['children']('.sub-menu'))
            }
        };
        _0x78a9x2('#menu ul li ul')['parent']('li')['addClass']('has-sub');
        _0x78a9x2('#menu > .widget')['css']('display', 'block');
        _0x78a9x2('.mobile-menu')['prepend']('<div class=\'nav-toggle\'/>');
        _0x78a9x2('#nav2')['clone']()['appendTo']('.mobile-menu');
        _0x78a9x2('.mobile-menu ul li a')['on']('click', function(_0x78a9xb) {
            if (_0x78a9x2(this)['parent']()['hasClass']('has-sub')) {
                _0x78a9xb['preventDefault']();
                if (!_0x78a9x2(this)['parent']()['hasClass']('show')) {
                    _0x78a9x2(this)['parent']()['addClass']('show')['children']('.sub-menu')['slideToggle'](200)
                } else {
                    _0x78a9x2(this)['parent']()['removeClass']('show')['find']('> .sub-menu')['slideToggle'](200)
                }
            }
        });
        _0x78a9x2('.nav-toggle')['on']('click', function() {
            _0x78a9x2('body')['toggleClass']('show-menu')
        });
        _0x78a9x2('.mobile-menu ul li a')['each'](function() {
            var _0x78a9xc = _0x78a9x2(this)['attr']('href');
            var _0x78a9xd = _0x78a9xc['match'](/[^[\]]+(?=])/g);
            if (_0x78a9xc['charAt'](0) === '[') {
                var _0x78a9xe = _0x78a9xd[0]['toLowerCase']();
                var _0x78a9xf = _0x78a9xd[0]['split'](',');
                var _0x78a9x10 = _0x78a9xf[0];
                var _0x78a9x11 = '/search/label/' + _0x78a9x10 + '?&max-results=' + tyOptions['labelResults'];
                if (_0x78a9xe['match']('mega')) {
                    _0x78a9x2(this)['attr']('href', _0x78a9x11)
                }
            }
        })
    });
    _0x78a9x2('#search-icon')['on']('click', function() {
        _0x78a9x2('body')['toggleClass']('show-search')
    });
    _0x78a9x2('.ty-share-post > span')['text'](tyOptions['shareText']);
    _0x78a9x2('#related-wrap .title-wrap h2')['text'](tyOptions['relatedTitleText']);
    _0x78a9x2('.FollowByEmail .widget-content')['prepend']('<p class=\'before-text\'>' + tyOptions['followByEmailText'] + '</p>');
    _0x78a9x2('.cmm-title h2')['text'](tyOptions['cmmTitleText']);
    _0x78a9x2('.block-image .thumb img, .PopularPosts ul li img, .avatar-image-container img')['each'](function() {
        var _0x78a9x12 = _0x78a9x2(this)['attr']('src'),
            _0x78a9x12 = _0x78a9x12['replace'](/\/s[0-9]+\-c/g, '/s1600'),
            _0x78a9x12 = _0x78a9x12['replace']('/w72-h72-p-nu/', '/s1600/'),
            _0x78a9x12 = _0x78a9x12['replace']('/hqdefault.jpg', '/mqdefault.jpg'),
            _0x78a9x12 = _0x78a9x12['replace']('/default.jpg', '/mqdefault.jpg'),
            _0x78a9x12 = _0x78a9x12['replace']('/s35/', '/s45/'),
            _0x78a9x12 = _0x78a9x12['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png'),
            _0x78a9x12 = _0x78a9x12['replace']('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png', tyOptions['noThumbnail']);
        _0x78a9x2(this)['attr']('src', _0x78a9x12)
    });
    _0x78a9x2('.PopularPosts .widget-content ul li')['each'](function() {
        var _0x78a9xb = _0x78a9x2(this),
            _0x78a9x13 = _0x78a9xb['find']('.item-title a'),
            _0x78a9x14 = _0x78a9x13['attr']('href');
        _0x78a9x2['ajax']({
            url: _0x78a9x14,
            type: 'get',
            success: function(_0x78a9x15) {
                var _0x78a9x16 = _0x78a9x2(_0x78a9x15)['find']('.published')['text']();
                _0x78a9x13['parent']()['after']('<div class=\'ty-meta\'><span class=\'item-date\'>' + _0x78a9x16 + '</span></div>')
            }
        })
    });
    _0x78a9x2('.Label a')['attr']('href', function(_0x78a9xb, _0x78a9x17) {
        return _0x78a9x17['replace'](_0x78a9x17, _0x78a9x17 + '?&max-results=' + tyOptions['labelResults'])
    });
    _0x78a9x2(window)['scroll'](function() {
        if (_0x78a9x2(this)['scrollTop']() > 100) {
            _0x78a9x2('.back-top')['css']({
                bottom: '25px'
            })
        } else {
            _0x78a9x2('.back-top')['css']({
                bottom: '-100px'
            })
        }
    });
    _0x78a9x2('.back-top')['click'](function() {
        _0x78a9x2('html, body')['animate']({
            scrollTop: 0
        }, 800);
        return false
    });
    _0x78a9x2('#menu li')['each'](function() {
        var _0x78a9x18 = _0x78a9x2(this);
        var _0x78a9xc = _0x78a9x18['find']('a')['attr']('href');
        var _0x78a9xd = _0x78a9xc['match'](/[^[\]]+(?=])/g);
        if (_0x78a9xc['charAt'](0) === '[') {
            var _0x78a9xb = _0x78a9x18;
            var _0x78a9xe = _0x78a9xd[0]['toLowerCase']();
            var _0x78a9xf = _0x78a9xd[0]['split'](',');
            var _0x78a9x10 = _0x78a9xf[0];
            _0x78a9x32(_0x78a9xb, _0x78a9xe, 4, _0x78a9x10)
        }
    });
    _0x78a9x2('#feat-sec .HTML')['each'](function() {
        var _0x78a9x19 = _0x78a9x2(this);
        var _0x78a9x1a = _0x78a9x19['children']('.widget-content');
        var _0x78a9x1b = _0x78a9x1a['text']()['trim']();
        var _0x78a9xd = _0x78a9x1b['match'](/[^[\]]+(?=])/g);
        if (_0x78a9x1b['charAt'](0) === '[') {
            var _0x78a9xb = _0x78a9x1a;
            var _0x78a9xe = _0x78a9xd[0]['toLowerCase']();
            var _0x78a9xf = _0x78a9xd[0]['split'](',');
            var _0x78a9x10 = _0x78a9xf[0];
            _0x78a9x32(_0x78a9xb, _0x78a9xe, 3, _0x78a9x10)
        }
    });
    _0x78a9x2('.ready-widget .HTML')['each'](function() {
        var _0x78a9x19 = _0x78a9x2(this);
        var _0x78a9x1a = _0x78a9x19['children']('.widget-content');
        var _0x78a9x1b = _0x78a9x1a['text']()['trim']();
        var _0x78a9xd = _0x78a9x1b['match'](/[^[\]]+(?=])/g);
        if (_0x78a9x1b['charAt'](0) === '[') {
            var _0x78a9xb = _0x78a9x1a;
            var _0x78a9xe = _0x78a9xd[0]['toLowerCase']();
            var _0x78a9xf = _0x78a9xd[0]['split'](',');
            var _0x78a9x1c = _0x78a9xf[0];
            var _0x78a9x10 = _0x78a9xf[1];
            _0x78a9x32(_0x78a9xb, _0x78a9xe, _0x78a9x1c, _0x78a9x10)
        }
    });
    _0x78a9x2('.related-ready')['each'](function() {
        var _0x78a9xb = _0x78a9x2(this),
            _0x78a9x10 = _0x78a9xb['find']('.related-tag')['attr']('data-label');
        _0x78a9x32(_0x78a9xb, 'related-posts', 3, _0x78a9x10)
    });

    function _0x78a9x1d(_0x78a9x1e, _0x78a9x1f, _0x78a9x20) {
        for (var _0x78a9x21 = 0; _0x78a9x21 < _0x78a9x1e[_0x78a9x1f]['link']['length']; _0x78a9x21++) {
            if (_0x78a9x1e[_0x78a9x1f]['link'][_0x78a9x21]['rel'] == 'alternate') {
                _0x78a9x20 = _0x78a9x1e[_0x78a9x1f]['link'][_0x78a9x21]['href'];
                break
            }
        };
        return _0x78a9x20
    }

    function _0x78a9x22(_0x78a9x23, _0x78a9x1f, _0x78a9x20) {
        var _0x78a9x24 = _0x78a9x23[_0x78a9x1f]['title']['$t'],
            _0x78a9x25 = '<a href="' + _0x78a9x20 + '">' + _0x78a9x24 + '</a>';
        return _0x78a9x25
    }

    function _0x78a9x26(_0x78a9x27, _0x78a9x1f) {
        var _0x78a9x24 = _0x78a9x27[_0x78a9x1f]['author'][0]['name']['$t'],
            _0x78a9x25 = '<span class="item-author">' + _0x78a9x24 + '</span>';
        return _0x78a9x25
    }

    function _0x78a9x28(_0x78a9x23, _0x78a9x1f) {
        var _0x78a9x29 = _0x78a9x23[_0x78a9x1f]['published']['$t'];
        var _0x78a9x2a = _0x78a9x29['substring'](0, 4),
            _0x78a9x8 = _0x78a9x29['substring'](5, 7),
            _0x78a9x2b = _0x78a9x29['substring'](8, 10),
            _0x78a9x2c = tyOptions['monthFormat'][parseInt(_0x78a9x8, 10)] + ' ' + _0x78a9x2b + ', ' + _0x78a9x2a,
            _0x78a9x25 = '<span class="item-date">' + _0x78a9x2c + '</span>';
        return _0x78a9x25
    }

    function _0x78a9x2d(_0x78a9x23, _0x78a9x1f) {
        var _0x78a9x24 = _0x78a9x23[_0x78a9x1f]['title']['$t'],
            _0x78a9x6 = _0x78a9x23[_0x78a9x1f]['content']['$t'],
            _0x78a9x2e = _0x78a9x2('<div>')['html'](_0x78a9x6);
        if ('media$thumbnail' in _0x78a9x23[_0x78a9x1f]) {
            var _0x78a9x2f = _0x78a9x23[_0x78a9x1f]['media$thumbnail']['url']['replace'](/\/s[0-9]+\-c/g, '/s1600');
            if (_0x78a9x6['indexOf']('youtube.com/embed') > -1) {
                _0x78a9x2f = _0x78a9x23[_0x78a9x1f]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg')
            }
        } else {
            if (_0x78a9x6['indexOf']('<img') > -1) {
                _0x78a9x2f = _0x78a9x2e['find']('img:first')['attr']('src')
            } else {
                _0x78a9x2f = tyOptions['noThumbnail']
            }
        };
        var _0x78a9x25 = '<img class="ty-thumb" alt="' + _0x78a9x24 + '" src="' + _0x78a9x2f + '"/>';
        return _0x78a9x25
    }

    function _0x78a9x30(_0x78a9x27, _0x78a9x1f) {
        var _0x78a9x6 = _0x78a9x27[_0x78a9x1f]['content']['$t'],
            _0x78a9x2e = _0x78a9x2('<div>')['html'](_0x78a9x6),
            _0x78a9x31 = _0x78a9x2e['text']();
        return _0x78a9x31
    }

    function _0x78a9x32(_0x78a9xb, _0x78a9xe, _0x78a9x1c, _0x78a9x10) {
        var _0x78a9x33 = '';
        if (_0x78a9xe['match']('mega') || _0x78a9xe['match']('featured') || _0x78a9xe['match']('recent-posts') || _0x78a9xe['match']('post-tag') || _0x78a9xe['match']('related-posts')) {
            if (_0x78a9xe['match']('recent-posts')) {
                _0x78a9x33 = '/feeds/posts/default?alt=json&max-results=' + _0x78a9x1c
            } else {
                _0x78a9x33 = '/feeds/posts/default/-/' + _0x78a9x10 + '?alt=json&max-results=' + _0x78a9x1c
            };
            _0x78a9x2['ajax']({
                url: _0x78a9x33,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0x78a9x34) {
                    if (_0x78a9xe['match']('mega')) {
                        var _0x78a9x35 = '<ul class="mega-widget">'
                    };
                    if (_0x78a9xe['match']('featured')) {
                        var _0x78a9x35 = '<ul class="featured-posts">'
                    };
                    if (_0x78a9xe['match']('recent-posts') || _0x78a9xe['match']('post-tag')) {
                        var _0x78a9x35 = '<ul class="custom-widget">'
                    };
                    if (_0x78a9xe['match']('related-posts')) {
                        var _0x78a9x35 = '<ul class="related-posts">'
                    };
                    console['log'](_0x78a9x1e);
                    var _0x78a9x1e = _0x78a9x34['feed']['entry'];
                    console['log'](_0x78a9x34);
                    if (_0x78a9x1e == undefined) {
                        _0x78a9x1e = {
                            length: 0
                        };
                        console['log']('No entries found for this URL :: ', _0x78a9x33)
                    };
                    for (var _0x78a9x20 = '', _0x78a9x1f = 0; _0x78a9x1f < _0x78a9x1e['length']; _0x78a9x1f++) {
                        var _0x78a9x20 = _0x78a9x1d(_0x78a9x1e, _0x78a9x1f, _0x78a9x20),
                            _0x78a9x36 = _0x78a9x22(_0x78a9x1e, _0x78a9x1f, _0x78a9x20),
                            _0x78a9x37 = _0x78a9x2d(_0x78a9x1e, _0x78a9x1f),
                            _0x78a9x38 = _0x78a9x26(_0x78a9x1e, _0x78a9x1f),
                            _0x78a9x39 = _0x78a9x28(_0x78a9x1e, _0x78a9x1f),
                            _0x78a9x31 = _0x78a9x30(_0x78a9x1e, _0x78a9x1f);
                        var _0x78a9x9 = '';
                        if (_0x78a9xe['match']('mega')) {
                            _0x78a9x9 += '<div class="mega-item"><div class="mega-content"><a class="mega-img" href="' + _0x78a9x20 + '">' + _0x78a9x37 + '</a><h3 class="ty-title">' + _0x78a9x36 + '</h3><div class="ty-meta">' + _0x78a9x39 + '</div></div></div>'
                        } else {
                            if (_0x78a9xe['match']('featured')) {
                                if (_0x78a9xb['parent']()['addClass']('ty-show')) {};
                                if (_0x78a9x1f == 0) {
                                    _0x78a9x9 += '<li class="first-item"><div class="ty-inner"><a class="ty-image" href="' + _0x78a9x20 + '">' + _0x78a9x37 + '</a><div class="ty-entry"><h3 class="ty-title">' + _0x78a9x36 + '</h3><div class="ty-meta">' + _0x78a9x38 + '' + _0x78a9x39 + '</div><p class="ty-snip">' + _0x78a9x31['substr'](0, 96) + '...</p></div></div></li>'
                                } else {
                                    if (_0x78a9x1f == 1) {
                                        _0x78a9x9 += '<li class="second-item"><div class="ty-inner"><a class="ty-image" href="' + _0x78a9x20 + '">' + _0x78a9x37 + '</a><div class="ty-entry"><h3 class="ty-title">' + _0x78a9x36 + '</h3><div class="ty-meta">' + _0x78a9x39 + '</div></div></div></li>'
                                    } else {
                                        _0x78a9x9 += '<li class="last-item"><div class="ty-inner"><a class="ty-image" href="' + _0x78a9x20 + '">' + _0x78a9x37 + '</a><div class="ty-entry"><h3 class="ty-title">' + _0x78a9x36 + '</h3><div class="ty-meta">' + _0x78a9x39 + '</div></div></div></li>'
                                    }
                                }
                            } else {
                                if (_0x78a9xe['match']('recent-posts') || _0x78a9xe['match']('post-tag')) {
                                    _0x78a9x9 += '<li><a class="custom-thumb" href="' + _0x78a9x20 + '">' + _0x78a9x37 + '</a><div class="ty-entry"><h3 class="ty-title">' + _0x78a9x36 + '</h3><div class="ty-meta">' + _0x78a9x39 + '</div></div></li>'
                                } else {
                                    _0x78a9xe['match']('related-posts') && (_0x78a9x9 += '<li class="related-item"><div class="ty-image"><a class="related-thumb" href="' + _0x78a9x20 + '">' + _0x78a9x37 + '</a></div><div class="ty-entry"><h3 class="ty-title">' + _0x78a9x36 + '</h3><div class="ty-meta">' + _0x78a9x39 + '</div></div></li>')
                                }
                            }
                        };
                        _0x78a9x35 += _0x78a9x9
                    };
                    _0x78a9x35 += '</ul>';
                    if (_0x78a9xe['match']('mega')) {
                        _0x78a9xb['addClass']('has-sub mega-menu')['append'](_0x78a9x35);
                        _0x78a9xb['find']('a:first')['attr']('href', function(_0x78a9xb, _0x78a9x17) {
                            return _0x78a9x17['replace'](_0x78a9x17, '/search/label/' + _0x78a9x10 + '?&max-results=' + tyOptions['labelResults'])
                        })
                    } else {
                        _0x78a9xb['html'](_0x78a9x35)
                    }
                }
            })
        }
    }
})//]]>

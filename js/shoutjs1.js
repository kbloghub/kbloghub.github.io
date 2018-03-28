//<![CDATA[

var numposts = 3;
    var showpostthumbnails = true;
    var displaymore = false;
    var displayseparator = true;
    var showcommentnum = false;
    var showpostdate = true;
    var showpostsummary = true;
    var numchars = 100;

function labelthumbs(_0xa288x3) {
    document['write']('<ul id="label_with_thumbs">');
    for (var _0xa288x4 = 0; _0xa288x4 < numposts; _0xa288x4++) {
        var _0xa288x5 = _0xa288x3['feed']['entry'][_0xa288x4];
        var _0xa288x6 = _0xa288x5['title']['$t'];
        var _0xa288x7;
        if (_0xa288x4 == _0xa288x3['feed']['entry']['length']) {
            break
        };
        for (var _0xa288x8 = 0; _0xa288x8 < _0xa288x5['link']['length']; _0xa288x8++) {
            if (_0xa288x5['link'][_0xa288x8]['rel'] == 'replies' && _0xa288x5['link'][_0xa288x8]['type'] == 'text/html') {
                var _0xa288x9 = _0xa288x5['link'][_0xa288x8]['title'];
                var _0xa288xa = _0xa288x5['link'][_0xa288x8]['href']
            };
            if (_0xa288x5['link'][_0xa288x8]['rel'] == 'alternate') {
                _0xa288x7 = _0xa288x5['link'][_0xa288x8]['href'];
                break
            }
        };
        var _0xa288xb;
        try {
            _0xa288xb = _0xa288x5['media$thumbnail']['url']
        } catch (error) {
            s = _0xa288x5['content']['$t'];
            a = s['indexOf']('<img');
            b = s['indexOf']('src="', a);
            c = s['indexOf']('"', b + 5);
            d = s['substr'](b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != '')) {
                _0xa288xb = d
            } else {
                _0xa288xb = 'http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png'
            }
        };
        var _0xa288xc = _0xa288x5['category'][0]['term'];
        var _0xa288xd = _0xa288x5['published']['$t'];
        var _0xa288xe = _0xa288xd['substring'](0, 4);
        var _0xa288xf = _0xa288xd['substring'](5, 7);
        var _0xa288x10 = _0xa288xd['substring'](8, 10);
        var _0xa288x11 = new Array();
        _0xa288x11[1] = 'January';
        _0xa288x11[2] = 'February';
        _0xa288x11[3] = 'March';
        _0xa288x11[4] = 'April';
        _0xa288x11[5] = 'May';
        _0xa288x11[6] = 'June';
        _0xa288x11[7] = 'July';
        _0xa288x11[8] = 'August';
        _0xa288x11[9] = 'September';
        _0xa288x11[10] = 'October';
        _0xa288x11[11] = 'November';
        _0xa288x11[12] = 'December';
        document['write']('<li class="clearfix">');
        if (showpostthumbnails == true) {
            document['write']('<div class="widget-thumb"><a class="label_thumb" href="' + _0xa288x7 + '" target ="_top" style="background:url(' + _0xa288xb['replace']('/s72-c/', '/s1600/') + ') no-repeat center center;background-size: cover"></a></div>')
        };
        document['write']('<div class="widget-con"><h3 class="recent-title"><a href="' + _0xa288x7 + '" target ="_top">' + _0xa288x6 + '</a></h3><div class="widget-sum">');
        if ('content' in _0xa288x5) {
            var _0xa288x12 = _0xa288x5['content']['$t']
        } else {
            if ('summary' in _0xa288x5) {
                var _0xa288x12 = _0xa288x5['summary']['$t']
            } else {
                var _0xa288x12 = ''
            }
        };
        var _0xa288x13 = /<\S[^>]*>/g;
        _0xa288x12 = _0xa288x12['replace'](_0xa288x13, '');
        if (showpostsummary == true) {
            if (_0xa288x12['length'] < numchars) {
                document['write']('');
                document['write'](_0xa288x12);
                document['write']('')
            } else {
                document['write']('');
                _0xa288x12 = _0xa288x12['substring'](0, numchars);
                var _0xa288x14 = _0xa288x12['lastIndexOf'](' ');
                _0xa288x12 = _0xa288x12['substring'](0, _0xa288x14);
                document['write'](_0xa288x12 + '...');
                document['write']('')
            }
        };
        var _0xa288x15 = '';
        var _0xa288x16 = 0;
        document['write']('</div><div class="widget-meta"><span class="widget-date">');
        if (showpostdate == true) {
            _0xa288x15 = _0xa288x15 + ' <i class="fa fa-clock-o"></i> ' + _0xa288x11[parseInt(_0xa288xf, 10)] + ' ' + _0xa288x10 + ' , ' + _0xa288xe;
            _0xa288x16 = 1
        };
        if (showcommentnum == true) {
            if (_0xa288x16 == 1) {
                _0xa288x15 = _0xa288x15 + ' </span><span class="widget-cmm"> '
            };
            if (_0xa288x9 == '1 Comments') {
                _0xa288x9 = '<i class="fa fa-comments"> 1</i>'
            };
            if (_0xa288x9 == '0 Comments') {
                _0xa288x9 = '<i class="fa fa-comments"></i> 0'
            };
            _0xa288x9 = '<a href="' + _0xa288xa + '" target ="_top">' + _0xa288x9 + '</a>';
            _0xa288x15 = _0xa288x15 + _0xa288x9 + ' </span></div> ';
            _0xa288x16 = 1
        };
        if (displaymore == true) {
            if (_0xa288x16 == 1) {
                _0xa288x15 = _0xa288x15 + ' | '
            };
            _0xa288x15 = _0xa288x15 + '<a href="' + _0xa288x7 + '" class="url" target ="_top">More ?/a>';
            _0xa288x16 = 1
        };
        document['write'](_0xa288x15);
        document['write']('</div></li>');
        if (displayseparator == true) {
            if (_0xa288x4 != (numposts - 1)) {
                document['write']('')
            }
        }
    };
    document['write']('</ul>')
}
$(document)['ready'](function() {
    $('.sidebar h2')['wrap']('<div class="widget-title"></div>')
})//]]>

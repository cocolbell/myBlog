function icon (window) {
    var svgSprite = '<svg><symbol id="icon-paper-airplane" viewBox="0 0 1024 1024"><path d="M974.592 42.944C965.76 35.776 954.944 32 944 32c-7.296 0-14.656 1.664-21.44 5.056l-864 432C43.392 476.672 33.344 491.712 32.128 508.608c-1.216 16.896 6.656 33.216 20.544 42.88l219.456 151.872c0 0.256-0.128 0.448-0.128 0.64l0 240c0 20.8 13.44 39.232 33.28 45.696C310.144 991.232 315.136 992 320 992c15.104 0 29.76-7.104 38.912-19.904l100.416-139.136 217.344 150.528C684.8 989.12 694.4 992 704 992c5.504 0 11.072-0.96 16.384-2.88 14.592-5.248 25.728-17.344 29.888-32.256l240-864C995.392 74.56 989.184 54.976 974.592 42.944zM295.168 660.992 80 512l728.256-364.096L295.168 660.992zM320 944 320 704l624-624L320 944zM704 944l-216.512-149.888 419.52-580.864L704 944z"  ></path></symbol><symbol id="icon-dianzan" viewBox="0 0 1024 1024"><path d="M483.1 735.6c-3.5 0-7.1-1.1-10.1-3.4-11.7-8.7-44-34.1-82.8-68.5-15.9-14.1-155.4-140.5-155.4-252.3 0-80.1 36.1-114.3 57.6-127.6 28.3-17.4 63.1-18.9 92.9-3.8 8.4 4.2 11.8 14.4 7.5 22.8-4.2 8.4-14.4 11.8-22.8 7.5-19.3-9.7-41.6-8.8-59.8 2.4-26.7 16.4-41.4 51.5-41.4 98.6 0 34.7 18.5 78.6 53.5 127.1 36.7 50.8 78.4 89.1 90.4 99.7 39.4 34.9 71.5 59.9 80.6 66.6 7.5 5.6 9.1 16.2 3.5 23.8-3.4 4.7-8.5 7.1-13.7 7.1z"></path><path d="M682.7 199.6c47 0 91.7 20.8 125.7 58.6 17.1 18.9 30.5 41 40 65.7 9.9 25.8 14.9 53.2 14.9 81.4 0 69.6-31.4 119.5-59.1 163.5l-0.2 0.3c-30.9 49.1-85.4 108.8-157.6 172.6-58.8 52-111.3 91-128.5 103.8-2.3 1.7-3.8 2.8-4.8 3.6-1.1-0.9-2.6-2-5-3.7-17.2-12.8-69.7-51.7-128.4-103.6-72-63.7-126.3-123.3-156.9-172.5l-0.1-0.1-0.1-0.1-0.2-0.3c-27.7-44-59.1-93.9-59.1-163.5 0-28.4 5-55.8 14.9-81.6 9.4-24.6 22.9-46.7 40-65.6 34.1-37.7 78.9-58.4 126.2-58.4 24 0 45.5 5.4 65.9 16.4 19.9 10.8 38.9 27.5 56.3 49.4 1.7 2.1 3.4 4.4 5.1 6.6 9.8 13.1 25.5 21 41.9 21 16.5 0 32.2-7.9 42-21.2 1.5-2.1 3.1-4.1 4.6-6.1 34.9-44.5 75-66.2 122.5-66.2m0-50c-66.5 0-120.1 32-161.9 85.3-1.9 2.4-3.7 4.8-5.5 7.2-0.4 0.6-1.1 0.9-1.8 0.9s-1.3-0.3-1.8-0.9c-2-2.7-4-5.3-6-7.8-42.1-52.9-95-84.7-161.3-84.7-127.4 0-231.1 114.5-231.1 255.7 0 84.2 37.3 143.2 67 190.5 86.1 138.1 294 286.5 303.1 293.6 9.1 7.2 19.1 10.3 29.7 10.3 10.6 0 20.6-3.6 29.7-10.3 9.1-7.2 217-156.1 303.6-293.6 29.7-47.2 67-106.3 67-190.5-0.1-140.7-103.8-255.7-230.7-255.7z"></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function () {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
}
icon(window)

export default icon
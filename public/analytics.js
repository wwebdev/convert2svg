if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    var _paq = window._paq || [];
    _paq.push(["setDoNotTrack", true]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
        var u="https://analytics.vincentwill.com/";
        _paq.push(['setTrackerUrl', u+'hokuspokusp']);
        _paq.push(['setSiteId', '5']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'hokuspokusj'; s.parentNode.insertBefore(g,s);
    })();
}

$(document).ready(function() {
    $(function(){
        $(".typed").typed({
            strings: ["enjoy your movie.", "", "chill yourself.", "", "see another world."],
            stringsElement: null,
            typeSpeed: 80,
            startDelay: 1000,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
            loopCount: 5,
            showCursor: false,
            cursorChar: "|",
            attr: null,
            contentType: 'html',
            callback: function() {},
            preStringTyped: function() {},
            onStringTyped: function() {},
            resetCallback: function() {}
        });
    });
});


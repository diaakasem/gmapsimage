var casper = require('casper').create({
    viewportSize: {
        width: 1280,
        height: 800
    }
});

var url = 'https://www.google.com.eg/maps/@30.0237469,31.5255044,879m/data=!3m1!1e3?hl=en&force=lite';
casper.start(url, function() {
    this.wait(5000, function() {
    var d = new Date();
    casper.capture('/media/HDD/apt/home-' + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()  + '.png', {
        top: 0,
        left: 0,
        width: 1280,
        height: 800
    });
    });
});

casper.run();

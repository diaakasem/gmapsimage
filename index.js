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
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        if (month < 10) {
           month = '0' + month;
        }
        var day = d.getDate();
        if (day < 10) {
           day = '0' + day;
        }
        casper.capture('/media/HDD/Pictures/home-' + year + "-" + month + "-" + day + '.jpg', {
            top: 0,
            left: 0,
            width: 1280,
            height: 800
        });
    });
});

casper.run();

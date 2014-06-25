RCODE ROUTES FOR EXPRESS
---

This little and unfinished experiment offers a set of routes to QR Codes generation through REST endpoints.

Really really simple Backbone Model, Collection and View are also provided.

To use it with [Express] > 4.0 just:

```
var qr = require("qr-routes");
app.use("/qr", qr);
```

You can fetch a QR Code simply:

```
var qrmodel = new QRModel({
  id: "text to qrencode"
});

var qrview = new QRView({
  model: qrmodel
});

qrmodel.fetch();
```

Append then the View explicitly in your code, in example:

```
$("body").append(qrview.render().$el)
```

NOTES
---

* The project uses `qrcode-npm` module that you should clone from its repo in order to work with the last and patched version, instead of npmin' it.

  `npm install && cd node_modules && git clone https://github.com/cmanzana/qrcode-npm.git`

  I like this little module because it doesn't depend on '[node-canvas]' module (as '[node-qrcode]' does) which could take a little more effort to compile.

* This module is just a proof of concept for a project at Redradix, sure there're simpler ways to handle QR Codes in your client code.

* The word "QR Code" is registered trademark of:

  DENSO WAVE INCORPORATED

[Express]:http://expressjs.com
[Redradix]:http://www.redradix.com
[node-canvas]:https://github.com/LearnBoost/node-canvas
[node-qrcode]:https://github.com/soldair/node-qrcode
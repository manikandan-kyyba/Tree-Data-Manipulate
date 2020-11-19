var dataa = [
  {
    "type": "menu",
    "name": "view",
    "level": "1"
  },
  {
    "type": "item",
    "name": "12 Mo Perm Hearing",
    "level": "2"
  },
  {
    "type": "item",
    "name": "120 Day Incm Trust Expire",
    "level": "2"
  },
  {
    "type": "menu",
    "name": "test",
    "level": "2"
  },
  {
    "type": "item",
    "name": "6 Month Periodic Reviews",
    "level": "3"
  },
  {
    "type": "item",
    "name": "AAAA",
    "level": "3"
  },
  {
    "type": "menu",
    "name": "sample",
    "level": "3"
  },
  {
    "type": "item",
    "name": "ADU Appeals Completed",
    "level": "4"
  },
  {
    "type": "item",
    "name": "ADU Appeals Pending",
    "level": "4"
  },
  {
    "type": "menu",
    "name": "check",
    "level": "4"
  },
  {
    "type": "item",
    "name": "APs Not Meeting WP Requirements",
    "level": "5"
  }
];

var aparent = {};
var out = [];
var lastItem;
var lastParent;
var lastLevel;

dataa.forEach(myFunction);

function myFunction1(item, index) {
  console.log(item);
}

function myFunction(item, index) {
  if (item.level == "1") {
    aparent = {};
    aparent[0] = {};
    item.child = false;
    item.data = [];
    lastParent = item;
    out.push(item)
    lastLevel = 1;
    aparent[1] = item;

  }
  else {
    item.child = true;
    item.data = [];
    var currentLevel = parseInt(item.level);

    var p = aparent[currentLevel];

    if (currentLevel == lastLevel) {
      if (!p) {
        p.data.push(item);
      }
    }

    if (currentLevel > lastLevel) {
      if (!p) {
        aparent[currentLevel] = item;
      }

      var p2 = aparent[currentLevel - 1];
      if (p2) {
        p2.data.push(item);
      }
    }

    if (currentLevel < lastLevel) {
      if (!p) {
        p.data.push(item);
      }
    }

    lastItem = item;
    lastLevel = currentLevel;
  }
}

console.log(out);
document.write("<pre>" + JSON.stringify(out, null, 2) + "</pre>");

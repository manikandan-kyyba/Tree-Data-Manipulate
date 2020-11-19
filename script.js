var data = [
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
    "name": "12 Mo Perm Hearing",
    "level": "1"
  }
];

var out = [];
var lastItem;

data.forEach(myFunction);

function myFunction(item, index) {
  if(item.level == "1") {
    item.child = false;
    item.data = [];
    lastItem = item;
    out.push(item);
  }
  else {
  if(lastItem) {
      item.child = true;
      item.data = [];
      lastItem.data.push(item);
    }
  }
}

console.log(out);
document.write("<pre>" + JSON.stringify(out, null, 2) + "</pre>");


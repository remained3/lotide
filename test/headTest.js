const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head(["Only"]), "Only");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
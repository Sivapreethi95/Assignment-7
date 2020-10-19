/*eslint-env browser*/
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all the products");
    window.console.log("update - update an existing product’s inventory");
    window.console.log("exit - exit the program");
    window.console.log("");
}
function view(product_list) {
    "use strict";
    var i = 1;
    product_list.forEach(function (product) {
        window.console.log(String(i) + ". " + product);
        i += 1;
    });
    window.console.log("");
}
function update(product_list) {
    "use strict";
    var sku = parseInt(window.prompt("Enter the SKU Number"));
    var newquantity = window.prompt("Enter the new quantity");
    var i;
    for(i=0; i<product_list.length; i++) {
        if (product_list[i][0] === sku ) {
            product_list[i][2] = newquantity;
        }
    }
    // window.console.log(product_list + " was updated.");
    window.console.log("Product Quantity was Updated!\n\n");
}
function main() {
    "use strict";
    var product_list, command;

    displayMenu();
    product_list = [
        [1234, "Shirt", 10, 15.99],
        [2331, "Jeans", 15, 16.99],
        [6789, "Socks", 12, 13.99],
        [3456, "Saree", 10, 30.99],
        [1245, "Kurta", 8, 35.99]
    ];

while (true) {
    command = window.prompt("Enter command");
    if (command !== null) {
        if (command === "view") {
            view(product_list);
        } else if (command === "update") {
            update(product_list);
        } else if (command === "exit") {
            break;
        } else {
            window.alert("That is not a valid command.");
        }
    } else {
        break;
    }
}
window.console.log("Program terminated.");

}
main();
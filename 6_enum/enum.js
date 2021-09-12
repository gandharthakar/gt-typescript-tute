"use strict";
var user_roles;
(function (user_roles) {
    user_roles[user_roles["Super_Admin"] = 0] = "Super_Admin";
    user_roles[user_roles["Admin"] = 1] = "Admin";
    user_roles[user_roles["Super_User"] = 2] = "Super_User";
    user_roles[user_roles["User"] = 3] = "User";
    user_roles[user_roles["Manager"] = 4] = "Manager";
})(user_roles || (user_roles = {}));
console.log(role);
console.log(user_roles.Super_Admin);

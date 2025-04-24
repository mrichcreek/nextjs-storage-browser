"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backend = void 0;
var backend_1 = require("@aws-amplify/backend");
var resource_1 = require("./auth/resource");
var resource_2 = require("./storage/resource");
exports.backend = (0, backend_1.defineBackend)({
    auth: resource_1.auth,
    storage: resource_2.storage
});

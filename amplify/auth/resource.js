"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var backend_auth_1 = require("@aws-amplify/backend-auth");
exports.auth = (0, backend_auth_1.defineAuth)({
    loginWith: {
        email: true
    }
});

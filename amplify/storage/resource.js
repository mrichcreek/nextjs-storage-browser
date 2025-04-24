"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
var backend_storage_1 = require("@aws-amplify/backend-storage");
exports.storage = (0, backend_storage_1.defineStorage)({
    name: 'luisprojectS3',
    access: function (allow) { return ({
        'public/*': [allow.authenticated.to(['read', 'write'])]
    }); }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../utils/jwt");
exports.default = (req, res, next) => {
    var _a;
    const authorization = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    if (!authorization) {
        return res.status(403).json({
            message: 'Unauthorized',
            data: null,
        });
    }
    const [prefix, accessToken] = authorization.split(' ');
    if (!(prefix === 'Bearer' && accessToken)) {
        return res.status(403).json({
            message: 'Unauthorized',
            data: null,
        });
    }
    const user = (0, jwt_1.decodeToken)(accessToken);
    if (!user) {
        return res.status(403).json({
            message: 'Unauthorized',
            data: null,
        });
    }
    req.user = user;
    next();
};

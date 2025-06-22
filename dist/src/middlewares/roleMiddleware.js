"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (roles) => {
    return (req, res, next) => {
        var _a;
        const role = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
        if (!role || !roles.includes(role)) {
            return res.status(403).json({
                data: null,
                message: 'Forbidden',
            });
        }
        next();
    };
};

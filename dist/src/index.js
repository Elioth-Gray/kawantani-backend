"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const facilitatorRoute_1 = __importDefault(require("./routes/facilitatorRoute"));
const locationRoute_1 = __importDefault(require("./routes/locationRoute"));
const articlesRoute_1 = __importDefault(require("./routes/articlesRoute"));
const workshopsRoute_1 = __importDefault(require("./routes/workshopsRoute"));
const articleCategoryRoute_1 = __importDefault(require("./routes/articleCategoryRoute"));
const paymentMethodRoute_1 = __importDefault(require("./routes/paymentMethodRoute"));
const plantCategoryRoute_1 = __importDefault(require("./routes/plantCategoryRoute"));
const plantRoute_1 = __importDefault(require("./routes/plantRoute"));
const userPlantsRoute_1 = __importDefault(require("./routes/userPlantsRoute"));
const adminRoute_1 = __importDefault(require("./routes/adminRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 2000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/uploads', express_1.default.static(path_1.default.join(process.cwd(), 'uploads')));
app.get('/', (req, res) => {
    res.send('🚀 API is running!');
});
app.use('/api', authRoute_1.default);
app.use('/api', usersRoute_1.default);
app.use('/api', facilitatorRoute_1.default);
app.use('/api', locationRoute_1.default);
app.use('/api', articlesRoute_1.default);
app.use('/api', workshopsRoute_1.default);
app.use('/api', articleCategoryRoute_1.default);
app.use('/api', paymentMethodRoute_1.default);
app.use('/api', plantCategoryRoute_1.default);
app.use('/api', plantRoute_1.default);
app.use('/api', userPlantsRoute_1.default);
app.use('/api', adminRoute_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

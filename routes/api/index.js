const router = require("express").Router();
const appointmentRoutes = require("./appointments");
const employeeRoutes = require("./employees");
const userRoutes = require("./users");
const authCheckMiddleware = require('../../config/middleware/authCheck');
		
router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/employees", authCheckMiddleware, employeeRoutes);

module.exports = router;

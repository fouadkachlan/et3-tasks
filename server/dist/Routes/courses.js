"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../Controllers/courseController");
const router = (0, express_1.Router)();
router.get('/', courseController_1.getAllCourses);
router.get('/:id', courseController_1.getCourseById);
router.post('/', courseController_1.createCourse);
router.put('/:id', courseController_1.updateCourse);
router.delete('/:id', courseController_1.deleteCourse);
exports.default = router;

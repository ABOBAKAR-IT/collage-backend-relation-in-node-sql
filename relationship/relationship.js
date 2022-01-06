const COURSES = require("../model/courses_model");
const COURSE_STUDENT = require("../model/course_student");
const DEPARTMENT = require("../model/department_model");
const INSTRUCTER = require("../model/instructer_model");
const STUDENT = require("../model/student_model");

DEPARTMENT.hasMany(INSTRUCTER)
INSTRUCTER.belongsTo(DEPARTMENT)

DEPARTMENT.hasMany(COURSES)
COURSES.belongsTo(DEPARTMENT)

INSTRUCTER.hasMany(COURSES)
COURSES.belongsTo(INSTRUCTER)

STUDENT.hasMany(COURSE_STUDENT)
COURSE_STUDENT.belongsTo(STUDENT)

COURSES.hasMany(COURSE_STUDENT)
COURSE_STUDENT.belongsTo(COURSES)
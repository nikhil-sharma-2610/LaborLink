const express = require('express')
// const mysql = require('mysql2')
// const connectDB = require('../connectionDB/connectionDB')
const upload = require('../multer/multer')


const { testing, login, signup, getAllUsers, getSingleUser, otpverification, postjob, getjobs, getsinglejobs,getAllJobsBySingleRecruiter, postAvailability, getAvailability, getSingleAvailability, postJobApplication, updateAvailability, deleteAvailability, getSingleJobApplication, getUserJobApplication, getAllAvailability, getLabourInfo, postProfileImg ,updateStatus,updateTaskStatus,deletePostedJob,updatePostedJob,updateLabourInfo,getAllJobApplication,updateJobApplication} = require('../controllers/controllers')

const router = express.Router();

router.get('/test', testing)



//login
router.post('/login', login)

//sign-up
router.post('/signup', signup)

//get all users
router.get('/users', getAllUsers)

//get single user
router.get('/user/:username', getSingleUser)

//otp verification
router.post('/otpverification', otpverification)

//job post & get job
router.route('/post-jobs').post(postjob).get(getjobs)

//job delete
router.route('/post-jobs/:jobid').delete(deletePostedJob).patch(updatePostedJob)

//get all jobs posted by single recruiter
router.route('/recruiter-posted-jobs/:username').get(getAllJobsBySingleRecruiter)

//post Availability & get all Availability
router.route('/post-Availability').post(postAvailability).get(getAllAvailability)

//get single user Availability
router.route('/post-Availability/:user').get(getAvailability)

//get single user Availability
router.route('/single-Availability/:id').get(getSingleAvailability)

//update Availability
router.route('/post-Availability/:id').patch(updateAvailability).delete(deleteAvailability)

//get single job
router.route('/post-jobs/:id').get(getsinglejobs)

//post job application
router.route('/job-application').post(postJobApplication)

//update job application
router.route('/job-application/:id').patch(updateJobApplication)

// get all job applications of a single user
router.route('/job-application/:user').get(getUserJobApplication)

// get all job applications sent to a recruiter
router.route('/job-application-recruiter/:username').get(getAllJobApplication)

//single job application
router.route('/job-application/:applicant/:jobid').get(getSingleJobApplication)

//labour info
router.route('/labour-info/:username').get(getLabourInfo).patch(updateLabourInfo)

//upload profile image
router.route('/upload-profile-img/:username').post(upload.single('profile-img'), postProfileImg)

//update status
router.route('/update-status/:username').patch(updateStatus)

//update status
router.route('/post-jobs/:jobid').patch(updateTaskStatus)

module.exports = router;
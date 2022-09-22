import React from "react"
import Back from "../common/back/Back"
import BusinessPage from "./business"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='BUSINESS UNIT' />
      <CoursesCard />
      {/* <BusinessPage /> */}
      {/* <OnlineCourses /> */}
    </>
  )
}

export default CourseHome

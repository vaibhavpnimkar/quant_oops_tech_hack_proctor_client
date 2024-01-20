import ProfileLayout from "@/components/LayoutComponents/profileLayout";
import { StudentExamDataTable } from "@/components/Profile/StudentProfileSection/allExams";
import React from "react";

const AllStudentExams = () => {
  return (
    <ProfileLayout>
      <StudentExamDataTable />
    </ProfileLayout>
  );
};

export default AllStudentExams;

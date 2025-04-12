"use client";

import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

const SchedulePage = () => {
  const router = useRouter();
  const { isLoading, isInterviewer} = useUserRole();

  if(isLoading) return <LoaderUI />;
  if(!isInterviewer) return router.push('/');

  return <InterviewScheduleUI />
}

export default SchedulePage
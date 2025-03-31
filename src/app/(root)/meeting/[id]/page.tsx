"use client";

import LoaderUI from "@/components/LoaderUI";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import useGetCallById from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation"
import { useState } from "react";

const MeetingPage = () => {
  const { id } = useParams();
  const { user, isLoaded } = useUser();
  const { call, isCallLoading} = useGetCallById(id as string);

  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if(!isLoaded || isCallLoading) return <LoaderUI />

  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
        ) : (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  )
}

export default MeetingPage
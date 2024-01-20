import AudioCheck from "@/components/system-permission-check/audio-check";
import InternetCheck from "@/components/system-permission-check/internet-check";
import LocationPermission from "@/components/system-permission-check/location-permission";
import ScreenRecordingCheck from "@/components/system-permission-check/screen-recording-check";
import VideoCheck from "@/components/system-permission-check/video-check";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SystemPermissionCheck = () => {
  const [permissionCount, setPermissionCount] = useState(0);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(permissionCount);
  const handlerSystemInfoCheck = () => {
    navigate(
      `/student/exam/${searchParams.get(
        "examId"
      )}/verify?examId=${searchParams.get("examId")}`
    );
  };
  console.log(permissionCount);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl text-center">System Permission Check</h1>
      <div className="grid grid-cols-1 gap-4 mt-8">
        <AudioCheck setPermissionCount={setPermissionCount} />
        <VideoCheck setPermissionCount={setPermissionCount} />
        <ScreenRecordingCheck setPermissionCount={setPermissionCount} />
        <LocationPermission setPermissionCount={setPermissionCount} />
        <InternetCheck setPermissionCount={setPermissionCount} />
      </div>
      {permissionCount >= 5 ? (
        <Button className="mt-8" onClick={handlerSystemInfoCheck}>
          Start Exam
        </Button>
      ) : (
        <div className="px-6 py-2 mt-8 border rounded-lg border-primary text-primary">
          Allow all permissions to start exam
        </div>
      )}
    </div>
  );
};

export default SystemPermissionCheck;

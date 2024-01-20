import { Button } from "@/components/ui/button";
import { useFaceio } from "@/hooks/useFaceio";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentVerify = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const { handleLogIn } = useFaceio();
  const navigate = useNavigate();
  const { examId } = useParams();
  useEffect(() => {
    setTimeout(async () => {
      try {
        await handleLogIn();
        navigate(`/student/exam/${examId}/start`);
      } catch (error) {
        console.log(error);
        setIsVerified(false);
      }
    }, 1000);
  }, []);

  if (isVerified === null) return <div>Loading...</div>;
  return (
    <div>
      {isVerified ? (
        <div>
          <h1>
            You have registered yourself successfully, Now proctor will verify
            your entered details and will approve your request.
          </h1>
          <Button onClick={() => navigate("/")}>Goto Home</Button>
        </div>
      ) : (
        <div>
          <p>Face not enrolled try again</p>
          <Button onClick={() => window.location.reload()}>Scan Face</Button>
        </div>
      )}
    </div>
  );
};

export default StudentVerify;

import { studentExamState } from "@/atoms/student-exam-state";
import {
  useGetAllLiveExamQuestionsMutation,
  useGetExamByIdMutation,
  useStartExamMutation,
} from "@/components/api";
import Mcq from "@/components/student-exam.tsx/mcq";
import QuestionVideoContainer from "@/components/student-exam.tsx/question-video-container";
import Timer from "@/components/student-exam.tsx/timer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const StudentExam = () => {
  const { id } = useParams();

  const setExamState = useSetRecoilState(studentExamState);
  const { mutate: getAllQuestionFn } = useGetAllLiveExamQuestionsMutation();
  const { mutate: getExamByIdFn } = useGetExamByIdMutation();
  const { mutate: startExamFn } = useStartExamMutation();
  const navigate = useNavigate();

  // Wiered behaviour on full screen
  // useStudentExamMonitor();
  // useDisableRightClick();
  // useDetectTabChange();
  // useKeyboardDisable();

  useEffect(() => {
    if (!id) return;
    console.log("StudentExam");
    startExamFn(
      {
        body: { examId: +id },
      },
      {
        onSuccess: (data) => {
          console.log(data);
          getExamByIdFn(
            {
              body: { examId: +id },
            },
            {
              onSuccess: (data) => {
                setExamState((prev) => ({
                  ...prev,
                  examInfo: data.data,
                  currentQuestion: 1,
                })),
                  console.log(data);
              },
              onError: (error) => {
                console.log(error);
              },
            }
          );
          getAllQuestionFn(
            {
              body: { examId: +id },
            },
            {
              onSuccess: (data) => {
                if (data.data.length === 0) {
                  return;
                }
                setExamState((prev) => ({
                  ...prev,
                  questions: data.data,
                }));
                console.log(data);
              },
              onError: (error) => {
                console.log(error);
              },
            }
          );
        },
        onError: (error) => {
          console.log(error);
          // if(error.error==="Exam already started")
          getExamByIdFn(
            {
              body: { examId: +id },
            },
            {
              onSuccess: (data) => {
                setExamState((prev) => ({
                  ...prev,
                  examInfo: data.data,
                  currentQuestion: 1,
                })),
                  console.log(data);
              },
              onError: (error) => {
                console.log(error);
              },
            }
          );
          getAllQuestionFn(
            {
              body: { examId: +id },
            },
            {
              onSuccess: (data) => {
                if (data.data.length === 0) {
                  return;
                }
                setExamState((prev) => ({
                  ...prev,
                  questions: data.data,
                }));
                console.log(data);
              },
              onError: (error) => {
                // if (error.error === "Exam already finished!") {
                //   navigate("/student/exam/finished");
                //   return;
                // }
                console.log(error);
              },
            }
          );
        },
      }
    );
  }, [id]);

  return (
    <div
      className="p-4"
      style={{
        background:
          "linear-gradient(to bottom,rgba(255,255,255,0.0),rgb(137, 77, 238,0.06))",
      }}
    >
      <Timer />
      <QuestionVideoContainer />
      <Mcq />
      <Dialog open={false}>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Fullscreen</DialogTitle>
            <DialogDescription>
              Enter fullscreen mode to start the exam
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              document.documentElement.requestFullscreen();
            }}
          >
            Fullscreen
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentExam;

const useStudentExamMonitor = () => {
  useEffect(() => {
    console.log("useStudentExamMonitor");

    const handleFullscreenChange = () => {
      console.log(document.fullscreenElement);

      if (document.fullscreenElement) {
        console.log("enter");
      } else {
        console.log("exit");
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    // document.addEventListener("fullscreenerror",handleFullscreenError);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);
};

const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // window.alert("Hehe Boi Right Click is disabled");
      e.preventDefault();
      console.log(window.screen.height, window.screen.width);
      console.log(window.innerHeight, window.innerWidth);
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
};

const useDetectTabChange = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log("hidden");
      } else {
        console.log("visible");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
};

const useKeyboardDisable = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      window.alert("Hehe Boi Keyboard is disabled");
      e.preventDefault();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

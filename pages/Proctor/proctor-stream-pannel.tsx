import { Input } from "@/components/ui/input";
import { VideoPlayer } from "@/components/video/video-player";
import { peer } from "@/lib/socket/peer";
import { ws } from "@/lib/socket/ws";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const ProctorStreamPanel = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  //   Priority based search
  const { id } = useParams();
  const [streams, setStreams] = useState<any>([]);
  const filterStreams = (arr: any) => {
    // remove all dead streams
    arr = arr.filter((item: any) => item.stream.active);
    // remove all streams that have same id

    const ids = arr.map((item: any) => item.id);
    const uniqueIds = [...new Set(ids)];
    const uniqueStreams: any = [];
    uniqueIds.forEach((id: any) => {
      uniqueStreams.push(arr.find((item: any) => item.id === id));
    });
    arr = uniqueStreams;
    // remove all streams that have same name

    return arr;
  };
  const [currentSelectedStream, setCurrentSelectedStream] = useState<
    number | null
  >(1);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
          },
        })
        .then((stream) => {
          peer.on("call", (call) => {
            call.answer(stream);
            call.on("stream", (remoteStream) => {
              setStreams((prevState: any) => [
                ...prevState,
                {
                  stream: remoteStream,
                  id: stream.id,
                  
                },
              ]);
              // setCurrentSelectedStream(1);
            });
          });

          if (id !== undefined && peer.id) {
            ws.emit("join_exam_room", {
              roomId: id,
              peerId: peer.id,
              type: "proctor",
            });
          }

          ws.on("new_student_joined", ({ room }: any) => {
            setStreams({});
            room
              .filter((user: any) => user.type === "proctor")
              .map((user: any) => {
                const call = peer.call(user.peerId, stream);
                call.on("stream", (remoteStream) => {
                  setStreams((prevState: any) => [
                    ...prevState,
                    {
                      stream: remoteStream,
                      name: "a new student",
                      id: stream.id,
                    },
                  ]);
                  // setCurrentSelectedStream(1);
                });
              });
          });
          ws.on("new_proctor_joined", ({ room }: any) => {
            room
              .filter((user: any) => user.type === "student")
              .map((user: any) => {
                const call = peer.call(user.peerId, stream);
                call.on("stream", (remoteStream) => {
                  setStreams((prevState: any) => [
                    ...filterStreams(prevState),
                    {
                      stream: remoteStream,
                      id: stream.id,
                    },
                  ]);
                });
              });
          });
        });

      webCamPromise.then(() => {});

      return () => {
        ws.off("new_proctor_joined");
        ws.off("new_student_joined");
      };
    }
  }, [id, peer.id]);

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl text-center ">Proctor Stream Panel</h1>
      {currentSelectedStream !== null ? (
        <VideoPlayer
          key={streams[currentSelectedStream! - 1]?.id}
          stream={streams[currentSelectedStream! - 1]?.stream}
          className="rounded-lg h-[32rem]"
        />
      ) : null}
      <div></div>
      <div className="flex items-center gap-4 mx-5">
        <Search className="w-6 h-6 mt-8 text-primary" />
        <Input
          type="text"
          placeholder="Search"
          className="w-full mt-8 bg-secondary"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 mx-5 mt-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {streams?.map((stream: any, index: number) => {
          if (stream.active === false) return null;
          return (
            <div
              className={twMerge([
                " flex transition-all duration-300 ease-in-out cursor-pointer hover:shadow-md rounded-lg ",
                currentSelectedStream === index + 1
                  ? "border p-1.5 border-primary"
                  : null,
              ])}
              onClick={() => setCurrentSelectedStream(index + 1)}
            >
              <VideoPlayer
                key={stream.id}
                stream={stream.stream}
                className="rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProctorStreamPanel;

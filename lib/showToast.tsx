import { CheckCircle, MessageSquareWarning } from "lucide-react";
import { toast } from "react-hot-toast";

export const showToast = (message: string, icon: string) => {
  toast(
    <p className="flex items-center">
      {icon === "success" ? (
        <CheckCircle className="w-6 h-6 text-green-500" />
      ) : (
        <MessageSquareWarning className="w-6 h-6 text-red-500" />
      )}
      &nbsp; {message}
    </p>,
    {
      duration: 5000,
    }
  );
};

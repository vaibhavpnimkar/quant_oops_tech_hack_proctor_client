export const accuracyThreshold = 0.6;
export const poseAccuracyThreshold = 0.5;


export const features = [
  {
    title: "System Check",
    description:
      "Ensure a seamless exam experience with our comprehensive system check. Verify browser compatibility, camera, and microphone functionality. Make sure candidates have the right tools for the job.",
    image: "/images/feature1.svg",
  },
  {
    title: "Secure Browser",
    description:
      "Maintain exam integrity with our secure browser check. Prevent unauthorized browsing during the test. Keep distractions at bay and maintain focus on the exam questions.",
    image: "/images/feature2.svg",
  },
  {
    title: "Tab Switching Alert",
    description:
      "Detect tab switching and background apps to deter cheating during online exams. Ensure candidates stay on the exam page throughout the assessment.",
    image: "/images/feature3.svg",
  },
  {
    title: "Head Movement Monitoring",
    description:
      "Monitor head movements to ensure candidate engagement and discourage cheating. Ensure that candidates remain attentive to the exam and discourage the use of external aids.",
    image: "/images/feature4.svg",
  },
  {
    title: "Eye & Mouth Tracking",
    description:
      "Track eye movements and detect unusual mouth activity to maintain exam fairness. Ensure candidates are not sharing answers or receiving help.",
    image: "/images/feature5.svg",
  },
  {
    title: "Multi-Person Alert",
    description:
      "Detect multiple individuals or the use of earbuds to prevent unauthorized assistance during exams. Ensure a level playing field for all candidates.        ",
    image: "/images/feature6.svg",
  },
  {
    title: "Dictation & Keyword Matching",
    description:
      "Utilize YOLO-4 technology to extract keywords from candidate audio and match them with answer sheets for enhanced evaluation. Efficiently assess candidate responses while maintaining exam integrity.",
    image: "/images/feature7.svg",
  },
];

export const authSteps = [
  {
    id: 1,
    title: "Quick Registration",
    description:
      "Get started by registering with your email and a secure password. We'll also capture your name for a personalized experience.",
    buttonText: "Register Now",
    imageSrc: "/images/auth1.svg",
    href: "/register",
  },
  {
    id: 2,
    title: "System Check",
    description:
      "Ensure your camera and microphone are ready for a smooth experience. We'll perform a quick system check to verify their access and functionality.",
    buttonText: "Perform System Check",
    imageSrc: "/images/auth2.svg",
    href: "/login",
  },
  {
    id: 3,
    title: "OTP Verification",
    description:
      "Secure your account with a one-time password (OTP) sent to your registered email. It's an extra layer of protection.",
    buttonText: "Verify with OTP",
    imageSrc: "/images/auth3.svg",
    href: "/login",
  },
];
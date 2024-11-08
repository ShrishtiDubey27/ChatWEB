import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ContactConatiner from "./components/contact-container";
import ChatContainer from "./components/chat-container";
import EmptyContainer from "./components/empty-chat-container";

const Chat = () => {
  const { userInfo, selectedChatType } = useAppStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast("Please setup profile to continue");
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return (
    <div className="flex h-[100vh] text-white overflow-hidden">
      <ContactConatiner />
      {selectedChatType === undefined ? <EmptyContainer /> : <ChatContainer />}
    </div>
  );
};

export default Chat;

interface ChatMessageProps {
  messageType?: "send" | "received"
  text: string;
  bold?: boolean;
}
const ChatMessage = ({messageType = "send", text ,bold}: ChatMessageProps) => {
  return <div className={`w-full flex ${messageType === "send" ? "justify-end" : ""}`}>
    <div
      className={`w-fit max-w-[266px] relative gap-2.5 p-2.5 rounded-tl-xl rounded-tr-xl  ${messageType === "send" ? "bg-[#c9f0f5] rounded-bl-xl" : "bg-[#FEF7C3] rounded-br-xl"} ${bold && "font-bold underline"} border border-[#21242a] font-mono whitespace-break-spaces overflow-wrap-break-word retro-shadow`}

    >
      <p className="flex-grow-0 flex-shrink-0 text-base text-right text-[#21242a]">
        <span className="flex-grow-0 flex-shrink-0 text-base text-right text-[#21242a]"
        >{text}</span>
      </p>
    </div>
  </div>
};
export default ChatMessage;
import { Suspense } from "react";
import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <ChatWindow placeholder="Try asking something about the document you just uploaded!"></ChatWindow>
    </Suspense>
  );
}

import { useEffect, useState, useRef } from "react";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

export default function InternetConnectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const hasBeenOffline = useRef(!navigator.onLine);

  useEffect(() => {
    if (!isOnline) {
      hasBeenOffline.current = true;
      toaster.create({
        description: "You are offline",
        type: "warning",
      });
    } else {
      if (!isFirstRender.current && hasBeenOffline.current) {
        toaster.create({
          description: "You are online",
          type: "success",
        });
        hasBeenOffline.current = false;
      }
    }

    isFirstRender.current = false;
  }, [isOnline]);

  return (
    <>
      {isOnline ? (
        children
      ) : (
        <>
        
          <Skeleton height="288px" borderRadius="lg" mb={4} />
          <SkeletonText noOfLines={3} mb={8} />
          <Skeleton height="288px" borderRadius="lg" mb={4} />
          <SkeletonText noOfLines={3} />
        </>
      )}
    </>
  );
}

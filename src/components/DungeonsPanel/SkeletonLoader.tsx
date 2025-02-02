import { Skeleton } from "@/ui";

export const SkeletonLoader = () => {
  return (
    <>
      <Skeleton className="w-[220px] h-6 rounded-xl" />
      <Skeleton className="w-[240px] h-6 rounded-xl" />
      <Skeleton className="w-[270px] h-6 rounded-xl" />
    </>
  );
};

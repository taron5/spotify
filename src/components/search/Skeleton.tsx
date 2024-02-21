export default function Skeleton() {
  return (
    <div className="flex flex-col flex-1 gap-3 my-5">
      <div className="flex flex-col space-y-2 animate-pulse">
        <div className="h-[72px] bg-gray-100 flex items-center gap-3 w-full p-4 rounded-md"></div>
        <div className="h-[72px] bg-gray-100 flex items-center gap-3 w-full p-4 rounded-md"></div>
        <div className="h-[72px] bg-gray-100 flex items-center gap-3 w-full p-4 rounded-md"></div>
        <div className="h-[72px] bg-gray-100 flex items-center gap-3 w-full p-4 rounded-md"></div>
        <div className="h-[72px] bg-gray-100 flex items-center gap-3 w-full p-4 rounded-md"></div>
      </div>
    </div>
  );
}

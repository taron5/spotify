export default function MessageBlock({ message }: { message: string }) {
  return (
    <div className="flex flex-col flex-1 gap-3 my-5 basis-1 justify-center">
      <div className="container flex justify-center items-center py-8">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-800">
            <span className="icon-search" />
          </span>
          <div className="text-lg font-semibold text-gray-800">{message}</div>
        </div>
      </div>
    </div>
  );
}

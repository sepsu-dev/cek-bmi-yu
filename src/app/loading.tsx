export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 animate-pulse">
      <div className="w-64 h-64 border-4 border-slate-100 rounded-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-4 w-20 bg-slate-200 rounded"></div>
          <div className="h-12 w-32 bg-slate-200 rounded"></div>
          <div className="h-8 w-24 bg-slate-200 rounded-xl mt-4"></div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-6 gap-2 w-full max-w-md px-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-1.5 bg-slate-200 rounded-full w-full"></div>
        ))}
      </div>
    </div>
  );
}

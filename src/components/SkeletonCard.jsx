const SkeletonCard = () => {
  return (
    <li className="rounded-lg border border-stone-200 bg-white overflow-hidden">
      {/* Image */}
      <div className="w-full h-44 bg-stone-200 animate-pulse"></div>

      <div className="p-4">
        {/* Topic badge */}
        <div className="h-5 w-20 bg-stone-200 rounded-full animate-pulse mb-2"></div>

        {/* Title */}
        <div className="h-5 bg-stone-200 rounded animate-pulse mb-2"></div>
        <div className="h-5 w-4/5 bg-stone-200 rounded animate-pulse"></div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between">
          <div className="h-3 w-20 bg-stone-200 rounded animate-pulse"></div>

          <div className="h-3 w-28 bg-stone-200 rounded animate-pulse"></div>
        </div>
      </div>
    </li>
  );
};

export default SkeletonCard;

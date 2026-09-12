export function Rating({
  rating,
  reviews,
  className = "",
}: {
  rating: number;
  reviews?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span aria-hidden className="flex text-gold">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            viewBox="0 0 20 20"
            className="h-3.5 w-3.5"
            fill={star <= Math.round(rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8z" />
          </svg>
        ))}
      </span>
      <span className="text-xs text-muted">
        {rating.toFixed(1)}
        {reviews !== undefined && (
          <span> | {reviews.toLocaleString("en-IN")} reviews</span>
        )}
      </span>
    </span>
  );
}

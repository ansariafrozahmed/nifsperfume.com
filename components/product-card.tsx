import Image from "next/image";
import Link from "next/link";
import { WishlistButton } from "@/components/wishlist";
import {
  discountPercent,
  formatPrice,
  type Product,
} from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      aria-label={`${product.name} — ${product.tagline}`}
    >
      <div className="relative aspect-[4/5]  overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} Eau de Parfum bottle`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
        />
        {/* {product.badge && (
          <span className="absolute left-4 top-4 bg-white px-2 py-1 rounded-xs text-[9px] font-semibold uppercase tracking-[0.15em] text-ink">
            {product.badge}
          </span>
        )} */}
        <WishlistButton
          slug={product.slug}
          className="absolute right-2 top-2"
        />
      </div>

      <div className="pt-4">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] lg:tracking-[0.28em] text-gold">
          {product.family}
        </p>
        <h3 className="mt-2 font-display text-[13px] lg:text-[15px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 group-hover:text-gold">
          {product.name}
        </h3>
        {/* <Rating
          rating={product.rating}
          reviews={product.reviews}
          className="mt-2"
        /> */}
        <div className="mt-2.5 flex items-baseline gap-2.5">
          <span className="text-[15px] font-semibold tracking-wide">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs font-light text-muted line-through">
            {formatPrice(product.mrp)}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
            {discountPercent(product)}% Off
          </span>
        </div>
      </div>
    </Link>
  );
}

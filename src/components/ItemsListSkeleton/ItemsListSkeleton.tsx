import { ItemsCardSkeleton } from "../ItemCardSkeleton/ItemCardSkeleton"

export const ItemsListSkeleton = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {[1, 2, 3, 4].map(item => (
        <ItemsCardSkeleton key={item} />
      ))}
    </div>
  )
}

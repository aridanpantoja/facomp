import { Skeleton } from './ui/skeleton'

export function PostsLoading() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton className="h-[250px] w-full" key={i}></Skeleton>
      ))}
    </div>
  )
}

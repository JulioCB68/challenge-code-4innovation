export function TableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <>
        <tr
          key={i}
          className="cursor-pointer border-b border-zinc-700/50 last:border-none hover:bg-zinc-200/50 dark:hover:bg-zinc-800"
        >
          <td className="w-[11rem] p-4">
            <div className="h-4 w-full animate-pulse rounded-md bg-zinc-100/40" />
          </td>
          <td className="w-[43rem] p-4">
            <div className="h-4 w-full animate-pulse rounded-md bg-zinc-100/40" />
          </td>
          <td className="w-[10.5rem] p-4">
            <div className="h-4 w-full animate-pulse rounded-md bg-zinc-100/40" />
          </td>
          <td className="flex items-end justify-end p-4">
            <div className="h-4 w-[50px] animate-pulse rounded-md bg-zinc-100/40" />
          </td>
        </tr>
      </>
    )
  })
}

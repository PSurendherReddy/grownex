export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <path
          d="M12 5H20V13H16V9H12V5Z"
          fill="hsl(var(--accent))"
        />
      </svg>
      <span className="text-xl font-bold font-headline">Grownex</span>
    </div>
  )
}

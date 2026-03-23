/**
 * MockDashboard — a fake AI tool review dashboard UI displayed inside the
 * ContainerScroll 3D card on the hero section. Pure code, no images needed.
 */
export function MockDashboard() {
  const mockTools = [
    { name: "Airies", cat: "Learning", rating: 4.5, color: "bg-purple-500" },
    { name: "Writerly AI", cat: "Writing", rating: 4.0, color: "bg-blue-500" },
    { name: "PixelCraft", cat: "Images", rating: 4.5, color: "bg-pink-500" },
    { name: "SEOBot", cat: "SEO", rating: 4.0, color: "bg-green-500" },
  ];

  return (
    <div className="h-full w-full p-4 md:p-6 text-foreground">
      {/* Search bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 bg-background/60 border border-border-color rounded-lg px-4 py-2.5 text-sm text-muted">
          Search AI tools...
        </div>
        <div className="bg-accent rounded-lg px-4 py-2.5 text-sm font-semibold text-white">
          Search
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Tools Reviewed", value: "127" },
          { label: "Categories", value: "12" },
          { label: "Avg Rating", value: "4.3★" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-background/40 border border-border-color rounded-lg p-3 text-center"
          >
            <div className="text-lg md:text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-xs text-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tool cards grid */}
      <div className="grid grid-cols-2 gap-3">
        {mockTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-background/40 border border-border-color rounded-lg p-3 md:p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center text-white text-xs font-bold`}
              >
                {tool.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {tool.name}
                </div>
                <div className="text-xs text-muted">{tool.cat}</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-xs">
                {"★".repeat(Math.floor(tool.rating))}
                {tool.rating % 1 >= 0.5 ? "½" : ""}
              </span>
              <span className="text-xs text-muted ml-1">
                {tool.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

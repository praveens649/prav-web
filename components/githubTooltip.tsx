"use client"

const GitHubTooltip = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative cursor-pointer transition-all duration-200 text-lg rounded-lg group">
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 p-3 opacity-0 invisible pointer-events-none transition-all duration-300 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:mb-6 z-10 min-w-[250px]">
          {/* Tooltip Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 text-lg font-bold border-2 border-gray-800 dark:border-gray-300 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md">
                GH
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-lg font-bold text-gray-800 dark:text-gray-200">Developer</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">@github-user</div>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">1.2k+ Repositories • 500+ Stars</div>
          </div>
        </div>

        {/* Icon with Layers */}
        <div className="relative">
          <a href="https://github.com/" className="block relative no-underline group/icon">
            <div className="relative w-16 h-16 transition-transform duration-500 ease-out group-hover/icon:rotate-[-25deg] group-hover/icon:skew-x-[15deg]">
              {/* Layer 1 - Bottom */}
              <span className="absolute inset-0 border-2 border-gray-800 dark:border-gray-300 rounded-lg transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 group-hover/icon:opacity-30 group-hover/icon:translate-x-0 group-hover/icon:translate-y-0 shadow-lg"></span>

              {/* Layer 2 */}
              <span className="absolute inset-0 border-2 border-gray-700 dark:border-gray-400 rounded-lg transition-all duration-500 ease-out bg-gray-200 dark:bg-gray-700 group-hover/icon:opacity-50 group-hover/icon:translate-x-1 group-hover/icon:translate-y-[-4px] shadow-lg"></span>

              {/* Layer 3 */}
              <span className="absolute inset-0 border-2 border-gray-600 dark:border-gray-500 rounded-lg transition-all duration-500 ease-out bg-gray-300 dark:bg-gray-600 group-hover/icon:opacity-70 group-hover/icon:translate-x-2 group-hover/icon:translate-y-[-8px] shadow-lg"></span>

              {/* Layer 4 */}
              <span className="absolute inset-0 border-2 border-gray-500 dark:border-gray-600 rounded-lg transition-all duration-500 ease-out bg-gray-400 dark:bg-gray-500 group-hover/icon:opacity-85 group-hover/icon:translate-x-3 group-hover/icon:translate-y-[-12px] shadow-lg"></span>

              {/* Layer 5 - Top (Main Icon) */}
              <span className="absolute inset-0 border-2 border-gray-800 dark:border-gray-200 rounded-lg transition-all duration-500 ease-out bg-white dark:bg-gray-900 group-hover/icon:translate-x-4 group-hover/icon:translate-y-[-16px] shadow-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gray-800 dark:fill-gray-200">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
            </div>

            {/* Label */}
            <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 opacity-0 font-semibold transition-all duration-300 ease-out text-gray-800 dark:text-gray-200 group-hover/icon:opacity-100 group-hover/icon:mt-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 text-sm whitespace-nowrap">
              GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GitHubTooltip

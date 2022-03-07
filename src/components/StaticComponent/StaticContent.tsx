import React from 'react'

const StaticContent = () => {
  return (
    <div className="grid items-center flex justify-items-center bg-slate-100 my-8">
        <div className="left">
            <h2 className="font-Poppins text-2xl font-black tracking-wide">Testimonials I've left <span className="p-1 h-8 w-64 ml-2 text-sm border border-solid border-2 rounded-l-xl rounded-r-xl border-gray-300">47</span></h2>
        </div>
        <img className="h-10 w-16" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzggMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIgMTMgOC40LTlMMjYgMTYgMzkuMiA0LjkgNTMgMTZsOS4zLTEwLjJMNzYuNCAxNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4=" alt="zigzag"/>
    </div>
  )
}

export { StaticContent }
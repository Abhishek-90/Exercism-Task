import React from 'react'

const StaticContent = () => {
  return (
    <div className="grid items-center flex justify-items-center my-4">
        <img className="h-16 w-14 my-4" src={require("../../constants/Message.jpg")} alt="zigzag"/>
        <div className="left">
            <h2 className="font-Poppins text-4xl font-black tracking-wide text-static-text">Testimonials I've left <span className="py-1 px-2 h-8 w-64 ml-2 text-sm border border-solid border-2 rounded-l-2xl rounded-r-2xl border-gray-300">47</span></h2>
        </div>
        <img className="h-10 w-16 my-4" src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzggMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIgMTMgOC40LTlMMjYgMTYgMzkuMiA0LjkgNTMgMTZsOS4zLTEwLjJMNzYuNCAxNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4=" alt="zigzag"/>
    </div>
  )
}

export { StaticContent }
import React from 'react'

export const Filters = () => {
  return (
      <div className="filters-bar h-20 border-b-2 border-solid border-slate-100">
        <div className="newest-oldest-filter flex justify-center items-center h-full rounded-4 w-1/3 float-right">
          <select className="bg-filters-color w-2/3 h-12 pl-4 font-Poppins text-new-old rounded-lg">
            <option className="ml-8" value="newest_first">Sort by Most Recent</option>
            <option value="oldest_first">Sort by Least Recent</option>
          </select>
        </div>
      </div>
  )
}

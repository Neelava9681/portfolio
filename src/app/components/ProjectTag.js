import React from 'react'

export const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyle = isSelected
    ?"bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-400"
    :"hover:bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 px-1 py-1"
    

    const buttonStyle2 = isSelected
    ?"bg-[#4A05BB]"
    :"hover:bg-[#4A05BB]"


  return (
    <div>
        <button className={`${buttonStyle} bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 px-1 py-1 sm:w-fit rounded-full mr-4   text-white font-medium w-[160px] mb-3`}
        onClick={()=> onClick(name)}
        >
          <span className={`${buttonStyle2} bg-[#2F017C] block  rounded-full px-5 py-2`}>
            {name}
          </span>
        </button>
    </div>
  )
}

export default ProjectTag;
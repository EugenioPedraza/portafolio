import React from 'react'


const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b border-blue-400' : 'text-[#00ffcc]';
  return (
    <button onClick={selectTab}>
        <p className= {`mr-3 font-semibold ${buttonClasses}`}>
    {children}
    </p>
</button>
  )
}

export default TabButton
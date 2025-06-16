// import React, { FC } from "react";

// interface SideMenuProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const SideMenu:FC<SideMenuProps> = ({isOpen, onClose}) => {
//   return <div className="fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none">
//     <div
//       className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg blur-lg"
//       aria-hidden="true"
//     ></div>
//     <SideMenu isOpen={isOpen}
//     onClose={   
//         () => onClose()
//     } />
//   </div>;
// };

// export default SideMenu;

import React from 'react'

const SideMenu = () => {
  return (
    <div>SideMenu</div>
  )
}

export default SideMenu
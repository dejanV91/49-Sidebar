import React, { useContext, useState } from "react";

const AppContect = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContect.Provider
      value={
        (isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar)
      }
    >
      {children}
    </AppContect.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContect);
};

export { AppContect, AppProvider };
// import React, { useContext, useState } from "react";

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openSidebar = () => {
//     setIsSidebarOpen(true);
//   };
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         isModalOpen,
//         isSidebarOpen,
//         openSidebar,
//         openModal,
//         closeModal,
//         closeSidebar,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// // custom hook
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };

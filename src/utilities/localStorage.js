
const getFromLocalStorage = () => {
    const savedApp = localStorage.getItem('appData')
    if(savedApp){
        return JSON.parse(savedApp)
    }
    return []
}

// const setToLocalStorage = (app) => {
//     const fromLocalSTorage = localStorage.getItem('appData')

//     if(fromLocalSTorage){
//        const parsedData = JSON.parse(fromLocalSTorage) 
//        const updatedData = [...parsedData, app]
//        localStorage.setItem('appData', JSON.stringify(updatedData))

//     }else{
//         const initialData = [app]
//         localStorage.setItem('appData', JSON.stringify(initialData))
//     }
    
    
//     console.log("saved to localstorage");
// }

const setToLocalStorage = (app) => {
  const existing = JSON.parse(localStorage.getItem('appData')) || [];
  const alreadyExists = existing.some(item => item.id === app.id);

  if (!alreadyExists) {
    const updated = [...existing, app];
    localStorage.setItem('appData', JSON.stringify(updated));
    console.log("App saved to localStorage.");
  } else {
    console.log("App already exists in localStorage.");
  }
};


const removeFromLocalStorage = (id) => {

    const savedApp = localStorage.getItem('appData')
    if(savedApp){
        const parsedApp = JSON.parse(savedApp)
        const filteredApp = parsedApp.filter(app => app.id !== id)
        localStorage.setItem('appData', JSON.stringify(filteredApp))
    }
}

export {getFromLocalStorage, setToLocalStorage, removeFromLocalStorage}

const getFromLocalStorage = () => {
    const savedApp = localStorage.getItem('appData')
    if(savedApp){
        return JSON.parse(savedApp)
    }
    return []
}

const setToLocalStorage = (app) => {
    const fromLocalSTorage = localStorage.getItem('appData')

    if(fromLocalSTorage){
       const parsedData = JSON.parse(fromLocalSTorage) 
       const updatedData = [...parsedData, app]
       localStorage.setItem('appData', JSON.stringify(updatedData))

    }else{
        const initialData = [app]
        localStorage.setItem('appData', JSON.stringify(initialData))
    }
    
    
    console.log("saved to localstorage");
}

const removeFromLocalStorage = (id) => {

    const savedApp = localStorage.getItem('appData')
    if(savedApp){
        const parsedApp = JSON.parse(savedApp)
        const filteredApp = parsedApp.filter(app => app.id !== id)
        localStorage.setItem('appData', JSON.stringify(filteredApp))
    }
}

export {getFromLocalStorage, setToLocalStorage, removeFromLocalStorage}
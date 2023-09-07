const addElement=(tag,addLocation,atribute) =>{
    let child = document.createElement(tag);
    child.setAttribute("id",atribute);
    addLocation.appendChild(child);
    return child;
}

export {addElement};

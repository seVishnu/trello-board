import { useState } from "react"
import { AddItemButton } from './styles'

type AddNewItemProps = {
    onAdd(text: string) : void,
    toggleButtonText: string,
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) =>{
    const [showForm, setShowForm] = useState<boolean>(false);
    const { onAdd, toggleButtonText, dark } = props;
    if(showForm){
        //render the form
    }
    return(
        <AddItemButton dark={dark} onClick={()=> setShowForm(true)}>{toggleButtonText}</AddItemButton>
    )
}
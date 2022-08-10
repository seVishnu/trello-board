import { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { useFocus } from './utilities/useFocus'

type NewItemFormProps = {
    onAdd(text: string) : void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) =>{
    const [text, setText] = useState<string>('');
    const inputRef = useFocus();

    const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter')
        onAdd(text);
    }

    return(
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} 
                          onChange={(e)=>setText(e.target.value)} 
                          value={text}
                          onKeyUp={handleAddText}/>
            <NewItemButton onClick={()=> onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    )

}
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from './state/AppStateContext'

type  ColumnProps = {
    text: string
    id: string
}

export const Column = ({text, id}: ColumnProps) =>{
    const { getTaskByListId } = useAppState();

    const tasks = getTaskByListId(id)
    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map((task) =>(
                    <Card text={task.text} key={task.id} id={task.id}/>
                ))
            }
            <AddNewItem toggleButtonText="+ Add another card" onAdd={()=> console.log('New Item Added')} dark/>
        </ColumnContainer>
    )
}
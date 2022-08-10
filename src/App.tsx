import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

export const  App = () => {
  return (
    <AppContainer>
      <Column text="To Do:" />
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(e)=>console.log(e)}/>
    </AppContainer>
  );
}

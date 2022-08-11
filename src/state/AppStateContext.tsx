import { createContext, FC, useContext } from "react";

type Task = {
    id: string,
    text: string
}

type List = {
    id: string,
    text: string,
    tasks: Task[]
}

export type AppState = {
    lists : List[]
}

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do:',
            tasks: [
                {
                    id: 'c0',
                    text: 'Generate App'
                }
            ]
        },
        {
            id: '1',
            text: 'In Progress:',
            tasks: [
                {
                    id: 'd0',
                    text: 'Innovate Ideas'
                }
            ]
        },
        {
            id: '0',
            text: 'Done:',
            tasks: [
                {
                    id: 'e0',
                    text: 'Be Positive'
                }
            ]
        }
    ]
}
interface Props {
    children: React.ReactNode;
  }
type AppStateContextProps = {
    lists: List[]
    getTaskByListId(id: string): Task[],
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
    );

export const AppStateProvider: FC<Props> = ({ children }) => {
    const {lists} = appData

    const getTaskByListId = (id: string) => {
        return lists.find((list)=> list.id === id) ?.tasks ||[];
    };
    return(
        <AppStateContext.Provider value={{ lists, getTaskByListId }}>
            {children}
        </AppStateContext.Provider>
    );
};

export const useAppState = () => {
    return useContext(AppStateContext)
}
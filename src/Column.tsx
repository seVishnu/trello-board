import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type  ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps) =>{
    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate App" />
            <Card text="Innovate Ideas" />
            <Card text="Be Positive" />
        </ColumnContainer>
    )
}
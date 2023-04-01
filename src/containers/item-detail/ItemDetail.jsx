import { Box } from "@mui/material";
import { Container } from "@mui/system";

import ItemCast from "./ItemCast";
import ItemHead from "./ItemHead";
import ItemSimilar from "./ItemSimilar";

const ItemDetail = ({details, credits, similar}) => {

    return (
        <>
            <ItemHead data={details}/>
            <Box mt={5}>
                <Container maxWidth="xl">
                    <ItemCast data={credits?.cast}/>
                    {!!similar?.length && <ItemSimilar data={similar}/>}
                </Container>
            </Box>
        </>
    )
}

export default ItemDetail;
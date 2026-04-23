"use client";

import React, { useState } from 'react';
import { Container, Typography, Box, TextField } from '@mui/material';
import ProductModifierButton, {ModifierType} from '@/components/productModifierButton';
import { Product } from '@/lib/productInterface';



export default function ItemPageClient({ product }: { product: Product }) {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [quantity, setQuantity] = useState(product.quantity);
    const [price, setPrice] = useState(product.price);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);

    return (
        <React.Fragment>
            <Container disableGutters sx={{ marginTop: 4}}>

                <Typography
                    variant="h3"
                    sx={{ marginBottom: 4}}
                >
                    <TextField
                        id="filled-helperText"
                        label="Product Name"
                        defaultValue={name}
                        variant="outlined"
                        size="small"
                        margin="none"
                        sx={{
                            '& .MuiInputBase-input': { fontSize: 28 },  // input text
                            '& .MuiInputLabel-root': { fontSize: 16 },  // label text
                        }}
                    />
                </Typography>

                <Container disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <img src={imageUrl} alt={name} style={{ maxWidth: '368px', maxHeight: '368px',}} />

                    <Typography
                        variant="h5"
                        sx={{ marginBottom: 4, marginLeft: 16, maxWidth: '75%'}}
                    >
                        {description}
                    </Typography>
                </Container>

                <Container disableGutters sx={{display: 'flex', flexDirection: 'column', marginTop: 4, gap: 1}}>
                    <Typography variant="h4">
                        Current Quantity:
                    </Typography>
                    <Box sx={{display: 'flex', gap: 2}}>
                        <ProductModifierButton id={product._id} type={ModifierType.Decrement} onUpdate={(newQuantity) => setQuantity(newQuantity)} />
                        <Typography variant="h4">
                            {quantity}
                        </Typography>
                        <ProductModifierButton id={product._id} type={ModifierType.Increment} onUpdate={(newQuantity) => setQuantity(newQuantity)} />
                    </Box>
                </Container>
            </Container>
        </React.Fragment>
    )
}
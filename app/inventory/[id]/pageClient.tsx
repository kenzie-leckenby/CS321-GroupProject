"use client";

import React, { useState } from 'react';
import { Container, Typography, Box, TextField, IconButton } from '@mui/material';
import { Product } from '@/lib/productInterface';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decrementProduct, incrementProduct, setNameProduct } from '@/util/productFunctions';



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
                        onChange={(e) => setNameProduct({id: product._id, newName: e.target.value, onUpdate: (newName) => setName(newName)})}
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
                        <IconButton onClick={() => decrementProduct({id: product._id, onUpdate: (newQuantity) => setQuantity(newQuantity)})}>
                            <RemoveIcon />
                        </IconButton>

                        <Typography variant="h4">
                            {quantity}
                        </Typography>

                        <IconButton onClick={() => incrementProduct({id: product._id, onUpdate: (newQuantity) => setQuantity(newQuantity)})}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Container>
        </React.Fragment>
    )
}
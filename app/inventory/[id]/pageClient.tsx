"use client";

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, IconButton } from '@mui/material';
import { Product } from '@/lib/productInterface';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decrementProduct, incrementProduct, setNameProduct , getProduct, setPriceProduct, setDescriptionProduct} from '@/util/productFunctions';
import { CircularProgress } from '@mui/material';



export default function ItemPageClient({ id }: { id: string }) {
    const [product, setProduct] = useState<Product | null>(null);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    // Once product is loaded then we can assign states.
    useEffect(() => {
        getProduct(id).then((product) => {
            setProduct(product);
            setName(product.name);
            setDescription(product.description);
            setQuantity(product.quantity);
            setPrice(product.price);
            setImageUrl(product.imageUrl);
        });
    }, []);

    // If Product is not loaded return a circular progress indicator to prevent hydration errors.
    if (product === null) return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <CircularProgress />
        </Container>

    );

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
                        sx={{ marginBottom: 4, maxWidth: '200%', flexGrow: 1}}
                    >
                        <TextField
                            id="filled-helperText"
                            label="Item Description"
                            defaultValue={description}
                            variant="outlined"
                            size="medium"
                            margin="none"
                            multiline
                            fullWidth
                            sx={{
                                '& .MuiInputBase-input': { fontSize: 28 },  // input text
                                '& .MuiInputLabel-root': { fontSize: 16 },  // label text
                            }}
                            onChange={(d) => setDescriptionProduct({id: product._id, newDescription: d.target.value, onUpdate: (newDescription) => setDescription(newDescription)})}

                        />
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
                                <Typography
                    variant="h3"
                    sx={{ marginBottom: 4}}
                >
                    <TextField
                        id="filled-helperText"
                        label="ProductPrice"
                        defaultValue={price}
                        variant="outlined"
                        size="small"
                        margin="none"
                        sx={{
                            '& .MuiInputBase-input': { fontSize: 28 },  // input text
                            '& .MuiInputLabel-root': { fontSize: 16 },  // label text
                        }}
                        onChange={(e) => setPriceProduct({id: product._id,  newPrice:parseFloat( e.target.value), onUpdate: (newPrice) => setPrice(newPrice)})}
                    />
                </Typography>
            </Container>
        </React.Fragment>
    )
}
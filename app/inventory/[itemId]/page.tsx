"use client";
import React, { useState } from 'react';
import inventory from '../../../public/inventory.json';
import { Container, Typography, Box, Button } from '@mui/material';
import { useParams } from 'next/navigation';
import ProductModifierButton, {ModifierType} from '@/components/productModifierButton';
export default function ItemPage() {
    const { itemId } = useParams();
    const productId = (itemId as string).split("-")[1];
    const product = inventory.find(p => p.id === Number(productId));
    var productQuantity = Number(product?.quantity);
    const [quantity, setQuantity] = useState(Number(product?.quantity));
    const [price, setPrice] =useState(Number(product?.price));
    return (
        <React.Fragment>
            <Container disableGutters sx={{ marginTop: 4}}>
                <Typography
                    variant="h3"
                    sx={{ marginBottom: 4}}
                >
                    {product?.name}
                </Typography>

                <Container disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <img src={product?.['image-url']} alt={product?.name} style={{ maxWidth: '368px', maxHeight: '368px',}} />

                    <Typography
                        variant="h5"
                        sx={{ marginBottom: 4, marginLeft: 16, maxWidth: '75%'}}
                    >
                        {product?.description}
                    </Typography>
                </Container>

                <Container disableGutters sx={{display: 'flex', marginTop: 4, gap: 2}}>
                    <Typography variant="h4">
                        Current Quantity: {quantity}
                    </Typography>
                    <Button onClick={()=>{setQuantity(quantity+1)}}>+</Button>
                    <Button onClick={()=>{setQuantity(quantity-1)}}>-</Button>   
                </Container>
                    <Container disableGutters sx={{display: 'flex', marginTop: 4, gap: 2}}>
                    <Typography variant="h4">
                        Current Price: {price}
                    </Typography>
                    <Button onClick={()=>{setPrice(price+1)}}>+1</Button>
                    <Button onClick={()=>{setPrice(price-1)}}>-1</Button> 
                    <Button onClick={()=>{setPrice(price+0.10)}}>+0.10</Button>
                    <Button onClick={()=>{setPrice(price-0.10)}}>-0.10</Button> 
                </Container>
            </Container>
        </React.Fragment>
    )
}
"use client";

import * as React from 'react';
import inventory from '../../../public/inventory.json';
import { Container, Typography, Box } from '@mui/material';
import { useParams } from 'next/navigation';
import ProductModifierButton, {ModifierType} from '@/components/productModifierButton';

export default function ItemPage() {
    const { itemId } = useParams();
    const productId = (itemId as string).split("-")[1];
    const product = inventory.find(p => p.id === Number(productId));

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
                            Current Quantity: {product?.quantity}
                        </Typography>

                        <ProductModifierButton id={Number(product?.id)} type={ModifierType.Increment} />
                        <ProductModifierButton id={Number(product?.id)} type={ModifierType.Decrement} />
                    </Container>
                </Container>
        </React.Fragment>
    )
}
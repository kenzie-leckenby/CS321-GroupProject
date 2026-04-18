"use client";

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export enum ModifierType {
    Increment,
    Decrement
}

interface ButtonParams {
    id: number;     // Id of the product to modify
    type: ModifierType;     // Whether we be incrementing or decrementing
    productQuantity: number;
}

function incrementProduct(productQuantity: number) {
    productQuantity += 1;
}

function decrementProduct(productQuantity: number) {
    productQuantity -= 1;
}

export default function ProductModifierButton({ id, type, productQuantity }: ButtonParams) {
    if (type === ModifierType.Increment) {
        return (
            <IconButton onClick={() => incrementProduct(productQuantity)}>
                <AddIcon />
            </IconButton>
        );
    }
    else if (type === ModifierType.Decrement) {
        return (
            <IconButton onClick={() => decrementProduct(productQuantity)}>
                <RemoveIcon />
            </IconButton>
        );
    }
}
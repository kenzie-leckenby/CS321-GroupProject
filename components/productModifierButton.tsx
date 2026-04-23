import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ObjectId } from 'mongodb';

export enum ModifierType {
    Increment,
    Decrement
}

interface ButtonParams {
    id: string;                                   // Id of the product to modify
    type: ModifierType;                             // Whether we be incrementing or decrementing
    onUpdate?: (newQuantity: number) => void;       // Value returned to the parent for updating state
}

export default function ProductModifierButton({ id, type, onUpdate }: ButtonParams) {
    async function incrementProduct() {
        const res = await fetch(`/api/products/${id}/increment`, {
            method: 'PATCH'
        });
        if (res.ok) {
            const result = await res.json();
            onUpdate?.(result.quantity);
        }
    }

    async function decrementProduct() {
        const res = await fetch(`/api/products/${id}/decrement`, { method: 'PATCH' });
        if (res.ok) {
            const result = await res.json();
            onUpdate?.(result.quantity);
        }
    }

    if (type === ModifierType.Increment) {
        return (
            <IconButton onClick={() => incrementProduct()}>
                <AddIcon />
            </IconButton>
        );
    }
    else if (type === ModifierType.Decrement) {
        return (
            <IconButton onClick={() => decrementProduct()}>
                <RemoveIcon />
            </IconButton>
        );
    }
}
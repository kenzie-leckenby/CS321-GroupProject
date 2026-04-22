import { ObjectId } from 'mongodb';




interface setNameProductParams {
    id: ObjectId;
    newName: String;
    onUpdate?: (newName: String) => void;
}

/**
 * Makes an API call to the database and modifies the name then optionally returns the new name.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param newName - Value you want to assign to the name of that product.
 * @param onUpdate - Optional return value of the name post update.
 */
export async function setNameProduct({ id, newName, onUpdate }: setNameProductParams) {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName })
    });
    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.name);
    }
}

interface incrementProductParams {
    id: ObjectId;
    onUpdate?: (newQuantity: Number) => void;
}

/**
 * Makes an API call to the database and increments the quantity.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param onUpdate - Optional return value of the quantity post update.
 */
export async function incrementProduct({ id, onUpdate }: incrementProductParams) {
    const res = await fetch(`/api/products/${id}/increment`, {
        method: 'PATCH'
    });
    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.quantity);
    }
}



interface decrementProductParams {
    id: ObjectId;
    onUpdate?: (newQuantity: Number) => void;
}

/**
 * Makes an API call to the database and decrements the quantity.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param onUpdate - Optional return value of the quantity post update.
 */
export async function decrementProduct({ id, onUpdate }: decrementProductParams) {
    const res = await fetch(`/api/products/${id}/decrement`, {
        method: 'PATCH'
    });
    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.quantity);
    }
} 



interface setQuantityProductParams {
    id: ObjectId,
    newQuantity: Number,
    onUpdate?: (newQuantity: Number) => void;
}

/**
 * Makes an API call to the database and modifies the quantity then optionally returns the new quantity.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param newQuantity - Value you want to assign to the quantity of that product.
 * @param onUpdate - Optional return value of the quantity post update.
 */
export async function setQuantityProduct({ id, newQuantity, onUpdate }: setQuantityProductParams) {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
    });
    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.quantity);
    }
}

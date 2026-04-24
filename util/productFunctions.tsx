import { Product } from '@/lib/productInterface';

interface APIError {
    error: string;
    status: number;
}

/**
 * Makes an API call to the database and adds the new Product.
 * @param product - The object of type `Product` that you want to add to the database.
 * @returns an object, of type `Product`, which contains the new Product (with _id)
 */
export async function createProduct(product: Omit<Product, '_id'>): Promise<Product> {
    const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }


    return res.json();
}

/**
 * Makes an API call to the database and removes the desired product.
 * @param id - The ObjectId of the product you are trying to delete.
 */
export async function deleteProduct(id: string) {
    const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }
}

/**
 * Makes an API call to the database and gets the JSON information of the product at the given id value.
 * @param id - The ObjectId of the product you are trying to get.
 * @returns an object, of type `Product`, which contains the desired product's information.
 */
export async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`/api/products/${id}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    return res.json();
}

/**
 * Makes an API call to the database and gets the JSON information of every product.
 * @returns an array of objects, of type `Product`, which contains the product's information.
 */
export async function getAllProducts(): Promise<Product[]> {
    const res = await fetch(`/api/products`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    return res.json();
}

interface setNameProductParams {
    id: string;
    newName: string;
    onUpdate?: (newName: string) => void;
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

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.name);
    }
}



interface setDescriptionProduct {
    id: string;
    newDescription: string;
    onUpdate?: (newDescription: string) => void;
}

/**
 * Makes an API call to the database and modifies the description then optionally returns the new description.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param newDescription - Value you want to assign to the description of that product.
 * @param onUpdate - Optional return value of the description post update.
 */
export async function setDescriptionProduct({ id, newDescription, onUpdate }: setDescriptionProduct) {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newDescription })
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.description);
    }
}



interface setPriceProduct {
    id: string;
    newPrice: number;
    onUpdate?: (newPrice: number) => void;
}

/**
 * Makes an API call to the database and modifies the price then optionally returns the new price.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param newPrice - Value you want to assign to the price of that product.
 * @param onUpdate - Optional return value of the price post update.
 */
export async function setPriceProduct({ id, newPrice, onUpdate }: setPriceProduct) {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newPrice })
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.price);
    }
}



interface incrementProductParams {
    id: string;
    onUpdate?: (newQuantity: number) => void;
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

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.quantity);
    }
}



interface decrementProductParams {
    id: string;
    onUpdate?: (newQuantity: number) => void;
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

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.quantity);
    }
}



interface setQuantityProductParams {
    id: string,
    newQuantity: number,
    onUpdate?: (newQuantity: number) => void;
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

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.quantity);
    }
}



interface setImageUrlProduct {
    id: string;
    newImageUrl: string;
    onUpdate?: (newImageUrl: string) => void;
}

/**
 * Makes an API call to the database and modifies the imageUrl then optionally returns the new imageUrl.
 * @param id - The ObjectId of the product you are trying to modify.
 * @param newImageUrl - Value you want to assign to the imageUrl of that product.
 * @param onUpdate - Optional return value of the imageUrl post update.
 */
export async function setImageUrlProduct({ id, newImageUrl, onUpdate }: setImageUrlProduct) {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newImageUrl })
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    if (res.ok) {
        const result = await res.json();
        onUpdate?.(result.imageUrl);
    }
}

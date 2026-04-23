import { ObjectId } from 'mongodb';

export interface Product {
    _id: ObjectId;
    name: String;
    price: Number;
    quantity: Number;
    description: String;
    imageUrl: Number;
}
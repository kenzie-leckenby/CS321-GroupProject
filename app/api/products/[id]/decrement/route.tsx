import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('store');

    // Prevent going below 0
    const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
    if (!product || product.quantity <= 0) {
      return NextResponse.json({ error: 'Quantity already at 0' }, { status: 400 });
    }

    const result = await db.collection('products').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $inc: { quantity: -1 } },
      { returnDocument: 'after' } 
    );
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to decrement quantity' }, { status: 500 });
  }
}
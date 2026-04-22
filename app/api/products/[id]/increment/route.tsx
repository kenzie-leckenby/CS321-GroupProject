import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('store');
    const result = await db.collection('products').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $inc: { quantity: 1 } },
      { returnDocument: 'after' } 
    );
    return NextResponse.json({ quantity: result?.quantity });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to increment quantity' }, { status: 500 });
  }
}
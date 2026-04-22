
import ItemClientPage from './pageClient';

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
        cache: 'no-store'
    });
    const product = await res.json();

    return (
        <ItemClientPage product={product} />
    )
}
import { getProduct } from "@/util/productFunctions";
import ItemPageClient from "./pageClient";

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProduct({ id });

    return(
        <ItemPageClient product={product} />
    );
}
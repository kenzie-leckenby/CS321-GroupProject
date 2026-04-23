import { getProduct } from "@/util/productFunctions";
import ItemPageClient from "./pageClient";
import { Product } from "@/lib/productInterface";


export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return(
        <ItemPageClient id={id} />
    );
}
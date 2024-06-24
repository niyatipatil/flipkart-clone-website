import { NextRequest, NextResponse } from "next/server";
import { addOrUpdateProduct } from "@/utils/dataHandler";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const product = body;

  if (!product || !product.id) {
    return NextResponse.json(
      { error: "Product data is required and must include an id" },
      { status: 400 }
    );
  }

  const added = addOrUpdateProduct(product);

  if (added) {
    return NextResponse.json(
      { message: "Product added successfully" },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      { message: "Product count incremented successfully" },
      { status: 200 }
    );
  }
}

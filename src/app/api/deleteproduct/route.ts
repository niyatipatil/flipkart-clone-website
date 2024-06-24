import { NextResponse, NextRequest } from "next/server";
import { deleteProductById } from "@/utils/dataHandler"; // Adjust the path based on your file structure

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "Product ID required" }, { status: 400 });
  }

  const wasDeleted = deleteProductById(id);

  if (wasDeleted) {
    return NextResponse.json(
      {
        message: `Product with ID ${id} deleted`,
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        error: `Product with ID ${id} was not found`,
      },
      { status: 404 }
    );
  }
}

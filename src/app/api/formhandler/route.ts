import { NextRequest, NextResponse } from "next/server";
import { addCustomer } from "@/utils/formHandler";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const customer = body;
  if (!customer) {
    return NextResponse.json(
      { error: "Customer data is required" },
      { status: 400 }
    );
  }

  const added = addCustomer(customer);
  console.log(added);

  if (added) {
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  }
}

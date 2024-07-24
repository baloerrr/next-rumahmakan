import { hapusmenu } from "@/service/data/menu";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { idMenu } = body;

    if (!idMenu) {
      throw new Error("idMenu is required");
    }

    await hapusmenu(idMenu);

    return new NextResponse(JSON.stringify({ status: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in DELETE endpoint:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

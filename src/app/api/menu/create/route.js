import { tambahmenu } from "@/service/data/menu";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const img = formData.get("img");
    const title = formData.get("title");
    const product = formData.get("product")

    const dataMenu = { img, title, product };

    const newMenuId = await tambahmenu(dataMenu);

    let json_response = {
      status: "success",
      data: { idMenu: newMenuId, img: img.name, title: title, product: product},
    };

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

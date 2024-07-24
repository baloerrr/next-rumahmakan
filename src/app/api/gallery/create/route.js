import { tambahGallery } from "@/service/data/gallery";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const class_name = formData.get("class_name");
    const img = formData.get("img");

    const dataGallery = { class_name, img };

    const newGalleryId = await tambahGallery(dataGallery);

    let json_response = {
      status: "success",
      data: { idGallery: newGalleryId, class_name, img: img.name },
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

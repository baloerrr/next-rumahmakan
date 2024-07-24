import getDataGalleryAll from "../../../../service/data/gallery";
import { NextResponse, NextRequest} from "next/server";

export async function GET() {
  try {
    const json = await getDataGalleryAll();
    console.log("API Response:", json);

    const json_response = {
      status: "success",
      data: json,
    };

    return new NextResponse(JSON.stringify(json_response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    
  } catch (error) {
    console.error("API Error:", error);

    const error_response = {
      status: "error",
      message: error.message || "An error occurred",
    };

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

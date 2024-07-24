import ubahTentangKami from "@/service/data/tentangKami";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const idTentangKami = formData.get('idTentangKami');
    const visi = formData.get('visi');
    const misi = formData.get('misi');
    const title = formData.get('title');

    const dataTentangKami = { visi, misi, title };

    await ubahTentangKami(idTentangKami, dataTentangKami);

    return new NextResponse(JSON.stringify({ status: 'success' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in POST endpoint:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

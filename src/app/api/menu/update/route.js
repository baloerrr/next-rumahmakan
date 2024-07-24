import { ubahmenu } from '@/service/data/menu'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
      const formData = await request.formData();
      const idMenu = formData.get('idMenu');
      const img = formData.get('img');
      const title = formData.get('title');
      const product = JSON.parse(formData.get('product'));
  
      const dataMenu = { img, title, product };
  
      await ubahmenu(idMenu, dataMenu);
  
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
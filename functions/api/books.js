// functions/api/books.js

export async function onRequestGet(context) {
  try {
    // Fetch all books from the D1 database
    const { results } = await context.env.DB.prepare(
      "SELECT * FROM books ORDER BY created_at DESC"
    ).all();
    
    return Response.json(results);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    // Generate a unique ID for the book
    const id = crypto.randomUUID(); 
    
    // Insert into D1
    await context.env.DB.prepare(`
      INSERT INTO books (id, title, category, type, price, academic_period, image_url) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id, 
      data.title, 
      data.category, 
      data.type, 
      data.price, 
      data.year || data.semester, 
      data.image || null
    ).run();

    return Response.json({ success: true, id }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
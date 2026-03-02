// functions/api/books/[id].js

export async function onRequestPut(context) {
  try {
    const bookId = context.params.id;
    const data = await context.request.json();
    
    // Update the specific book in the D1 database
    const result = await context.env.DB.prepare(`
      UPDATE books 
      SET title = ?, price = ?, image_url = ?
      WHERE id = ?
    `).bind(
      data.title, 
      data.price, 
      data.image || null,
      bookId
    ).run();

    if (result.meta.changes === 0) {
      return Response.json({ error: "Book not found" }, { status: 404 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function onRequestDelete(context) {
  try {
    const bookId = context.params.id;
    
    // Delete the specific book from the D1 database
    const result = await context.env.DB.prepare(
      "DELETE FROM books WHERE id = ?"
    ).bind(bookId).run();

    if (result.meta.changes === 0) {
      return Response.json({ error: "Book not found" }, { status: 404 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
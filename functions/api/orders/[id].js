export async function onRequestPut(context) {
  try {
    const orderId = context.params.id;
    
    // Update the order status to "Processed" in the D1 database
    await context.env.DB.prepare(
      "UPDATE orders SET status = 'Processed' WHERE id = ?"
    ).bind(orderId).run();

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
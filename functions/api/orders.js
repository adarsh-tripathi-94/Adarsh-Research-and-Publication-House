// functions/api/orders.js

export async function onRequestGet(context) {
  try {
    const { results } = await context.env.DB.prepare("SELECT * FROM orders ORDER BY order_date DESC").all();
    const formattedOrders = results.map(row => ({
      id: row.id,
      customer: { name: row.customer_name, phone: row.customer_phone, email: row.customer_email, subject: row.subject_requirement, address: row.delivery_address },
      items: [{ price: row.total_amount }], 
      status: row.status,
      date: row.order_date
    }));
    return Response.json(formattedOrders);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const payload = await context.request.json();
    const { customer, items, total } = payload;
    const orderId = `ORD-${Date.now()}`;

    // Safely insert order with all possible optional fields handled
    await context.env.DB.prepare(`
      INSERT INTO orders (id, customer_name, customer_email, customer_phone, customer_whatsapp, delivery_address, landmark, district, state, pincode, payment_method, subject_requirement, total_amount)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderId, customer.name, customer.email, customer.phone, customer.whatsapp || null, customer.address,
      customer.landmark || null, customer.district, customer.state, customer.pincode, customer.paymentMethod,
      customer.subject || null, total
    ).run();

    // Insert items
    for (const item of items) {
      await context.env.DB.prepare(`
        INSERT INTO order_items (order_id, book_id, price_at_time) VALUES (?, ?, ?)
      `).bind(orderId, item.id, item.price).run();
    }

    return Response.json({ success: true, orderId }, { status: 201 });
  } catch (error) {
    // Return the EXACT database error so we can see it in the network tab if it fails again
    return Response.json({ error: error.message }, { status: 500 });
  }
}
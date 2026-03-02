// functions/api/settings.js

export async function onRequestGet(context) {
  try {
    const { results } = await context.env.DB.prepare("SELECT * FROM settings").all();
    const settings = {};
    results.forEach(row => { settings[row.key] = row.value });
    return Response.json(settings);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const { key, value } = await context.request.json();
    // Insert or update the setting
    await context.env.DB.prepare(`
      INSERT INTO settings (key, value) VALUES (?, ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value
    `).bind(key, value).run();
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
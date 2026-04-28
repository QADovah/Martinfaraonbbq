function doPost(e) {
  // 1. Accedemos a la hoja de cálculo
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // 2. Parseamos los datos que llegan desde el formulario web
  var data = JSON.parse(e.postData.contents);

  // 3. Guardamos los datos en una nueva fila [Nombre, Email, Ubicación, Teléfono]
  sheet.appendRow([data.nombre, data.email, data.ubicacion, data.telefono]);

  // 4. PREPARAMOS EL EMAIL DE BIENVENIDA
  var asunto = "Ya sos parte del Fuego \uD83D\uDD25 Bienvenido a La Logia";

  var cuerpoTexto =
    "¡Qué haces, " + data.nombre + "!\n\n" +
    "Si te llegó este mail, es porque ya sos oficialmente parte de La Logia del Humo. Nada de newsletters aburridos ni spam de promociones que no sirven para nada. Acá venimos a hablar de fuego, leña y carne deshaciéndose en la boca.\n\n" +
    "A partir de ahora, vas a ser de los primeros en enterarte cuando salgan esos cortes que no llegan a ver la luz del día porque se agotan apenas salen del ahumador.\n\n" +
    "¿Qué ganás por estar acá?\n" +
    "- Prioridad absoluta: Cuando sacamos una tanda especial de Extremos Quemados, te avisamos primero.\n" +
    "- Acceso al 'Menú Oculto': Cortes fuera de carta solo para conocedores.\n" +
    "- Beneficios Faraónicos: Descuentos y sorpresas.\n\n" +
    "Si querés ir pispeando lo que sale este finde, pasate por nuestro Instagram @martinfaraonbbq y andá preparando el apetito.\n\n" +
    "¡Nos vemos en el próximo ahumado, guerrero!\n\n" +
    "— Martín Faraón\nDonde hay humo, hay carne de verdad.";

  // 5. ENVIAMOS EL EMAIL
  try {
    GmailApp.sendEmail(data.email, asunto, cuerpoTexto, {
      name: "Martín Faraón BBQ", // Así aparece como remitente
      from: "hola@martinfaraonbbq.site" // Obligamos a usar tu alias
    });
  } catch (error) {
    // Si falla el envío del mail por alguna razón, no rompemos el proceso y devolvemos éxito igual
    console.log("Fallo al enviar email a " + data.email + ": " + error);
  }

  // 6. Devolvemos respuesta de éxito a la página web
  return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}


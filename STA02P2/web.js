const btn     = document.getElementById("search");
const result  = document.getElementById("result");
OMDB_KEY = "70c648b";

btn.addEventListener("click", async () => {
  const title = document.getElementById("title").value.trim();
  if (!title) return alert("Escribe un título");

  const url = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${encodeURIComponent(title)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)

    if (data.Response === "False") {
      result.textContent = `❌ ${data.Error}`;
      return;
    }

    result.innerHTML = `
      <p><strong>Director:</strong> ${data.Director}</p>
      <p><strong>Año:</strong> ${data.Year}</p>
    `;
  } catch (err) {
    console.error(err);
    result.textContent = "Error al conectar con OMDb";
  }
});

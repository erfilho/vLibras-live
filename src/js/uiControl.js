const form = document.getElementById("form");
const input = document.getElementById("form-input");
const button = document.getElementById("form-button");
let loading = false;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value;

  if (!loading && text) {
    loading = true;
    button.innerText = "Carregando...";
    button.disabled = true;
    try {
      await player.translate(text);
    } catch (err) {
      console.error(err);
    } finally {
      loading = false;
      button.innerText = "Enviar";
      button.disabled = false;
    }
  }
});

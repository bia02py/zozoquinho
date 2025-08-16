switch (escolha.tipo) {
  case "texto":
    container.innerText = escolha.conteudo;
    break;

  case "gif":
    const gif = document.createElement("img");
    gif.src = escolha.conteudo;
    gif.alt = escolha.descricao || "Gif fofo";
    gif.classList.add("surpresa-gif");
    container.appendChild(gif);
    break;

  case "imagem":
    const img = document.createElement("img");
    img.src = escolha.conteudo;
    img.alt = escolha.descricao || "Foto surpresa";
    img.classList.add("surpresa-gif");
    container.appendChild(img);
    break;

  case "audio":
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = escolha.conteudo;
    container.appendChild(audio);
    audio.play();
    break;

  case "video":
    const video = document.createElement("video");
    video.src = escolha.conteudo;
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = "100%";
    video.style.borderRadius = "15px";
    container.appendChild(video);
    break;
}

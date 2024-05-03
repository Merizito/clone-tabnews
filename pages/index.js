function Home() {
  return (
    <>
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
      <div class="title">
        <h1>
          Clone do Tab-news está em construção e deployado pela{" "}
          <a href="https://vercel.com" target="newtab">
            Vercel
          </a>
        </h1>
      </div>

      <dotlottie-player src="https://lottie.host/e4da4fb5-853b-4ca5-ace0-4503264f27da/uWdggEe6Vj.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
    </>
  );
}

function teste() {
  console.log('identação errada');
}

export default Home;

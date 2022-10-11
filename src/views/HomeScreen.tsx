const HomeScreen = () => {
  //state
  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

  //react

  //render
  return (
    <main>
      <section className="border-2 border-red-700 h-2/3">{userInfo !== null && <p>Bonjour {userInfo.pseudo}, comment ça va bien ? </p>}</section>
      <section className="w-screen bottom-8 flex flex-col gap-8 h-1/3">
        <a className="shutter"></a>
        <button className="btn btn-ar">
          <i className="fa-solid fa-child-reaching"></i> Jouons
        </button>
      </section>
    </main>
  );
};

export default HomeScreen;

function Home() {
  return (
    <>
      <div className="container">
        <img
          className="imagem"
          src="https://pro-leandro-olczyk.s3.us-east-1.amazonaws.com/public-files/imagens/em-construcao/construction.png"
          alt="Página em construção"
        />
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
        }

        .imagem {
          width: 30%;
          height: auto;
        }
      `}</style>
    </>
  );
}

export default Home;

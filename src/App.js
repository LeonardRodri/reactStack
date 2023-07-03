import React from "react";
import Post from "./Post";
import Header from "./Header";

const tituloZeroUm = 'Titulo da noticia 01:'

function App(){
  return (
    <>
      <Header title="Blog Leonardo">
        <h1>Posts da semana</h1>
      </Header>
      <hr />
      <Post 
        likes={20}
        post={{
          title: "Titulo numero 1",
          subtitle: "Subtitulo da noticia 01",
      }}/>   
      <Post 
        likes={20}
        post={{
          title: "Titulo numero 1",
          subtitle: "Subtitulo da noticia 01",
        }}/>   
      <Post 
        likes={20}
        post={{
          title: "Titulo numero 1",
          subtitle: "Subtitulo da noticia 01",
      }}/>   
      <Post 
      likes={20}
      post={{
        title: "Titulo numero 1",
        subtitle: "Subtitulo da noticia 01",
      }}/>   
    </>
  );
}

export default App;

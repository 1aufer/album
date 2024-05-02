import React from "react";
import "../styles/albuns.css"

import { Card, Button } from "react-bootstrap";

export default function Albums() {

    const albums = [
        {
            descricao: "Nirvana",
            titulo: "Nevermind.",
            url: "https://m.media-amazon.com/images/I/612pfd-N4SL.__AC_SX300_SY300_QL70_ML2_.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/2guirTSEqLizK7j9i1MTTZ")
            }
        },
        {
            descricao: "Pearl Jam",
            titulo: "Ten",
            url: "https://m.media-amazon.com/images/I/718fwGUYf4L._AC_SX679_.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/5B4PYA7wNN4WdEXdIJu58a")
            }
        },
        {
            descricao: "Raul Seixas",
            titulo: "Krig-ha, Bandolo!",
            url: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/75/KrigHaBandolo.jpg/220px-KrigHaBandolo.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/2xRddGxRH0KdDWLNE5b0iu")
            }
        },
        {
            descricao: "Alice in Chains",
            titulo: "Jar of flies",
            url: "https://m.media-amazon.com/images/I/91QlDsysIEL.__AC_SY300_SX300_QL70_ML2_.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/4FCoFSNIFhK36holxHWCnc")
            }
        },
        {
            descricao: "Alice in Chains",
            titulo: "Dirt",
            url: "https://m.media-amazon.com/images/I/81WJ9FwgOOL.__AC_SX300_SY300_QL70_ML2_.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/2VNui22dikp6XEMdK8j8Xs")
            }
        },  
        {
            descricao: "Alice in Chains",
            titulo: "MTV unplugged",
            url: "https://images-americanas.b2w.io/produtos/3219104445/imagens/dvd-alice-in-chains-mtv-unplugged/3219104470_1_xlarge.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/5PdgIAHzwDvTZRjIGSQGtN")
            }
        },
        {
            descricao: "Nirvana",
            titulo: "In utero",
            url: "https://m.media-amazon.com/images/I/71eLqPemDvS._AC_SX679_.jpg",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/7wOOA7l306K8HfBKfPoafr")
            }
        },
        {
            descricao: "Avicii",
            titulo: "Stories",
            url: "https://cdn.mercidisco.com.br/image/cache/data/avicci-800x800.png",
            onclick: function(){
                window.open("https://open.spotify.com/intl-pt/album/7dqftJ3kas6D0VAdmt3k3V")
            }
        },
    ]

    return (
        <div className="albums">
            {albums.map((album) => {
                return (
                    <Card className="album">
                    <Card.Img variant="top" src={album.url} />
                    <Card.Body>
                        <Card.Title>{album.titulo}</Card.Title>
                        <Card.Text>{album.descricao}</Card.Text>
                        <Button variant="primary" onClick={album.onclick}>Escutar</Button>
                    </Card.Body>
                </Card>
                );
            })}
          
        </div>
    );

};



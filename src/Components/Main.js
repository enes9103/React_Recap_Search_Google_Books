import React, { useState }  from 'react';
import Card from "./Card";
import axios from "axios";
import title from "./images/bg2.png"

const Main=()=>{
    const [search, setSearch] = useState("")
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Kitaplık kurmak, tapınak yapmak kadar kutsaldır.</h1>
                    <h2> <i>Victor Hugo</i> </h2>
                </div>
                <div className="row2">
                    <h2>Kitap Bul</h2>
                    <div className="search">
                        <input type="text" placeholder="Kitap İsmi Giriniz..." value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src={title} alt="profile"/>
                </div>
            </div>

            <div className="container">
                <Card book={bookData}/>
            </div>
        </>
    )
}
export default Main;
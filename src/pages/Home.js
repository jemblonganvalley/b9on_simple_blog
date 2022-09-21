import axios from "axios";
import Navbar from "../components/Navbar";
const app = document.getElementById('app');

export default function Home(){

    // ubah document title
    document.title = "Home Page";

    axios.get('http://localhost:3000/blogs')
    .then(res => {
        app.innerHTML += Navbar()
        res.data.forEach((e)=>{
            app.innerHTML += `
                <div class="flex flex-col gap-4 max-w-[900px] bg-white shadow-md p-6 my-4 mx-auto">
                    <h1>${e.judul}</h1>
                    <small>${e.author}</small>
                    <img src="${e.img}" alt="${e.judul}" class="w-full h-[280px] object-cover"/>
                    <p>${e.content}</p>
                </div>
            `
        })
    })
}
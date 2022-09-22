import axios from "axios";
import Navbar from "../components/Navbar";
const app = document.getElementById('app');


function CardWrapper(data){
    let col = []
    data.forEach((e)=>{
        col.push(`
        <div class="flex flex-col gap-4 max-w-[700px] bg-white shadow-md p-6 my-4 rounded-md">
            <h1 class="text-4xl">${e.judul}</h1>
            <small class="text-slate-500">${e.author} / ${e.createdAt}</small>
            <img src="${e.img}" alt="${e.judul}" class="w-full h-[280px] object-cover"/>
            <p>${e.content}</p>
        </div>
        `)
    })
    return col.join('');
}

export default function Home(){

    // ubah document title
    document.title = "Home Page";

    axios.get('http://localhost:3000/blogs?_sort=id&_order=desc')
    .then(res => {
        app.innerHTML += Navbar()
        app.innerHTML += `
            <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
                ${CardWrapper(res.data)}
            </div>
        `
    })
}
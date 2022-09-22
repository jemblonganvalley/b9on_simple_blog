
window.handleLogout = ()=>{
    // clear localStorage data
    localStorage.clear();

    // kembalikan user ke login page
    window.location.href = '/login'
}

window.showMenu = ()=>{
    console.info("clicked")
    let m_menu = document.getElementById("m_menu")
    if(m_menu.style.display == "none"){
        m_menu.style.display = "flex"
        return
    }
    m_menu.style.display = "none"
}

export default function Navbar(){

    let userData = localStorage.getItem('userData');

    return `
    <nav class="w-full h-20 flex bg-orange-500">
        <div class="w-full max-w-[1440px] flex items-center justify-start px-4 mx-auto">

            <img src="logo.svg" alt="logo kami" class="h-8 mr-2"  />

            <h1 class="text-white text-4xl font-light select-none cursor-pointer">
                Jvalley Blogs
            </h1> 

            <button class="material-symbols-outlined text-white ml-auto md:hidden" id="menu_icon" onclick="showMenu()">
                menu
            </button>

            <div class="hidden bg-white flex-col w-[180px] absolute top-20 right-2 shadow-xl" id="m_menu">
                <a href="/" class="flex items-center px-3 h-10">Home</a>
                <a href="/" class="flex items-center px-3 h-10">Home</a>
                <a href="/" class="flex items-center px-3 h-10">Home</a>
                <a href="/" class="flex items-center px-3 h-10">Home</a>
            </div>
            
           ${ userData ? `
            <menu class="hidden gap-4 text-white font-light ml-auto items-center md:flex" id="menu">
                <a href="/" >Home</a>
                <a href="/addBlog" >Add Blog</a>
                <a onclick="handleLogout()" class="cursor-pointer">Logout</a>
                <span class="px-4 py-2 bg-orange-600 rounded-full">
                    ${ JSON.parse(userData).user.email }
                </span>
            </menu>` : `
            <menu class="hidden gap-4 text-white font-light ml-auto md:flex" id="menu">
                <a href="/" >Home</a>
                <a href="/register" >Register</a>
                <a href="/login" >Login</a>
            </menu>
            ` }

        </div>
    </nav>
    `
}
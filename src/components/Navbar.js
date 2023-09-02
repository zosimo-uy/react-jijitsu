import logo from '../images/logo192.png'

export default function Navbar(props){
    return (
        <nav
            className={props.darkMode ? "dark" : ""}
        >
           <img className="nav--logo_icon"
           src={logo}
           alt="React Logo">
           </img>
        <h3 className='nav--logo_text'>React Facts</h3>

        <div 
        className='toggler'
        title={props.darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
        >
            <p 
            className='toggler--light'
            style={{textDecoration: props.darkMode ? "none" : "underline",}}
            >
            Light
            </p>
            <div
                className='toggler--slider'
                onClick={props.toggleDarkMode}
            >
                <div className='toggler--slider--circle'></div>
            </div>
            <p className='toggler--dark'
            style={{textDecoration: props.darkMode ? "underline" : "none",}}>
            Dark
            </p>
        </div>
        </nav>
    )
}
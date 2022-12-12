import logo from "../assets/logo.png"
import "../styles/Sidebar.css"

const menus = [
    {
        title : "My audible",
        children : [
            {
                title : "Library",
                icon : "fa fa-home",
                current : true,
            },
            {
                title : "My favorites",
                icon : "fa fa-heart",
                current : false,

            }
        ]
    },
    {
        title : "My Account",
        children : [
            {
                title : "Profile",
                icon : "fa fa-user",
                current : false,

            }
        ]
    },
    {
        title : "Privacy",
        children : [
            {
                title : "Privacy policy",
                icon : "fa fa-gear",
                current : false,


            }
        ]
    }
]
function Sidebar(){
    return(
        <div className="p-2">
            <div className="logo">
                <img src={logo} />
            </div>
            <div>
                {
                    menus.map((m) => (
                        <div className="menu">
                            <h3>{m.title}</h3>
                            {
                                m.children.map((item) => (
                                    <div className={item.current ? 'bg-danger menu-item' : 'menu-item'}>
                                        <i className={item.icon}></i>
                                        <div className="text-gray">{item.title}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

                {/* <div className="menu">
                    <h3>Account</h3>
                    <div className="menu-item">
                        <i className="fa fa-user"></i>
                        <div>My profile</div>
                    </div>

                    <div className="menu-item">
                        <i className="fa fa-gear"></i>
                        <div>settings</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Sidebar
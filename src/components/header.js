import "./header.css"

export default function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className="userImg">
                <a href='/'>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"></img>
                </a>
            </div>
        </header>
    )
}
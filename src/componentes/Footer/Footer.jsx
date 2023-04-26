import"./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.instagram.com/esteban_candioti/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://github.com/EstebanCandioti">
                <img src="/img/github.png" alt="Github" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Esteban Orfeo Candioti</strong>
    </footer>
}

export default Footer
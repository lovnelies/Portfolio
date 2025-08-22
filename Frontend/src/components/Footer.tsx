const Footer = () => { 
    return (
        <footer style={{ backgroundColor: "#fdaeae" }}> 
            <div className="text-center flex justify-center items-center space-x-4 text-lg">
                <p className="text-center text-white py-4"> © 2025 Portfolio ( TᗜT)b</p>
                <a 
                    href='https://www.linkedin.com/in/yulissarivasm/' 
                    className='text-white text-center block py-2' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Linkedin
                </a>
                <a 
                    href='https://github.com/lovnelies' 
                    className='text-white text-center block py-2' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </footer>
    );
}

export default Footer;

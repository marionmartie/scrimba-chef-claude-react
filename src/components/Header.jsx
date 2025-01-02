import logo from '../assets/chef-claude-icon.png'

const Header = () => {
    return (
        <header>
            <nav className='flex justify-center items-center gap-4 p-4 shadow-md'>
                <img src={logo} alt="chef icon" className='w-11' />
                <h1 className='text-2xl'>
                    Chef Claude
                </h1>
            </nav>
        </header>
    )
}

export default Header
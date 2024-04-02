export default function PageTitle() {
    return (
        <nav className='page-title-nav'>
            <div className='breadcrumbs'>
                <a href="#">All Games</a>
                &nbsp;&gt;&nbsp;
                <a href="#">RPG Games</a>
            </div>
            <header className='game-title'>
                <h1>Dragon's Dogma 2</h1>
                <a href="#" className="btn-blue">
                    <span>Community Hub</span>
                </a>
            </header>
        </nav>
    )
}
interface HeaderProps {
    title: string
}

export function Header(genre: HeaderProps) {
    return(
        <header>
            <span className="category">Categoria:<span> {genre.title} </span></span>
        </header>
    )
}

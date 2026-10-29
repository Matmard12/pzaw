import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

interface MovieProps {
  id: number;
  title: string;
  year: number;
  img: string;
  rating: number;
}

interface BookProps {
  id: number;
  title: string;
  year: number;
  img: string;
  pages: number;
}

interface AlbumProps {
  id: number;
  title: string;
  year: number;
  img: string;
  band_name: string;
  gatunek: string;
  songs: { title: string; duration: string }[];
}

const moviesList: MovieProps[] = [
  { id: 4, title: "The Shawshank Redemption", year: 1994, img: "./shawshank.jpg", rating: 10 },
  { id: 1, title: "Pionek", year: 2014, img: "./pionek.jpg", rating: 1 },
  { id: 2, title: "Queen's gambit", year: 2020, img: "./gambit.jpg", rating: 5 },
  { id: 3, title: "The Coldest Game", year: 2019, img: "./gra.jpg", rating: 10 }
];

const booksList: BookProps[] = [
  { id: 1, title: "kamienie na szaniec", year: 1943, pages: 332, img: "./kamienie.jpg" },
  { id: 2, title: "zbrodnia i kara", year: 1866, pages: 310, img: "./zbrodnia.jpg" },
  { id: 3, title: "Lalka", year: 1889, pages: 260, img: "./lalka.jpg" },
  { id: 4, title: "Dziady cz II", year: 1823, pages: 364, img: "./dziady.jpg" }
];

const albumsList: AlbumProps[] = [
  {
    id: 1,
    title: "The massacre",
    band_name: "50cent",
    gatunek: "rap",
    year: 2003,
    img: "./50.jpg",
    songs: [
      { title: "In da club", duration: "4:00" },
      { title: "Money", duration: "3:21" },
      { title: "Intro", duration: "0:41" },
      { title: "In My Hood", duration: "3:51" },
      { title: "This Is 50", duration: "3:04" },
      { title: "I'm Supposed to Die Tonight", duration: "3:51" },
      { title: "Piggy Bank", duration: "4:15" },
      { title: "Gatman and Robin (feat. Eminem)", duration: "3:46" },
      { title: "Candy Shop (feat. Olivia)", duration: "3:29" },
      { title: "Outta Control", duration: "3:21" },
      { title: "Get In My Car", duration: "4:05" },
      { title: "Ski Mask", duration: "3:38" },
      { title: "A Baltimore Love Story", duration: "4:17" },
      { title: "Ryder Music", duration: "3:51" },
      { title: "Disco Inferno", duration: "3:34" },
      { title: "Just a Lil Bit", duration: "3:57" },
      { title: "Gun Runner (feat. Tony Yayo)", duration: "1:55" },
      { title: "My Toy Soldier (feat. Tony Yayo)", duration: "3:44" },
      { title: "Position of Power", duration: "3:12" },
      { title: "Build You Up (feat. Jamie Foxx)", duration: "2:55" },
      { title: "God Gave Me Style", duration: "3:01" },
      { title: "So Amazing (feat. Olivia)", duration: "3:16" },
      { title: "I Don't Need'Em", duration: "3:20" }
    ]
  },
  {
    id: 2,
    title: "Ready to die",
    band_name: "Biggie",
    gatunek: "Rap",
    year: 1994,
    img: "./biggie.jpg",
    songs: [
      { title: "Juicy", duration: "5:46" },
      { title: "Big Poppa", duration: "2:34" },
      { title: "Intro", duration: "3:24" },
      { title: "Things Done Changed", duration: "3:58" },
      { title: "Gimme the Loot", duration: "5:04" },
      { title: "Machine Gun Funk", duration: "4:17" },
      { title: "Warning", duration: "3:40" },
      { title: "Ready to Die", duration: "4:24" },
      { title: "One More Chance", duration: "4:43" },
      { title: "Fuck Me (Interlude)", duration: "1:31" },
      { title: "The What (feat. Method Man)", duration: "3:57" },
      { title: "Juicy", duration: "5:02" },
      { title: "Everyday Struggle", duration: "5:19" },
      { title: "Me & My Bitch", duration: "4:00" },
      { title: "Big Poppa", duration: "4:13" },
      { title: "Respect", duration: "5:21" },
      { title: "Friend of Mine", duration: "3:28" },
      { title: "Unbelievable", duration: "3:43" },
      { title: "Suicidal Thoughts", duration: "3:18" }
    ]
  },
  {
    id: 3,
    title: "przyklad",
    band_name: "przyklad",
    gatunek: "Rap",
    year: 2024,
    img: "./.jpg",
    songs: []
  }
];

let moviesSortedByTitle = moviesList.toSorted((a,b) => a.title.localeCompare(b.title))
let booksSortedByTitle = booksList.toSorted((a,b) => a.title.localeCompare(b.title))
let albumsSortedByTitle = albumsList.toSorted((a,b) => a.title.localeCompare(b.title))

let moviesAfter2010 = moviesList.filter(movie => movie.year > 2010)
let booksSortedByYear = booksList.toSorted((a,b) => b.year - a.year)

let albumWithMostSongs = albumsList[0]
albumsList.forEach(album => {
  if (album.songs.length > albumWithMostSongs.songs.length) {
    albumWithMostSongs = album;
  }
})

function Section({title, children}: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <h2 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: "pointer", userSelect: "none" }}
        className="border-bottom pb-2"
      >
        {isOpen ? "⏷" : "⏵"} {title}
      </h2>
      {isOpen && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {children}
        </div>
      )}
    </div>
  );
}

function Movies({title, year, img, rating}: MovieProps){
  return (
    <div
      className="col"
      onClick={() => {
        console.log("wybrano film: " + title);
      }}
    >
      <div className="card h-100">
        <img
          src={img}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Rok: {year}</p>
          <button
            className="card-text"
            onClick={(event) => {
              console.log("Pokaż szczegóły dla " + title);
              event.stopPropagation();
            }}
          >
            Pokaż szczegóły
          </button><br></br>
          {rating >= 8 && <span className="card-text">polecany</span>}
        </div>
      </div>
    </div>
  );
}

function Books({ title, year, img, pages }: BookProps) {
    return (
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title"><b>{title}</b></h5>
            <p className="card-text">Rok: {year}</p>
            <p className="card-text">Strony: {pages}</p>
            {year < 2000 && <span className="card-text">Klasyka</span>}
          </div>
        </div>
      </div>
    );
}

function handleSongClick(title: string, album: string) {
  console.log("wybrano utwor: " + title + " z " + album);
}

function Album({ title, year, img, band_name, gatunek, songs }: AlbumProps) {
    return (
    <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top"/>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-text">{year}</p>
        <p className="card-text">{band_name}</p>
        <p className="card-text">{gatunek}</p>

        <div>
          <p><b>Piosenki:</b></p>
          {songs.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Song Title</th>
                    <th className="text-end">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {songs.map((song, index) => (
                    <tr key={index}
                      onClick={() => handleSongClick(song.title, title)}
                    >
                      <td>{index + 1}</td>
                      <td>{song.title}</td>
                      <td className="text-end">{song.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ):(
            <div className="alert alert-warning" role="alert">Brak utworów</div>
          )}
        </div>
      </div>
    </div>
    </div>
    );
}

function App() {

  const [szukanyFilm, searchMovie] = useState("");
  const [szukanyKsiążka, searchBook] = useState("");
  const [szukanyAlbum, searchAlbum] = useState("");

  const filtrowanie = moviesSortedByTitle.filter(movie =>
    movie.title.toLowerCase().includes(szukanyFilm.toLowerCase())
  );
  return (
    <div className="container">
      <input
      type="text"
      className="form-control"
      placeholder="Wpisz tytuł"
      id="movie-search"
      onChange={(event)=>{
        console.log(event.target.value);
        searchMovie(event.target.value);
      }}
    />

    <p>{szukanyFilm}</p>
      <Section title="Filmy alfabetycznie">
        {filtrowanie.length > 0 ? (
          filtrowanie.map((movie) => (
            <Movies 
              key={movie.id} 
              id={movie.id} 
              title={movie.title} 
              year={movie.year} 
              img={movie.img} 
              rating={movie.rating} 
            />
          ))
        ):(
          <p>Nie znaleziono filmów</p>
        )}
      </Section>
    <input
      type="text"
      className="form-control"
      placeholder="Wpisz tytuł"
      id="book-search"
      onChange={(event)=>{
        console.log(event.target.value);
        searchBook(event.target.value);
      }}
    />

    <p>{szukanyKsiążka}</p>
      <Section title="Książki alfabetycznie">
        {booksSortedByTitle.map((book) => (
          <Books 
            key={book.id} 
            id={book.id} 
            title={book.title} 
            year={book.year} 
            pages={book.pages} 
            img={book.img} 
          />
        ))}
      </Section>

    <input
      type="text"
      className="form-control"
      placeholder="Wpisz tytuł"
      id="album-search"
      onChange={(event)=>{
        console.log(event.target.value);
        searchAlbum(event.target.value);
      }}
    />
    <p>{szukanyAlbum}</p>

      <Section title="Muzyka">
        {albumsSortedByTitle.map((album) => (
          <Album 
            key={album.id}
            id={album.id}
            title={album.title} 
            band_name={album.band_name} 
            gatunek={album.gatunek} 
            year={album.year} 
            img={album.img} 
            songs={album.songs} 
          />
        ))}
      </Section>

      <Section title="Filmy po 2010 roku">
        {moviesAfter2010.map((movie) => (
          <Movies 
            key={movie.id} 
            id={movie.id} 
            title={movie.title} 
            year={movie.year} 
            img={movie.img} 
            rating={movie.rating} 
          />
        ))}
      </Section>

      <Section title="Książki posortowane po roku">
        {booksSortedByYear.map((book) => (
          <Books 
            key={book.id} 
            id={book.id} 
            title={book.title} 
            year={book.year} 
            pages={book.pages} 
            img={book.img} 
          />
        ))}
      </Section>
      
      <Section title="Album z największą liczbą utworów">
        <Album{...albumWithMostSongs}/>
      </Section>
    </div>
  );
}

export default App;
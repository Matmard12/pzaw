import './App.css'

interface props{
  id?:number;
  title?:string;
  year?:number;
  img?:string;
  band_name?:string;
  gatunek?:string;
  pages?:number;
  songs?: {title: string; duration: string}[];
}

const moviesList: props[] = [
  { id: 1, title: "Pionek", year: 2014, img: "./pionek.jpg" },
  { id: 2, title: "Queen's gambit", year: 2020, img: "./gambit.jpg" },
  { id: 3, title: "The Coldest Game", year: 2019, img: "./gra.jpg" }
];

const booksList: props[] = [
  { id: 1, title: "kamienie na szaniec", year: 1943, pages: 332, img: "./kamienie.jpg" },
  { id: 2, title: "zbrodnia i kara", year: 1866, pages: 310, img: "./zbrodnia.jpg" },
  { id: 3, title: "Lalka", year: 1889, pages: 260, img: "./lalka.jpg" }
];
const albumsList: props[] = [
  {
    id: 1,
    title: "The massacre",
    band_name: "50cent",
    gatunek: "rap",
    year: 2003,
    img: "./50.jpg",
    songs: [
      { title: "In da club", duration: "4:00" },
      { title: "Money", duration: "3:21" }
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
      { title: "Big Poppa", duration: "2:34" }
    ]
  }
];

function Movies({title, year, img}:props){
    return(
      <div className='film'>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    );
}
function Books({ title, year, img, pages }: props) {
    return (
      <div className='film'>
        <img src={img} className='img'/>
        <p><b>{title}</b></p>
        <p>Rok: {year}</p>
        <p>Strony: {pages}</p>
      </div>
    );
}

function Album({ title, year, img, band_name,gatunek,songs}: props) {
    return (
      <div className='film'>
        <img src={img} className='img'/>
        <p><b>{title}</b></p>
        <p>{band_name}</p>
        <p>gatunek: {gatunek}</p>
        <p>Rok: {year}</p>
        <div>
          <p><b>Piosenki:</b></p>
          <ul>
            {songs?.map((song, index) => (
              <li key={index}>{song.title} ({song.duration})</li>
            ))}
          </ul>
        </div>
      </div>
    );
}
function App() {
  return (
    <div>
      <h1>Filmy</h1>
      <div className='filmy'>
        {moviesList.map((movie) => (
          <Movies 
            key={movie.id} 
            title={movie.title} 
            year={movie.year} 
            img={movie.img} 
          />
        ))}
      </div>

      <h1>Książki</h1>
      <div className='filmy'>
        {booksList.map((book) => (
          <Books 
            key={book.id} 
            title={book.title} 
            year={book.year} 
            pages={book.pages} 
            img={book.img} 
          />
        ))}
      </div>

      <h1>Muzyka</h1>
      <div className='filmy'>
        {albumsList.map((album) => (
          <Album 
            key={album.id}
            title={album.title} 
            band_name={album.band_name} 
            gatunek={album.gatunek} 
            year={album.year} 
            img={album.img} 
            songs={album.songs} 
          />
        ))}
      </div>
    </div>
  );
}
export default App
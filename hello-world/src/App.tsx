import { useState } from 'react';


function ListaZadan() {
  const [zadania, setZadania] = useState([
    { id: 1, tytul: 'Posprzątać kuwety', done: true },
    { id: 2, tytul: 'pościelić łóźko', done: false }
  ]);

  const [nastepneId, setNastepneId] = useState(4);
  const [tytulNowegoZadania, setTytulNowegoZadania] = useState('');
  const [typSortowania, typsortowania] = useState('oryginalne');
  const [filtr, setFiltr] = useState('wszystkie');


  const przełączZadanie = (id: number) => {
    setZadania(
      zadania.map((zadanie) =>
        zadanie.id === id ? { ...zadanie, done: !zadanie.done } : zadanie
      )
    );
  };

  const przefiltrowaneZadania = zadania.filter((zadanie) => {
    if (filtr === 'zrobione') return zadanie.done;
    if (filtr === 'niezrobione') return !zadanie.done;
    return true;
  });

  const dodajZadanie = () => {
    setZadania([...zadania, { id: nastepneId, tytul: tytulNowegoZadania, done: false }
    ]);
    setNastepneId(nastepneId + 1);
    setTytulNowegoZadania('');
  };


  const posortowaneZadania = [...przefiltrowaneZadania].sort((a, b) => {
    if (typSortowania === 'alfabetycznie') {
      return a.tytul.localeCompare(b.tytul);
    }
    if (typSortowania === 'stan') {
      return Number(a.done) - Number(b.done);
    }
    return 0;
  });

  const liczbaNiewykonanych = zadania.filter((zadanie) => !zadanie.done).length;

  return (
    <div>
      <h2>LISTA</h2>
      <p><b>Liczba niewykonanych: {liczbaNiewykonanych}</b></p>
      
      <div>
        <input
          type="text"
          value={tytulNowegoZadania}
          onChange={(event) => setTytulNowegoZadania(event.target.value)}
          placeholder="Nowe zadanie"
        />
        <button onClick={dodajZadanie}>+</button>
      </div>
      <div>
        <span>Sortowanie: </span>
        <button onClick={() => typsortowania('oryginalne')}>Oryginalne</button>
        <button onClick={() => typsortowania('alfabetycznie')}>Alfabetycznie</button>
        <button onClick={() => typsortowania('stan')}>Wg stanu</button>
      </div>
      <div>
        <span>Filtry: </span>
        <button onClick={() => setFiltr('wszystkie')}>Wszystkie</button>
        <button onClick={() => setFiltr('zrobione')}>Wykonane</button>
        <button onClick={() => setFiltr('niezrobione')}>Niewykonane</button>


      </div>

      

      <ul>
        {posortowaneZadania.map((zadanie) => (
          <li key={zadanie.id}>
            <label>
              <input
                type="checkbox"
                checked={zadanie.done}
                onChange={() => przełączZadanie(zadanie.id)}
              />
              <span>
                {zadanie.tytul}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaZadan;
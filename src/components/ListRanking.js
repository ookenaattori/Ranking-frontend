import React, { useState, useEffect } from 'react';
// Material-table voi ladata npm kirjastosta, kätevä taulukko työkalu
import MaterialTable from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
import AddRanking from './AddRanking';

function ListRanking() {

    const [ranking, SetRanking] = useState([]);

    useEffect(() => fetchData(), []);


    // Haetaan data json muodossa apista
    // Api on herokussa joten kestää aina hetki ennekuin data haetaan jos sivu on käyttämätön
    const fetchData = () => {
        fetch('https://seppocup-ranking.herokuapp.com/joukkueet')
            .then(response => response.json())
            .then(data => SetRanking(data))
    }

    // Poista joukkue
    const deleteRanking = (row) => {
        console.log(row)
        if (window.confirm('Confirm delete rank?')) {
            fetch('https://seppocup-ranking.herokuapp.com/joukkue/' + (row), { method: 'DELETE' })
                .then(res => fetchData())
                .catch(err => console.error(err))

        }
    }

    // CRUD toiminnot eivät toimi, "Cross-orign request blocked", yritin säätää tätä back-endin puolella, mutten saanut toimimaan
    // Tallenna uusi joukkue
    const saveRanking = (ranking) => {
        fetch('https://seppocup-ranking.herokuapp.com/joukkueet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ranking)
        })
            .then(res => fetchData())
            .catch(err => console.error(err))
    }

    // Laitetaan apista haettu data riveihin, ja lisätään se myöhemmin taulukkoon
    const columns = [
        { title: 'Joukkue', field: 'nimi' },
        { title: 'Pisteet', field: 'pisteet' },
        { title: 'Voitot', field: 'voitot' },
        { title: 'Tappiot', field: 'haviot' },
        { title: 'Maalit', field: 'maalit' },
        { title: 'Ottelut', field: 'ottelut' },
        {
            sorting: false,
            field: 'id',
            render: row => <DeleteIcon cursor="pointer" onClick={() => deleteRanking(row.id)}>delete</DeleteIcon>
        },
    ];

    return (

        <div>

            <MaterialTable
                title="Ranking"
                columns={columns}
                data={ranking}
            />
            <p>Lisää joukkue</p>
            <AddRanking saveRanking={saveRanking} />

        </div>
    );

}

export default ListRanking;
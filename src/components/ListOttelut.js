import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

function ListRanking() {

    const [ottelut, SetOttelut] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://seppocup-ranking.herokuapp.com/ottelutapi')
        .then(response => response.json())
        .then(data => SetOttelut(data))
        console.log(SetOttelut)
    }



    const columns = [
        { title: 'Koti', field: 'joukkue1'},
        {title: 'Vieras', field: 'joukkue2'},
        {title: 'Maalit koti', field: 'maalit1'},
        {title: 'Maalit vieras', field: 'maalit2'},
        {title: 'Pisteet koti', field: 'pisteet1'},
        {title: 'Pisteet vieras', field: 'pisteet2'},
        {title: 'JA', field: 'ja'}
    ];

    return (

        <div>
           
            <MaterialTable
            title="Ottelut"
            columns={columns}
            data={ottelut}
            />

        </div>
    );

}

export default ListRanking;
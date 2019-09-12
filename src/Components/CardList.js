import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';



function CardList() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=JOKttsNDn4qO47RXwsgVP5QcPNAiX5Ub51HrBcgd&date=2012-03-14')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [])
    return (
        <div className='cards'>
            {/* Examine naming conventions between here and card */}
            <Card title={data.title}
                date={data.date}
                img={data.url}
                explanation={data.explanation} />

        </div>
    )
}
export default CardList;
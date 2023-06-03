import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Noodle() {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        // Retrieve items from the database
        axios.get('http://localhost:4000/courses')
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            console.error('Error retrieving items:', error);
        });
    }, []);
    
    const categories = [
        {
            title: 'Category 1',
            images: [
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',

                ],
        },
        {
            title: 'Category 2',
            images: [
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png', 
            ],
        },
        {
            title: 'Category 3',
            images: [
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',    
            ],
        },
        {
            title: 'Category 4',
            images: [
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',     
            ],
        },
    ];
      
    return (    
        <div>
            <Navbar />
            <div className='background-image' />
            <span className="overlay">
                <div>
                    Éléments de la base de données :
                    {items.map((item) => (
                        <>
                            <div key={item._id}>{item.title} {item.shortTitle}</div>
                        </>
                    ))}
                </div>
                <CategoryList categories={categories} />
            </span>
        </div>
    )
};

export default Noodle;
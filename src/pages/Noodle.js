import React from 'react';
import CategoryList from '../components/CategoryList';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Noodle() {
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
            <div className='background-container'></div>
             <span className="overlay">
            <CategoryList categories={categories} />
                </span>
            </div>
 )
};

export default Noodle;
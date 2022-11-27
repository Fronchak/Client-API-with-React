import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Books() {

    const [books, setBooks] = useState([]);

    let navigate = useNavigate();
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const header = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }

    useEffect(() => {
        api.get('api/book', header)
            .then(response => {
                setBooks(response.data)
            })
    });

    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Fronchak" />
                <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="/book/new">Add new Book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>
            <h1>Registered Books</h1>
            <ul>
                {books.map(book => (
                    <li>
                    <strong>Title: </strong>
                    <p>{book.title}</p>
                    <strong>Author: </strong>
                    <p>{book.author}</p>
                    <strong>Price: </strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>
                    <strong>Release Date: </strong>
                    <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.lauchDate))}</p>
                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button type="button"> 
                        <FiTrash2 size={20} color="251FC5" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}
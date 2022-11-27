import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import api from "../../services/api";

export default function NewBook() {

    let navigate = useNavigate();
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [lauchDate, setLauchDate] = useState('');
    const [price, setPrice] = useState('');

    async function createNewBook(event) {
        event.preventDefault();
        const data =  {
            title,
            author,
            lauchDate,
            price
        }

        const header = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }

        try {
            const response = await api.post('api/book', data, header);
            return navigate ('/books');
        }
        catch (error) {
            alert('Error while recording Book! Try again: ' + error.message);
        }
    }

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Fronchak" />
                    <h1>Add New Book</h1>
                    <p>Enter the book information and click on 'Add'!</p>
                    <Link className="back-link" to="/books" >
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>
                <form onSubmit={createNewBook}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Author" 
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}    
                    />
                    <input 
                        type="date" 
                        value={lauchDate}
                        onChange={(event) => setLauchDate(event.target.value)}    
                    />
                    <input 
                        type="text" 
                        placeholder="Price" 
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function Books() {
    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Fronchak" />
                <span>Welcome, <strong>Gabriel</strong>!</span>
                <Link className="button" to="/book/new">Add new Book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>
            <h1>Registered Books</h1>
            <ul>
                <li>
                    <strong>Title: </strong>
                    <p>Algum livro</p>
                    <strong>Author: </strong>
                    <p>Algum author</p>
                    <strong>Price: </strong>
                    <p>R$ 59.90</p>
                    <strong>Release Date: </strong>
                    <p>10/10/2010</p>
                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button type="button"> 
                        <FiTrash2 size={20} color="251FC5" />
                    </button>
                </li>
                <li>
                    <strong>Title: </strong>
                    <p>Algum livro</p>
                    <strong>Author: </strong>
                    <p>Algum author</p>
                    <strong>Price: </strong>
                    <p>R$ 59.90</p>
                    <strong>Release Date: </strong>
                    <p>10/10/2010</p>
                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button type="button"> 
                        <FiTrash2 size={20} color="251FC5" />
                    </button>
                </li>
                <li>
                    <strong>Title: </strong>
                    <p>Algum livro</p>
                    <strong>Author: </strong>
                    <p>Algum author</p>
                    <strong>Price: </strong>
                    <p>R$ 59.90</p>
                    <strong>Release Date: </strong>
                    <p>10/10/2010</p>
                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button type="button"> 
                        <FiTrash2 size={20} color="251FC5" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
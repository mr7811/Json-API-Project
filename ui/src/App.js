import React, { useState, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { getBooks } from "./services/books.js"
import Book from './components/book1.jsx'
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export const App = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchBooks = async () => {

         const booksData =  await getBooks()
         setBooks(booksData)
       }

        fetchBooks()

    }, [])

    const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            if (index === -1) {
                _activeIndex.push(itemIndex);
            }
            else {
                _activeIndex.splice(index, 1);
            }
        }

        setActiveIndex(_activeIndex);
    }

    return (
        <div className="accordion-demo">
            <div className="card">
                <h5>Default</h5>
                <Accordion activeIndex={0}>
                    <AccordionTab header="Header I">
                    {
      books.map((bookData) => (
        <Book data={bookData} />

      ))
    }
                    </AccordionTab>
                    <AccordionTab header="Header II">
                    {
      books.map((bookData) => (
        <Book data={bookData} />

      ))
    }
                    </AccordionTab>
                    <AccordionTab header="Header III">
                    {
      books.map((bookData) => (
        <Book data={bookData} />

      ))
    }
                    </AccordionTab>
                </Accordion>

                
              </div>  
        </div>
    
    )
}

export default App
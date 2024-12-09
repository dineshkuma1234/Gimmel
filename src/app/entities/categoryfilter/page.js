import React from 'react';
import Header from "../../../components/header/header";
import '../../CommenStyle/filter.css';
import CategoriesCard from "../../usecases/categoriescard/CategoriesCard";
import Sidebar from "../../usecases/sidebar/sidebar";

function CategoryFilter() {

    
    return (
        <>
            <Header />

            <main id="main" className="top-space-filter">
                <div className="category-filter-container">
                    <div className="sidebar">
                        <div className="sidebar-inner">
                            <Sidebar />
                        </div>
                    </div>
                    <div className='main-container'>
                        <div className='body-top'>
                            <div className='body-top-left mt-3'>
                                <div className='short-by'>
                                    <p>Sort by</p>
                                    <select name="" id="" className='short-by-select'>
                                        <option>Most recent</option>
                                        <option>Most popular</option>
                                    </select>
                                </div>
                            </div>
                            <div className='body-top-right'>
                                <div className='view-type'>
                                    <div className='list-type-view'>
                                        <div className='list-icon-text'>List view</div>
                                        <div className='list-icon'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V16H9V20ZM2 8H7V4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V8ZM2 14H7V10H2V14ZM4 20H7V16H2V18C2 18.55 2.19583 19.0208 2.5875 19.4125C2.97917 19.8042 3.45 20 4 20ZM9 14H22V10H9V14ZM9 8H22V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H9V8Z" fill="#104E5B" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CategoriesCard />
                    </div>
                </div>
            </main>
        </>
    );
}

export default CategoryFilter;
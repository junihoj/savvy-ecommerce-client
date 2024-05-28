import React, { useState } from 'react';
import styles from '../../../styles/styles';
import { Link } from 'react-router-dom';
import { productData } from '../../../static/data';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState('');
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData.filter((product) => {
            product.name.toLowerCase.includes(term.toLowerCase());
        });
        setSearchData(filteredProducts);
    };
    return (
        <div className={`${styles.section}`}>
            <div className="hidden 800px:h-[50px] 800px:flex 800px:my-[20px] items-center justify-between">
                <div>
                    <Link to="/">
                        <img src="some.png" alt="" />
                    </Link>
                </div>
                {/* SEARCH */}
                <div className="w-[50%] relative">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="search Item"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                    />
                    <AiOutlineSearch size={30} className='absolute right-2 top-1.5 cursor-pointer'/>
                    {searchData && searchData.length !== 0 ? 
                        <div className='absolute min-h-[30-vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                            {searchData && searchData.map((item, idx)=>{
                                const d = item.name;
                                const product_name = d.replace(/\s+/g, "-");
                                return(
                                    <Link to={`/product/${product_name}`}>
                                        <div className="w-full flex items-start-py-3"></div>
                                    </Link>
                                )
                            })}
                        </div>:
                        <div></div>
                        
                        }
                </div>
            </div>
        </div>
    );
};

export default Header;
